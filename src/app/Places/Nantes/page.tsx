"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Navbar from '@/components/Navbar';

function NantesPage() {
  const images = [
    "https://images.pexels.com/photos/29477010/pexels-photo-29477010/free-photo-of-scenic-view-of-boats-and-architecture-in-nantes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1512822999866-f690681f3952?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.pexels.com/photos/17645338/pexels-photo-17645338/free-photo-of-prieure-saint-nicolas-on-sea-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
              Nantes – Ville des Ducs
            </motion.p>
            <div className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Nantes, ville historique, est le berceau des Ducs de Bretagne et regorge de monuments fascinants et de parcs.</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </div>
          </motion.div>
        </ImagesSlider>
      </div>

      {/* Basic Info Section for Nantes with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/17764598/pexels-photo-17764598/free-photo-of-cultural-center-la-fabrique-building-in-nantes-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Les bases de Nantes</p>
          <p className="text-md">Localisation : Nantes est une ville située sur les bords de la Loire, dans l'ouest de la France.</p>
          <p className="text-md">Langue : Français (l'anglais est couramment parlé dans les zones touristiques).</p>
          <p className="text-md">Monnaie : Euro (€).</p>
          <p className="text-md">Transports : Très bien desservie par le tramway et les bus, avec des connexions en train vers d'autres villes.</p>
        </div>
      </div>

      {/* Main Attractions Section for Nantes with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/27300465/pexels-photo-27300465/free-photo-of-statuary-in-nantes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=22')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Principales attractions</p>
          <p className="text-md">Château des Ducs de Bretagne : Un impressionnant château médiéval avec un musée dédié à l'histoire de Nantes.</p>
          <p className="text-md">Les Machines de l'île : Un parc d'attractions unique inspiré par Jules Verne, avec des créations mécaniques géantes.</p>
          <p className="text-md">Le Jardin des Plantes : Un magnifique jardin botanique en plein cœur de la ville.</p>
        </div>
      </div>

      {/* Food & Drink Section for Nantes with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1512822999866-f690681f3952?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Nourriture et boissons à Nantes</p>
          <p className="text-md">Les spécialités : Beurre blanc, crêpes, et galettes bretonnes.</p>
          <p className="text-md">Les marchés : Le marché de Talensac est l'un des plus populaires pour découvrir la cuisine locale.</p>
          <p className="text-md">Les vins : Nantes est la capitale du Muscadet, un vin blanc sec de la région.</p>
        </div>
      </div>

      {/* Things to Do Section for Nantes with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1597225764524-beb6e071d9ff?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Choses à faire à Nantes</p>
          <p className="text-md">Promenade : Baladez-vous le long de la Loire et explorez les rives verdoyantes.</p>
          <p className="text-md">Les Machines de l'île : Montez à bord des créatures mécaniques géantes et découvrez les secrets de leur conception.</p>
          <p className="text-md">Cyclisme : Nantes est une ville idéale pour découvrir la région à vélo.</p>
        </div>
      </div>
    </div>
  );
}

export default NantesPage;
