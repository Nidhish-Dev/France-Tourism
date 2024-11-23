"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Navbar from '@/components/Navbar'

function page() {
  const images = [
    "https://images.pexels.com/photos/20047444/pexels-photo-20047444/free-photo-of-view-of-the-buvette-du-rocher-des-doms-cafe-in-avignon-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/29497343/pexels-photo-29497343/free-photo-of-charming-strasbourg-half-timbered-buildings-by-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/12264033/pexels-photo-12264033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-10 bg bg-white bg-opacity-15 p-4 text-center fixed-content">
        <Navbar />
      </div>

      {/* Images Slider */}
      <div className="">
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              AVIGNON – Ville des Papes
            </motion.p>
            <div className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Avignon, riche en histoire, est célèbre pour son palais papal et son pont légendaire.</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </div>
          </motion.div>
        </ImagesSlider>
      </div>

      {/* Basic Info Section with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/29477010/pexels-photo-29477010/free-photo-of-scenic-view-of-boats-and-architecture-in-nantes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Les bases d'Avignon</p>
          <p className="text-md">Localisation : Située sur les bords du Rhône, au sud de la France, proche de Marseille.</p>
          <p className="text-md">Langue : Français (anglais parlé dans les zones touristiques).</p>
          <p className="text-md">Monnaie : Euro (€).</p>
          <p className="text-md">Transports : Bon réseau de bus, trains et à 1h30 de l'aéroport de Marseille.</p>
        </div>
      </div>

      {/* Main Attractions Section with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2849223/pexels-photo-2849223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Principales attractions</p>
          <p className="text-md">Palais des Papes : Un des plus grands palais gothiques d'Europe.</p>
          <p className="text-md">Pont Saint-Bénézet : Le célèbre pont sur le Rhône chanté dans la chanson “Sur le pont d'Avignon”.</p>
          <p className="text-md">Place de l'Horloge : Centre animé de la ville avec cafés et théâtres.</p>
          <p className="text-md">Jardin des Doms : Superbe jardin au sommet d'une colline offrant une vue panoramique sur la ville.</p>
        </div>
      </div>

      {/* Food & Drink Section with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/29497343/pexels-photo-29497343/free-photo-of-charming-strasbourg-half-timbered-buildings-by-river.jpeg')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Nourriture et boisson</p>
          <p className="text-md">Les spécialités : Ratatouille, tapenade, et picholine (olive de Provence).</p>
          <p className="text-md">Les marchés : Goûtez aux produits locaux dans les marchés provençaux, comme le marché des Halles d'Avignon.</p>
          <p className="text-md">Les vins : Côtes du Rhône, notamment les vins de Châteauneuf-du-Pape.</p>
        </div>
      </div>

      {/* Things to Do Section with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/29498980/pexels-photo-29498980/free-photo-of-dynamic-cycling-sculpture-in-ger-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Choses à faire à Avignon</p>
          <p className="text-md">Visites guidées : Explorez les monuments historiques d'Avignon à travers des visites guidées passionnantes.</p>
          <p className="text-md">Festival d'Avignon : Festival de théâtre renommé qui se déroule chaque été dans la ville.</p>
          <p className="text-md">Balades à vélo : Explorez la région autour d'Avignon, y compris les vignobles et les villages pittoresques.</p>
        </div>
      </div>
    </div>
  );
}

export default page;
