import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  mainImage: string;
}

export function HeroSection({ mainImage }: HeroSectionProps) {
  return (
    <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
        <img 
          src={mainImage} 
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-white uppercase tracking-wider">New Collection 2026</span>
          </div>
          
          <h1 className="mb-6 text-white leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
            FOR THE<br />
            BOLD &<br />
            FEARLESS
          </h1>
          
          <p className="text-white/90 mb-8 max-w-md" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
            Express yourself with our latest streetwear collection designed for the youth who dare to be different.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-primary px-8 py-4 rounded-full hover:bg-white/90 transition-all duration-300 flex items-center gap-2 group">
              <span className="uppercase tracking-wide">Shop Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/30">
              <span className="uppercase tracking-wide">Explore</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
