import { useEffect, useRef } from "react";

export function NoiseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;

    // Draw at half resolution to save CPU and give a slight grainy texture,
    // css will stretch it back to full screen.
    const scale = 2;

    let w: number;
    let h: number;
    let idata: ImageData | null = null;
    let buffer32: Uint32Array | null = null;

    const resize = () => {
      w = Math.ceil(window.innerWidth / scale);
      h = Math.ceil(window.innerHeight / scale);
      canvas.width = w;
      canvas.height = h;
      try {
        idata = ctx.createImageData(w, h);
        buffer32 = new Uint32Array(idata.data.buffer);
      } catch (e) {
        console.error(e);
      }
    };

    window.addEventListener("resize", resize);
    resize();

    const renderNoise = () => {
      if (!idata || !buffer32) return;
      const len = buffer32.length;
      for (let i = 0; i < len; i++) {
        // Random black or white pixels
        buffer32[i] = Math.random() < 0.5 ? 0xff000000 : 0xffffffff;
      }
      ctx.putImageData(idata, 0, 0);
    };

    let lastTime = 0;
    const fps = 24; // 24 frames per second gives a good cinematic static vibe
    const interval = 1000 / fps;

    const loop = (time: number) => {
      animationFrameId = requestAnimationFrame(loop);
      const deltaTime = time - lastTime;

      if (deltaTime > interval) {
        renderNoise();
        lastTime = time - (deltaTime % interval);
      }
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-[0.015] mix-blend-screen"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
