import React from 'react';
import { FocusCards } from "@/components/ui/focus-cards";
import Link from 'next/link'; // Import Link component from Next.js
import Navbar from '@/components/Navbar';

function page() {
  const cards = [
    {
      title: "Lyon",
      src: "https://images.unsplash.com/photo-1618654240385-0e304bd2e3c1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/Places/Lyon", // Add link for each card
    },
    {
      title: "Toulouse",
      src: "https://images.unsplash.com/photo-1541792344043-3f5b1630e42d?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/Places/Toulouse", 
    },
    {
      title: "Avignon",
      src: "https://images.unsplash.com/photo-1635523058417-cac03b5d1674?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/Places/Avignon",
    },
    {
      title: "Nantes",
      src: "https://images.unsplash.com/photo-1512822999866-f690681f3952?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/Places/Nantes", 
    },
    {
      title: "Le mans",
      src: "https://images.pexels.com/photos/5381722/pexels-photo-5381722.jpeg",
      link: "/Places/Lemans",
    },
  ];

  return (
    <div className='placesContainer'>
      <div className="fixed top-0 left-0 w-full z-10 bg bg-black  bg-opacity-25 p-4 text-center fixed-content">
   

        <Navbar />

      </div>
      <div className=' pt-20 pb-5'>
        <div>

        <div className=" flex  w-full flex-col px-10 items-center">
          <h2 className="bg-clip-text text-transparent bg-gradient-to-b text-white text-xl md:text-4xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Explorez les villes de France
          </h2>
         
        </div>
        </div>
        <FocusCards cards={cards} />
      </div>
    </div>
  );
}

export default page;
