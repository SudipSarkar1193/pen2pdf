import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-black py-6 shadow-xl sticky top-0 z-10 ">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center ">
        {/* Logo Section */}
        <div className="">
          <p className="text-gray-400 text-2xl font-mono italic">Pen2PDF</p>
        </div>

        {/* Title and Subtitle Section */}
        <div className="text-center ">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight animate-fade-in">
            Handwritten Note Converter
          </h1>
          <p className="text-gray-300 md:text-lg mt-2 font-medium italic animate-fade-in-up">
            Convert your notes to PDF effortlessly
          </p>
        </div>
      </div>

      {/* Inline CSS for Animations */}
      <style jsx>{`
        .animate-fade-in-down {
          animation: fadeInDown 0.5s ease-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out 0.2s both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out 0.4s both;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
