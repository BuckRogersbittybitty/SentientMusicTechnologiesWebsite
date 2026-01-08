import { NeuralSLogo } from "./components/NeuralSLogo";
import { VibratingString } from "./components/VibratingString";
import brioMotoIcon from "figma:asset/2812e38a902b76d9f30fd26fa3c2553b0764a436.png";

export default function App() {
  return (
    <div className="size-full bg-[#0f0f0f] text-white overflow-auto">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#0f0f0f]" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          {/* SMT Logo */}
          <div className="mb-8 flex justify-center">
            <NeuralSLogo className="w-24 h-24" animated={true} />
          </div>
          
          <h1 
            className="text-6xl md:text-7xl mb-3" 
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
          >
            Sentient Music Technologies
          </h1>
          
          <p 
            className="text-sm uppercase tracking-widest opacity-40 mb-4"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            LLC
          </p>
          
          <p 
            className="text-xl md:text-2xl opacity-70"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Designing the Way Musicians Practice
          </p>
        </div>
      </section>

      {/* BrioMoto App Family Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-5xl mb-6 text-center" 
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
          >
            Our Products
          </h2>
          <p 
            className="text-center text-lg opacity-60 mb-16 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Apps made by musicians, for musicians.
          </p>

          {/* BrioMoto Main App Card */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-[#667EEA] to-[#764BA2] rounded-2xl p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* BrioMoto Icon */}
                <div className="w-48 h-48 flex-shrink-0">
                  <img src={brioMotoIcon} alt="BrioMoto Icon" />
                </div>
                
                {/* BrioMoto Info */}
                <div className="flex-1 text-white">
                  {/* BrioMoto Title with Vibrating String */}
                  <div className="flex items-center gap-6 mb-4">
                    {/* Vibrating String - Left of BrioMoto Text */}
                    <div className="w-48 h-12 flex-shrink-0" style={{ overflow: 'visible' }}>
                      <VibratingString className="w-full h-full" />
                    </div>
                    
                    <h3 
                      className="text-5xl flex items-center" 
                      style={{ fontFamily: "'Georgia', serif", fontWeight: 700 }}
                    >
                      Brio<span style={{ fontStyle: 'italic', fontWeight: 400 }}>Moto</span>
                      <sup className="text-xl ml-1 opacity-80">™</sup>
                    </h3>
                  </div>
                  
                  <p 
                    className="text-xl mb-6"
                    style={{ fontFamily: "'Georgia', serif", marginLeft: 'calc(12rem + 2.25rem)' }}
                  >
                    Plan. Persist. <span style={{ fontStyle: 'italic' }}>Perform.</span>
                  </p>
                  
                  <p 
                    className="text-lg mb-4 leading-relaxed opacity-90"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    Our flagship application. BrioMoto allows you to dedicate your cognitive resources to learning, not to the management of practice.
                  </p>
                  
                  <p 
                    className="text-base mb-8 leading-relaxed opacity-85"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    Create timed fitness routines, or purchase from our growing list of content creators. 
                    Smart repertoire practice with interleaving. Recording and journaling with time-based annotations. 
                    Full statistics tracking with AI integration to help you refine and understand your habits. 
                    All organized with intelligent daily and weekly planning, and optional teacher dashboard 
                    integration for managing groups of students.
                  </p>
                  
                  <a 
                    href="https://briomoto.com" 
                    className="inline-block bg-white text-[#764BA2] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Visit BrioMoto.com →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Apps Grid */}
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {/* MetroOverDrone */}
            <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] hover:border-[#8B7FC7] transition-all w-full md:w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-[#667EEA] to-[#764BA2] rounded-xl mb-4 opacity-60" />
              <h4 
                className="text-xl mb-2"
                style={{ fontFamily: "'Georgia', serif", fontWeight: 600 }}
              >
                MetroOverDrone
              </h4>
              <p 
                className="text-sm opacity-40 mb-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Coming soon
              </p>
              <p 
                className="text-sm opacity-40"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                The MetroDrone from BrioMoto in a standalone app
              </p>
            </div>

            {/* BrioNote */}
            <div className="bg-[#1a1a1a] rounded-xl p-8 border border-[#2a2a2a] hover:border-[#8B7FC7] transition-all w-full md:w-80">
              <div className="w-16 h-16 bg-gradient-to-br from-[#667EEA] to-[#764BA2] rounded-xl mb-4 opacity-60" />
              <h4 
                className="text-xl mb-2"
                style={{ fontFamily: "'Georgia', serif", fontWeight: 600 }}
              >
                BrioNote
              </h4>
              <p 
                className="text-sm opacity-40 mb-2"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Coming soon
              </p>
              <p 
                className="text-sm opacity-40"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Integrated journaling and recording for musicians, designed for everyone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-24 px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <h2 
            className="text-5xl mb-6 text-center" 
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
          >
            Consulting & Development
          </h2>
          <p 
            className="text-center text-lg opacity-60 mb-16 max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Sentient Music Technologies offers consulting and development services 
            to help you bring your app vision to life with the same care and attention to detail 
            we bring to our own products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Service 1 */}
            <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#2a2a2a]">
              <div className="w-12 h-12 rounded-lg bg-[#8B7FC7] bg-opacity-20 flex items-center justify-center mb-6">
                <NeuralSLogo className="w-8 h-8" nodeColor="#8B7FC7" pathColor="#8B7FC7" accentColor="#8B7FC7" />
              </div>
              <h3 
                className="text-2xl mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                App Strategy
              </h3>
              <p 
                className="opacity-70 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                From concept to launch, we help you define your vision, prioritize features, 
                and create a roadmap that delivers real value to your users.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#2a2a2a]">
              <div className="w-12 h-12 rounded-lg bg-[#8B7FC7] bg-opacity-20 flex items-center justify-center mb-6">
                <NeuralSLogo className="w-8 h-8" nodeColor="#8B7FC7" pathColor="#8B7FC7" accentColor="#8B7FC7" />
              </div>
              <h3 
                className="text-2xl mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                Full-Stack Development
              </h3>
              <p 
                className="opacity-70 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Development across iOS, Android, and web platforms using modern 
                frameworks and best practices for performance and scalability.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-[#0f0f0f] p-8 rounded-xl border border-[#2a2a2a]">
              <div className="w-12 h-12 rounded-lg bg-[#8B7FC7] bg-opacity-20 flex items-center justify-center mb-6">
                <NeuralSLogo className="w-8 h-8" nodeColor="#8B7FC7" pathColor="#8B7FC7" accentColor="#8B7FC7" />
              </div>
              <h3 
                className="text-2xl mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
              >
                Design & UX
              </h3>
              <p 
                className="opacity-70 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                Thoughtful user experience design and visual identity that makes your app 
                both beautiful and intuitive to use.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p 
              className="text-lg mb-6 opacity-70"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Ready to discuss your project?
            </p>
            <a 
              href="mailto:ideas@briomoto.com" 
              className="inline-block bg-[#8B7FC7] text-white px-10 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all text-lg"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo & Name */}
            <div className="flex items-center gap-4">
              <NeuralSLogo className="w-12 h-12" />
              <div>
                <p 
                  className="text-lg"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
                >
                  Sentient Music Technologies
                </p>
                <p 
                  className="text-xs opacity-40"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  LLC
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p 
                className="text-sm opacity-60"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                © 2025 Sentient Music Technologies, LLC
              </p>
              <p 
                className="text-xs opacity-40 mt-1"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                All rights reserved. BrioMoto™ is a trademark of SMT, LLC.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}