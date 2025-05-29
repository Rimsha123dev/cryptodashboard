"use client"
import { useState } from "react";
import Cryptodashboard from "./components/Cryptodashboard";

export default function Home() {
  const [showCrypto,setShowCrypto]= useState(false);
  const handleExploreClick=()=>{
    setShowCrypto(true);
    document.getElementById("crypto-section")?.scrollIntoView({behavior:"smooth"});
  }
  return (
    <div className="bg-black h-screen ">
      <header className="text-center text-white py-16 px-4">
        <h1 className="capitalize font-bold mb-4 text-transparent bg-clip-text text-6xl bg-gradient-to-r from-rose-400 to-indigo-400">
          Cryptocurrecny data dashboard
          <br />
           Where digital gold meets real-time magic 
          </h1>
          <br />
          <p className="text-xl mb-8  max-w-2xl mx-auto mt-1">
              Cryptocurrencies are digital assets that use cryptography to secure transactions. 
  This dashboard helps you monitor price fluctuations, identify trends, and make 
  informed investment decisions in this volatile market.
          </p>

          <button
          onClick={handleExploreClick}
          className="inline-block rounded-full px-10 py-5 capitalize bg-purple-950 font-semibold shadow-lg
             transition-transform hover:bg-pink-950 hover:scale-105  " aria-label="Explore Crypto Stats"
          >
            Cryptocurrency current data stats
          </button>
      </header>
      {
        showCrypto && (
          <section id="crypto-section" className="py-16 bg-white">
            <div className="max-w-7xl px-6 mx-auto">
              <Cryptodashboard/>

            </div>

          </section>
        )
      }

      <footer className="bg-black text-white text-center py-6 mt-7">
         &copy;2025 RimshaDev Cryptocurrecny data dashboard. All rights reserved
      </footer>



      
      
    </div>
   
  );
}
