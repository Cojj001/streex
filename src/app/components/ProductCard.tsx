import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  category: string;
  badge?: string;
  gradientOverlay?: boolean;
}

export function ProductCard({ image, name, price, category, badge, gradientOverlay }: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-[2rem] bg-secondary mb-4 aspect-[3/4]">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {gradientOverlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        {badge && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full uppercase tracking-wider">
            {badge}
          </div>
        )}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
            <Heart className="w-5 h-5 text-primary" />
          </button>
          <button className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
            <ShoppingBag className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
      <div className="px-2">
        <div className="text-muted-foreground uppercase tracking-wider mb-1">{category}</div>
        <h4 className="mb-2">{name}</h4>
        <div className="text-primary">${price}</div>
      </div>
    </div>
  );
}
