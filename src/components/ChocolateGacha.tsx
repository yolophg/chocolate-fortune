"use client";

import { motion } from "framer-motion";
import { chocolates } from "@/data/chocolates";
import type { FortuneResult } from "@/types/chocolate";
import Image from "next/image";
import { useState } from "react";
import { t } from "@/i18n/translations";

interface Props {
  isSpinning: boolean;
  setIsSpinning: (value: boolean) => void;
  setResult: (result: FortuneResult) => void;
  lang: "ko" | "en";
}

export default function ChocolateGacha({
  isSpinning,
  setIsSpinning,
  setResult,
  lang,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChocolate, setSelectedChocolate] = useState<
    (typeof chocolates)[0] | null
  >(null);
  const [isInitial, setIsInitial] = useState(true);

  const handleGacha = async () => {
    setIsInitial(false);
    setIsSpinning(true);
    const randomChocolate =
      chocolates[Math.floor(Math.random() * chocolates.length)];
    setSelectedChocolate(randomChocolate);

    // initial rapid rotation with increased speed
    const spinInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % chocolates.length);
    }, 50);

    try {
      const response = await fetch("/api/fortune", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chocolateId: randomChocolate.id, lang }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      // enhanced rotation effect sequence
      setTimeout(() => {
        clearInterval(spinInterval);

        // medium speed rotation phase
        const mediumSpinInterval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % chocolates.length);
        }, 100);

        // final slowing phase
        setTimeout(() => {
          clearInterval(mediumSpinInterval);

          const slowSpinInterval = setInterval(() => {
            setCurrentIndex((prev) => {
              const next = (prev + 1) % chocolates.length;
              if (chocolates[next].id === randomChocolate.id) {
                clearInterval(slowSpinInterval);
                setTimeout(() => {
                  setResult({
                    chocolate: data.chocolate,
                    fortune: data.fortune,
                  });
                  setIsSpinning(false);
                }, 200);
              }
              return next;
            });
          }, 150);
        }, 400);
      }, 600);
    } catch (error) {
      console.error("Fortune generation failed:", error);
      alert(t(lang, "error.fortune"));
      setIsSpinning(false);
    }
  };

  return (
    <div className='relative h-[300px] sm:h-[400px] flex flex-col items-center justify-between max-w-[280px] sm:max-w-[320px] mx-auto'>
      {/* slot machine display */}
      <div className='w-[200px] sm:w-[240px] h-[160px] sm:h-[200px] bg-gradient-to-b from-[#8D6E63] to-[#4E342E] rounded-xl overflow-hidden relative border-4 border-[#FFD700] shadow-2xl transform perspective-[1000px]'>
        {/* top decoration */}
        <div className='absolute top-0 left-0 w-full h-6 sm:h-8 bg-gradient-to-r from-[#FFD700] via-[#FFA000] to-[#FFD700] flex items-center justify-center'>
          <span className='text-[#4E342E] text-xs sm:text-sm font-bold font-content'>
            CHOCOLATE FORTUNE GACHA
          </span>
        </div>

        {/* side shadows and depth effect */}
        <div className='absolute left-0 top-8 bottom-8 w-8 bg-black/20 transform skew-y-6' />
        <div className='absolute right-0 top-8 bottom-8 w-8 bg-black/20 transform -skew-y-6' />

        {/* slot window */}
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] sm:w-[180px] h-[120px] sm:h-[140px] bg-[#2A1B16] rounded-lg border-2 border-[#FFD700] shadow-inner overflow-hidden'>
          <div className='absolute inset-0 flex items-center justify-center'>
            {isInitial ? (
              // initial state - mystery effect
              <motion.div
                className='w-32 h-32 flex items-center justify-center bg-[#4E342E] rounded-lg'
                animate={{
                  scale: [1, 1.1, 1],
                  rotateY: [0, 10, 0, -10, 0],
                  transition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <div className='text-[#FFD700] text-6xl font-bold drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]'>
                  ?
                </div>
              </motion.div>
            ) : (
              // rotating slot effect
              <div className='relative w-[120px] sm:w-[160px] h-[400px]'>
                <motion.div
                  className='absolute inset-0'
                  animate={
                    isSpinning
                      ? {
                          y: [0, -chocolates.length * 160],
                          scale: [1, 1.02, 1],
                          transition: {
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "linear",
                          },
                        }
                      : {}
                  }
                >
                  {[...chocolates, ...chocolates].map((chocolate, index) => (
                    <div
                      key={`${chocolate.id}-${index}`}
                      className='absolute w-[120px] sm:w-[160px] h-[120px] sm:h-[160px] flex items-center justify-center'
                      style={{
                        top: `${index * 120}px`,
                        transform: "perspective(1000px) rotateX(15deg)",
                        transformOrigin: "center center",
                      }}
                    >
                      <Image
                        src={chocolate.image}
                        alt={chocolate.name.ko}
                        width={120}
                        height={120}
                        className='rounded-lg shadow-lg sm:w-[160px] sm:h-[160px]'
                        style={{
                          filter: "brightness(0.9)",
                          transform: "scale(0.9)",
                        }}
                        priority
                      />
                    </div>
                  ))}
                </motion.div>
                {/* overlay for the slot machine */}
                <div
                  className='absolute inset-0 pointer-events-none'
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(42,27,22,1) 0%, rgba(42,27,22,0) 20%, rgba(42,27,22,0) 80%, rgba(42,27,22,1) 100%)",
                  }}
                />
              </div>
            )}
          </div>

          {/* slot reflection effect */}
          <div className='absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none' />
        </div>

        {/* bottom decoration */}
        <div className='absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-[#8D6E63] via-[#6D4C41] to-[#8D6E63]'>
          <div className='absolute inset-0 flex items-center justify-around px-4'>
            <div className='w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_8px_rgba(255,215,0,0.6)]' />
            <div className='w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_8px_rgba(255,215,0,0.6)]' />
            <div className='w-2 h-2 rounded-full bg-[#FFD700] shadow-[0_0_8px_rgba(255,215,0,0.6)]' />
          </div>
        </div>
      </div>

      {/* lever */}
      <motion.button
        whileHover={{
          scale: 1.05,
          y: -5,
        }}
        whileTap={{
          scale: 0.95,
          rotateZ: 30,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        }}
        className='relative w-16 sm:w-24 h-[100px] sm:h-[120px] disabled:opacity-50 group select-none'
        onClick={handleGacha}
        disabled={isSpinning}
      >
        {/* pulsing arrow indicator */}
        <motion.div
          className='absolute -top-8 left-1/2 -translate-x-1/2'
          initial={{ opacity: 0.5, y: -5 }}
          animate={{
            opacity: [0.5, 1, 0.5],
            y: [-5, 0, -5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className='text-[#FFD700] text-2xl sm:text-3xl'>↓</div>
        </motion.div>

        {/* "Click" tex t with glow effect */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 font-bold text-[#FFD700] text-base sm:text-lg font-content
          animate-pulse drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] -right-10`}
        >
          {t(lang, "button.click")}
        </div>

        {/* lever components with enhanced styling */}
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 h-8 sm:h-10'>
          <div
            className='w-full h-full rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA000] shadow-lg border-2 border-[#4E342E] 
            group-hover:shadow-[0_0_15px_rgba(255,215,0,0.6)]'
          />
          <div className='absolute top-1 left-1 w-3 h-3 rounded-full bg-white opacity-50' />
        </div>

        <div
          className='absolute top-8 left-1/2 -translate-x-1/2 w-3 sm:w-4 h-20 sm:h-24 
          bg-gradient-to-r from-[#8D6E63] to-[#6D4C41] rounded-full shadow-md
          group-hover:from-[#A1887F] group-hover:to-[#8D6E63]'
        />

        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-12 sm:w-16 h-12 sm:h-16'>
          <div
            className='w-full h-full rounded-full bg-gradient-to-br from-[#FFD700] to-[#FFA000] shadow-lg border-2 border-[#4E342E]
            group-hover:shadow-[0_0_15px_rgba(255,215,0,0.6)]'
          />
          <div className='absolute top-2 left-2 w-4 h-4 rounded-full bg-white opacity-30' />
          <div className='absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#4E342E]' />
        </div>
      </motion.button>
    </div>
  );
}
