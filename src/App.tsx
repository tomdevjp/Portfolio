import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { NoiseBackground } from "./components/NoiseBackground";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Works } from "./components/Works";
import { Skills } from "./components/Skills";
import { Contact, Footer } from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <NoiseBackground />
        <Header />
        <main className="max-w-7xl mx-auto px-6 md:px-12">
          <Hero />
          <About />
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-0 md:gap-24 w-full">
            <div className="w-full md:w-1/2">
              <Works />
            </div>
            <div className="w-full md:w-1/2">
              <Skills />
            </div>
          </div>
        </main>
        <Contact />
        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  );
}
