import React from "react";
import { FiMusic } from "react-icons/fi";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-20 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-4">THE REAL SOUND</h1>
        <p className="text-lg text-white">
          Découvrez une expérience musicale authentique et immersive.
        </p>
        <div className="mt-8">
          <button className="bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition duration-300">
            Scroll down
          </button>
        </div>
      </div>
      {/* Animation de musique */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <FiMusic className="text-red-400 text-5xl mx-4 animate-bounce" />
        <FiMusic className="text-green-400 text-5xl mx-4 animate-bounce" />
        <FiMusic className="text-yellow-400 text-5xl mx-4 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
