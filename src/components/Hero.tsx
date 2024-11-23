"use client";
import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";


function Hero() {
  return (
    <>
      <div className="HeroContainer scroll-smooth">
        <div className="fixed top-0 left-0 w-full z-10 bg-black bg-opacity-25 p-4 text-center">
          <Navbar />
        </div>

        {/* Parallax Section 1 */}
        <div className="h-screen flex items-center justify-center w-full flex-col px-4 text-center pt-20 bg-fixed bg-cover bg-center" >
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b text-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            tourisme français
          </h2>
          <p className="max-w-xl mx-auto text-white text-sm md:text-lg">
            "Découvrez la beauté et l'élégance de la France, un voyage inoubliable au cœur de l'art, de l'histoire et de la gastronomie."
          </p>
          <p className="text-gray-400 text-sm mt-10">
            Faites défiler vers le bas pour continuer
          </p>
        </div>

        {/* Parallax Section 2 */}
        <div className="facts bg-fixed bg-cover bg-center h-screen flex items-center justify-center w-full flex-col px-4 text-center text-white" style={{ backgroundImage: "url('/factsbg.jpg')" }}>
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b text-white text-4xl md:text-4xl lg:text-4xl font-sans py-2 px-10 md:py-10 relative z-20 font-bold tracking-tight">
            La France est une plaque tournante mondiale de l'art, de la mode, de l'histoire et de ses cultures
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-white">
            Attractions de classe mondiale : abrite des monuments emblématiques tels que la Tour Eiffel, le musée du Louvre et le château de Versailles.
          </p>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-white mt-5">
            Centre culturel : réputé pour l'art, la mode et l'architecture ; Paris est connue comme la Ville Lumière.
          </p>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-white mt-5">
            Paysages diversifiés : offre tout, des plages méditerranéennes de la Côte d'Azur aux Alpes enneigées.
          </p>
        </div>

        {/* Parallax Section 3 */}
        <div className="explore bg-fixed bg-cover bg-center h-screen flex items-center justify-center w-full flex-col px-4 text-center pt-20" style={{ backgroundImage: "url('/explore.jpg')" }}>
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b text-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            Explorer les lieux
          </h2>
          <p className="max-w-xl mx-auto text-white text-sm md:text-lg">
            Explorez les lieux emblématiques de la France et laissez-vous séduire par sa beauté inégalée.
          </p>
          <Link className="text-blue-300 mt-4 underline" href={"/Places"}> <p className="">Lieux &gt;</p></Link>
        </div>
      </div>
    </>
  );
}

export default Hero;
