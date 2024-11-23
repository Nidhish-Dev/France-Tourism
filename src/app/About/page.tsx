import React from 'react'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import Navbar from '@/components/Navbar';
function page() {
  const testimonials = [
    {
      quote:
        "Bonjour. Je m'appelle Nidhish, et je poursuis mes études en B.Tech en informatique avec une spécialisation en ingénierie logicielle à SRMIST Kattankulathur.Dans ce cadre, j'ai analysé la ville d'Avignon en France.",
      name: "Nidhish Rathore",
      designation: "Nidhish Rathore",
      src: "/nidhish.jpg",
    },
    {
      quote:
        "Bonjour. Je m'appelle Riddhima, et je poursuis mes études en B.Tech en informatique avec une spécialisation en ingénierie logicielle à SRMIST Kattankulathur.Dans ce cadre, j'ai analysé la ville d'Le Mans en France.",
      name: "Riddhima Singh",
      designation: "Riddhima Singh",
      src: "/riddhima.jpg",
    },
    {
      quote:
        "Bonjour. Je m'appelle Mourya Shree, et je poursuis mes études en B.Tech en informatique avec une spécialisation en ingénierie logicielle à SRMIST Kattankulathur.Dans ce cadre, j'ai analysé la ville d'Toulouse en France.",
      name: "Talluri Mourya Sree",
      designation: "Talluri Mourya Sree",
      src: "/mourya.jpeg",
    },
    {
      quote:
        "Bonjour. Je m'appelle Soumya, et je poursuis mes études en B.Tech en informatique avec une spécialisation en ingénierie logicielle à SRMIST Kattankulathur.Dans ce cadre, j'ai analysé la ville d'Nantes en France.",
      name: "Soumya Pandey",
      designation: "Soumya Pandey",
      src: "/soumya.jpg",
    },
    {
      quote:
        "Bonjour. Je m'appelle Ziya, et je poursuis mes études en B.Tech en informatique avec une spécialisation en ingénierie logicielle à SRMIST Kattankulathur.Dans ce cadre, j'ai analysé la ville d'Lyon en France.",
      name: "Ziya Khan",
      designation: "Ziya Khan",
      src: "/ziya.jpeg",
    },
  ];
  return (
    <div>
       <div className="fixed top-0 left-0 w-full z-10 bg bg-white  bg-opacity-15 p-4 text-center fixed-content">
   

   <Navbar />

 </div>
      <div className='mt-20'>
      <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  )
}

export default page
