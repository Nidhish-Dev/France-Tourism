"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Navbar from '@/components/Navbar';

function LeMansPage() {
  const images = [
    "https://images.pexels.com/photos/17187908/pexels-photo-17187908/free-photo-of-racing-car-on-asphalt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/26654780/pexels-photo-26654780/free-photo-of-man-walking-out-shop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1495442358998-961b69f45703?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              Le Mans – Ville du Sport Automobile
            </motion.p>
            <div className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Le Mans, connue pour la célèbre course des 24 heures, allie patrimoine historique et sport automobile.</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </div>
          </motion.div>
        </ImagesSlider>
      </div>

      {/* Basic Info Section for Le Mans with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/20895328/pexels-photo-20895328/free-photo-of-blurred-car-on-race-track.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Les bases du Mans</p>
          <p className="text-md">Localisation : Le Mans est situé dans la région des Pays de la Loire, au nord-ouest de la France.</p>
          <p className="text-md">Langue : Français (l'anglais est aussi parlé dans les zones touristiques).</p>
          <p className="text-md">Monnaie : Euro (€).</p>
          <p className="text-md">Transports : Bien desservie par des trains, des bus, et un réseau de tramway local.</p>
        </div>
      </div>

      {/* Main Attractions Section for Le Mans with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/17187908/pexels-photo-17187908/free-photo-of-racing-car-on-asphalt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Principales attractions</p>
          <p className="text-md">Les 24 heures du Mans : La célèbre course automobile qui se déroule chaque année.</p>
          <p className="text-md">La Cité Plantagenêt : Le vieux quartier médiéval avec ses maisons à colombages.</p>
          <p className="text-md">Musée des 24 Heures : Découvrez l'histoire fascinante de la course automobile du Mans.</p>
        </div>
      </div>

      {/* Food & Drink Section for Le Mans with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/16676135/pexels-photo-16676135/free-photo-of-man-sitting-on-wooden-bench-in-park.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Nourriture et boissons au Mans</p>
          <p className="text-md">Les spécialités : Rillettes, andouillette, et viande d'agneau.</p>
          <p className="text-md">Les marchés : Le marché des Jacobins, parfait pour les produits locaux.</p>
          <p className="text-md">Les vins : Le Mans est proche de la région viticole de la Loire, avec des vins comme le Muscadet et le Sancerre.</p>
        </div>
      </div>

      {/* Things to Do Section for Le Mans with Parallax Effect */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5466965/pexels-photo-5466965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundAttachment: "fixed", // Parallax effect
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Choses à faire au Mans</p>
          <p className="text-md">Assister à la course des 24 heures du Mans : L'un des événements les plus célèbres au monde.</p>
          <p className="text-md">Visitez la vieille ville : Découvrez le patrimoine médiéval et les rues pittoresques du centre historique.</p>
          <p className="text-md">Faites une balade à vélo autour du circuit automobile et dans les beaux parcs de la ville.</p>
        </div>
      </div>
    </div>
  );
}

export default LeMansPage;
