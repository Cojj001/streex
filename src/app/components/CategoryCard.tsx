import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface CategoryCardProps {
  image: string;
  hashtag: string;
  title: string;
  gradient?: string;
}

export function CategoryCard({ image, hashtag, title, gradient }: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] h-[320px] cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className={`absolute inset-0 ${gradient || 'bg-black/20'} group-hover:bg-black/30 transition-all duration-300`} />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="text-white/90 mb-2 uppercase tracking-wider">{hashtag}</div>
        <div className="flex items-center justify-between">
          <h3 className="text-white">{title}</h3>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <ArrowUpRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
