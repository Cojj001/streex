import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Instagram, Twitter, Facebook, Sparkles, Zap, TrendingUp, Music, ArrowUpRight, Heart, ShoppingBag } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence, Variants } from 'motion/react';
import { Navigation } from './components/Navigation';

const COMPONENT_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
    }
};

const STAGGER_VARIANTS: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const CHILD_VARIANTS: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const HERO_IMAGES = [
    "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550246140-29f40b909e5a?q=80&w=2900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=2900&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=2900&auto=format&fit=crop"
];

const FEATURED_PRODUCTS = [
    {
        id: 1,
        name: "Oversized Graphic Tee",
        price: 45,
        category: "Tops",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2835&auto=format&fit=crop",
        badge: "Hot"
    },
    {
        id: 2,
        name: "Utility Cargo Pants",
        price: 89,
        category: "Bottoms",
        image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2187&auto=format&fit=crop",
        gradientOverlay: true
    },
    {
        id: 3,
        name: "Urban Tech Hoodie",
        price: 120,
        category: "Outerwear",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2835&auto=format&fit=crop",
        badge: "New"
    },
    {
        id: 4,
        name: "Retro High Sneakers",
        price: 150,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2835&auto=format&fit=crop"
    }
];

const CATEGORIES = [
    {
        title: "Street Culture",
        hashtag: "#URBAN",
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=2900&auto=format&fit=crop",
        gradient: "bg-gradient-to-t from-purple-900/80 via-transparent to-transparent"
    },
    {
        title: "Skate Rats",
        hashtag: "#SKATE",
        image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?q=80&w=2936&auto=format&fit=crop",
        gradient: "bg-gradient-to-t from-orange-900/80 via-transparent to-transparent"
    },
    {
        title: "Night Life",
        hashtag: "#AFTERHOURS",
        image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=2940&auto=format&fit=crop",
        gradient: "bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"
    }
];

function NoiseOverlay() {
    return (
        <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay">
            <svg width="100%" height="100%">
                <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.80" numOctaves="4" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
            </svg>
        </div>
    );
}

function ProductCard({ image, name, price, category, badge, gradientOverlay }: any) {
    return (
        <motion.div variants={CHILD_VARIANTS} className="group relative cursor-pointer">
            <div className="relative overflow-hidden rounded-[2rem] bg-secondary mb-4 aspect-[3/4]">
                <motion.img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                {gradientOverlay && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                )}
                {badge && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full uppercase tracking-wider text-xs font-bold">
                        {badge}
                    </div>
                )}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                    <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                        <Heart className="w-5 h-5 text-primary" />
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                        <ShoppingBag className="w-5 h-5 text-primary" />
                    </motion.button>
                </div>
            </div>
            <div className="px-2">
                <div className="text-muted-foreground uppercase tracking-widest text-xs font-bold mb-1">{category}</div>
                <h4 className="text-lg font-bold mb-1 group-hover:text-purple-600 transition-colors">{name}</h4>
                <div className="text-primary font-medium">${price}</div>
            </div>
        </motion.div>
    );
}

