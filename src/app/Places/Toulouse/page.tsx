"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Navbar from '@/components/Navbar';

function ToulousePage() {
  const images = [
    "https://images.pexels.com/photos/6194135/pexels-photo-6194135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/19968908/pexels-photo-19968908/free-photo-of-interior-of-the-church-of-the-jacobins-toulouse-france.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/29477009/pexels-photo-29477009/free-photo-of-riverside-view-of-normand-building-and-boats.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
              Toulouse – Ville Rose
            </motion.p>
            <div className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Toulouse, surnommée la "Ville Rose", est une ville vivante, dynamique et pleine de culture, connue pour son architecture en brique rose.</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </div>
          </motion.div>
        </ImagesSlider>
      </div>

      {/* Basic Info Section for Toulouse with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/19130822/pexels-photo-19130822/free-photo-of-barren-trees-reflecting-in-canal-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Les bases de Toulouse</p>
          <p className="text-md">Localisation : Située dans le sud-ouest de la France, Toulouse est la capitale de la région Occitanie.</p>
          <p className="text-md">Langue : Français (l'anglais est couramment parlé dans les zones touristiques).</p>
          <p className="text-md">Monnaie : Euro (€).</p>
          <p className="text-md">Transports : Très bien desservie par des bus, tramways, et trains.</p>
        </div>
      </div>

      {/* Main Attractions Section for Toulouse with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/29514908/pexels-photo-29514908/free-photo-of-majestic-facade-of-sacre-coeur-basilica-in-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Principales attractions</p>
          <p className="text-md">Place du Capitole : Cœur vibrant de la ville avec sa magnifique place.</p>
          <p className="text-md">Basilique Saint-Sernin : L'une des plus grandes églises romanes d'Europe.</p>
          <p className="text-md">Musée des Augustins : Musée d'art majeur de Toulouse avec des collections d'art médiéval et Renaissance.</p>
          <p className="text-md">Cité de l'Espace : Musée et centre de découverte de l'astronomie et de l'aérospatial.</p>
        </div>
      </div>

      {/* Food & Drink Section for Toulouse with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1148999/pexels-photo-1148999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Nourriture et boissons à Toulouse</p>
          <p className="text-md">Les spécialités : Cassoulet, foie gras, magret de canard.</p>
          <p className="text-md">Les marchés : Marché Victor Hugo pour des produits frais et locaux.</p>
          <p className="text-md">Les vins : Découvrez les vins de la région, notamment le vin de Fronton et le Gaillac.</p>
        </div>
      </div>

      {/* Things to Do Section for Toulouse with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6194135/pexels-photo-6194135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Choses à faire à Toulouse</p>
          <p className="text-md">Visites : Découvrez les canaux de Toulouse en bateau ou à vélo.</p>
          <p className="text-md">Festival : Participez au festival Rio Loco, un événement de musique du monde.</p>
          <p className="text-md">Sports : Assistez à un match de rugby ou à un match de football au Stade de Toulouse.</p>
        </div>
      </div>
    </div>
  );
}

export default ToulousePage;
