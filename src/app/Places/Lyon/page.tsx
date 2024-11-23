"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import { LayoutGrid } from "@/components/ui/layout-grid";
import Navbar from '@/components/Navbar'

function page() {
  const images = [
    "https://images.unsplash.com/photo-1689613702356-317588d2461a?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1661963316720-d81ae59b1951?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1623578414984-ee446ff9c69e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
              LYON – Capitale Gastronomique  <br /> de France
            </motion.p>
            <div className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Lyon, nichée dans le sud-est de la France, est réputée pour son histoire, sa culture et sa cuisine exceptionnelle</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </div>
          </motion.div>
        </ImagesSlider>
      </div>

      {/* Basic Info Section with Background Image */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12" // Flexbox centering
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/8430275/pexels-photo-8430275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Les bases de Lyon</p>
          <p className="text-md">Localisation : Au bord du Rhône et de la Saône, entre Paris et Marseille.</p>
          <p className="text-md">Langue : Français (anglais parlé dans les zones touristiques).</p>
          <p className="text-md">Monnaie : Euro (€).</p>
          <p className="text-md">Transports : métro, tramways et bus efficaces.</p>
        </div>
      </div>

      {/* Basic Info Section with Background Image */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12" // Flexbox centering
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/8430271/pexels-photo-8430271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Principales attractions</p>
          <p className="text-md">Vieux Lyon : Vieille Ville classée UNESCO avec traboules et charme Renaissance.</p>
          <p className="text-md">Basilique de Fourvière : église emblématique au sommet d'une colline avec vue sur la ville.</p>
          <p className="text-md">Parc de la Tête d'Or : parc urbain avec lac, jardins et zoo gratuit.</p>
          <p className="text-md">Presqu’île : Centre-ville animé avec commerces et places.</p>
          <p className="text-md">Musée des Confluences : Musée des sciences et d'anthropologie au confluent de la rivière.</p>
        </div>
      </div>

      {/* Basic Info Section with Background Image */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12" // Flexbox centering
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/29398079/pexels-photo-29398079/free-photo-of-greenhouses-in-parc-de-la-tete-d-or-lyon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Nourriture et boisson</p>
          <p className="text-md">Bouchons Lyonnais : restaurants locaux proposant des spécialités comme les quenelles et le coq au vin.</p>
          <p className="text-md">Halles de Lyon Paul Bocuse : Marché couvert gourmand.</p>
          <p className="text-md">Plats incontournables : salade lyonnaise, saucisson brioché, tarte aux pralines.</p>
          <p className="text-md">Vins locaux : Provenant des régions du Beaujolais et des Côtes du Rhône.</p>
        </div>
      </div>

      {/* Basic Info Section with Background Image */}
      <div
        className="basic text-white relative h-screen flex items-center justify-center pt-12 pb-12" // Flexbox centering
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/15073996/pexels-photo-15073996/free-photo-of-the-carrousel-de-la-comedie-in-montpellier-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Dark overlay */}
        <div className="relative z-10 px-4 md:px-8 mx-auto text-center">
          <p className="text-4xl font-semibold mb-10">Choses à faire</p>
          <p className="text-md">Croisières fluviales : Glissez sur le Rhône ou la Saône.</p>
          <p className="text-md">Traboules : Découvrez les passages cachés de la vieille ville.</p>
          <p className="text-4xl font-semibold my-10">Fêtes </p>
           <p className="text-md"> Fête des Lumières (décembre) : Superbes jeux de lumière.</p>
            <p className="text-md">Nuits de Fourvière (été) : Festival de musique et d'arts.</p>
        </div>
      </div>

     
    </div>
  );
}

export default page;
