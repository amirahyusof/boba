"use client"
import React, { useRef, useEffect} from 'react'
import { gsap } from 'gsap'

export default function Hero(){
  const cupRef = useRef(null)
  const liquidRef = useRef(null)
  const pearlsRef = useRef(null)
  const strawRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "back.out(1.7)", duration: 1 } });

    tl.from(cupRef.current, { y: 100, opacity: 0 })
      .from(liquidRef.current, { scaleY: 0, transformOrigin: "bottom", duration: 1 }, "-=0.5")
      .from(pearlsRef.current, { y: -50, opacity: 0, stagger: 0.2 })
      .from(strawRef.current, { y: -200, opacity: 0, duration: 0.8 }, "-=0.5");
  }, []);

  return (
    <section className='hero-container'>
      <div className='hero-text'>
        <h1 className='hero-title'>Build Your Perfect Boba</h1>
        <p className='hero-subtitle'>
          Fun. Fresh. Chewy. Create your dream cup of boba tea with endless flavours and toppings!
        </p>
        <button className='btn-primary'>Start Building</button>
      </div>

      <div className='hero-boba relative w-64 h-96 flex items-center justify-center'>
        <img ref={cupRef} src="/images/cup.png" alt="Boba Cup" className="absolute w-40 z-10" />
        <div ref={pearlsRef} className="absolute bottom-6 flex space-x-2 z-20">
          <img src="/images/small-boba.png" alt="Pearl" className="w-6 h-6" />
          <img src="/images/middle-boba.png" alt="Pearl" className="w-6 h-6" />
          <img src="/images/big-boba.png" alt="Pearl" className="w-6 h-6" />
        </div>
      </div>
    </section>
  )
}