function CategoryCard({ image, hashtag, title, gradient }: any) {
    return (
        <motion.div
            variants={CHILD_VARIANTS}
            className="group relative overflow-hidden rounded-[2rem] h-[400px] cursor-pointer"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
        >
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className={`absolute inset-0 ${gradient || 'bg-black/20'} group-hover:bg-black/40 transition-all duration-300`} />
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-white/80 mb-2 uppercase tracking-widest text-xs font-bold">{hashtag}</div>
                <div className="flex items-end justify-between">
                    <h3 className="text-white text-3xl font-black italic uppercase">{title}</h3>
                    <motion.div
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                    >
                        <ArrowUpRight className="w-6 h-6 text-white" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export function StreexLanding() {
    const containerRef = useRef(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(timer);
    }, []);

    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

    return (
        <div ref={containerRef} className="min-h-screen bg-background font-sans selection:bg-purple-500 selection:text-white overflow-hidden">
            <NoiseOverlay />
            <Navigation />

            <main>
                {/* Hero Section */}
                <section className="relative px-4 pt-22 pb-12 lg:min-h-screen">
                    <motion.div
                        style={{ y: heroY, opacity: heroOpacity }}
                        className="relative w-full h-[70vh] rounded-[3rem] overflow-hidden bg-gray-900"
                    >
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentImageIndex}
                                src={HERO_IMAGES[currentImageIndex]}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full object-cover"
                                alt="Hero"
                            />
                        </AnimatePresence>

                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent z-10" />


                        <div className="absolute bottom-0 left-0 p-8 lg:p-16 max-w-4xl z-20">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={STAGGER_VARIANTS}
                            >
                                <motion.div variants={CHILD_VARIANTS} className="inline-flex items-center gap-3 mb-6 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-white uppercase tracking-wider text-xs font-bold">New Collection 2026</span>
                                </motion.div>

                                <motion.h1
                                    variants={CHILD_VARIANTS}
                                    className="text-white text-6xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8"
                                >
                                    NO<br />LIMITS.
                                </motion.h1>

                                <motion.div variants={CHILD_VARIANTS} className="flex flex-wrap gap-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-white text-black px-8 py-5 rounded-full font-bold uppercase tracking-wide hover:bg-gray-100 transition-colors flex items-center gap-2 group"
                                    >
                                        <span>Shop The Drop</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </motion.button>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Subheading */}
                        <div className="absolute bottom-0 right-0 p-8 lg:p-16 max-w-md z-20 hidden lg:block text-right">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={STAGGER_VARIANTS}
                            >
                                <motion.p
                                    variants={CHILD_VARIANTS}
                                    className="text-gray-200 text-lg font-medium leading-relaxed mb-6"
                                >
                                    Redefining the boundaries of modern streetwear. <br />
                                    Bold cuts, premium fabrics, and an attitude that refuses to compromise.
                                    <span className="text-white font-bold block mt-2">Welcome to the future of fashion.</span>
                                </motion.p>
                                <motion.div variants={CHILD_VARIANTS} className="flex justify-end gap-2">
                                    {[0, 1, 2, 3].map((i) => (
                                        <div key={i} className={`w-12 h-1 rounded-full ${i === currentImageIndex ? 'bg-white' : 'bg-white/20'}`} />
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* Marquee */}
                <div className="w-full bg-black py-6 overflow-hidden border-y border-white/10 rotate-[-1deg] translate-y-[-2rem] z-20 relative mix-blend-hard-light">
                    <div className="flex animate-infinite-scroll hover:animation-play-state-paused min-w-full">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="flex items-center gap-12 text-white font-black text-4xl uppercase tracking-tighter whitespace-nowrap px-6">
                                <span>Streex Worldwide</span>
                                <Sparkles className="w-8 h-8 text-purple-500" />
                                <span className="text-transparent stroke-text">New Season</span>
                                <Zap className="w-8 h-8 text-yellow-400" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Products */}
                <section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={COMPONENT_VARIANTS}
                        className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                    >
                        <div>
                            <div className="flex items-center gap-2 text-purple-600 font-bold tracking-widest uppercase mb-4 text-sm">
                                <TrendingUp className="w-4 h-4" />
                                <span>Selected for you</span>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                                FRESH<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">DROPS</span>
                            </h2>
                        </div>
                        <motion.button
                            whileHover={{ x: 10 }}
                            className="group flex items-center gap-2 border-b-2 border-black pb-1 hover:text-purple-600 hover:border-purple-600 transition-all"
                        >
                            <span className="uppercase font-bold tracking-wide">View All</span>
                            <ArrowRight className="w-4 h-4" />
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={STAGGER_VARIANTS}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
                    >
                        {FEATURED_PRODUCTS.map((product) => (
                            <ProductCard
                                key={product.id}
                                {...product}
                            />
                        ))}
                    </motion.div>
                </section>

                {/* Categories */}
                <section className="py-24 px-4 bg-muted/30">
                    <div className="max-w-[1600px] mx-auto">
                        <motion.h2
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={COMPONENT_VARIANTS}
                            className="mb-16 text-center text-5xl md:text-8xl font-black tracking-tighter uppercase"
                        >
                            Shop by <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Vibe</span>
                        </motion.h2>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={STAGGER_VARIANTS}
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        >
                            {CATEGORIES.map((cat, idx) => (
                                <CategoryCard key={idx} {...cat} />
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Newsletter */}
                <section className="py-32 bg-black text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={COMPONENT_VARIANTS}
                        className="max-w-4xl mx-auto px-6 text-center relative z-10"
                    >
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        >
                            <Music className="w-16 h-16 mx-auto mb-8 text-purple-500" />
                        </motion.div>
                        <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">JOIN THE <span className="italic text-purple-500">CULT</span>URE</h2>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
                            Be the first to know about exclusive drops, secret sales, and community events.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="flex-1 bg-white/10 border border-white/20 px-8 py-5 rounded-full text-white placeholder:text-gray-500 font-bold tracking-wide focus:outline-none focus:border-purple-500 transition-colors"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-black px-10 py-5 rounded-full font-black uppercase tracking-wide hover:bg-purple-500 hover:text-white transition-all shadow-xl"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                        <div className="space-y-8">
                            <h3 className="text-4xl font-black tracking-tighter">STREEX</h3>
                            <p className="text-gray-400 max-w-xs font-medium leading-relaxed">
                                Redefining street culture for the digital age. Born in the chaos, raised by the internet.
                            </p>
                            <div className="flex gap-4">
                                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                    <motion.button
                                        key={i}
                                        whileHover={{ scale: 1.1, rotate: 10 }}
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Shop Links */}
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-8 text-sm text-gray-500">Shop</h4>
                            <ul className="space-y-4">
                                {["New Arrivals", "Best Sellers", "Accessories", "Sale"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-8 text-sm text-gray-500">Support</h4>
                            <ul className="space-y-4">
                                {["FAQ", "Shipping & Returns", "Size Guide", "Contact Us"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Legal Links */}
                        <div>
                            <h4 className="font-bold uppercase tracking-widest mb-8 text-sm text-gray-500">Legal</h4>
                            <ul className="space-y-4">
                                {["Terms of Service", "Privacy Policy", "Cookie Policy"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors font-medium">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium">
                        <p>&copy; 2026 STREEX. All rights reserved.</p>
                        <p>Designed with ❤️ for the streets.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
