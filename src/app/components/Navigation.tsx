import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ["New Drops", "Collections", "Accessories", "Sale"];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-b border-white/5 z-50 text-foreground h-20 flex items-center"
      >
        <div className="w-full max-w-[1600px] mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-secondary rounded-full transition-colors"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <div className="flex flex-col items-center lg:items-start group cursor-pointer">
              <span className="tracking-tighter leading-none font-black text-3xl group-hover:scale-105 transition-transform duration-300">STREEX</span>
              <span className="tracking-[0.3em] uppercase text-[0.6rem] font-bold text-muted-foreground group-hover:text-primary transition-colors">EST. 2026</span>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10">
              {links.map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-sm font-bold uppercase tracking-widest hover:text-purple-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-2">
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="p-3 hover:bg-secondary rounded-full transition-colors">
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="hidden sm:block p-3 hover:bg-secondary rounded-full transition-colors">
                <Heart className="w-5 h-5" />
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="p-3 hover:bg-secondary rounded-full transition-colors relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 bottom-0 w-[80%] max-w-sm bg-background border-r border-border p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-black tracking-tighter">STREEX</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-secondary rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="text-3xl font-black uppercase tracking-tight hover:text-purple-600 transition-colors"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
