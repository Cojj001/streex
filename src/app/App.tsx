import React from 'react';
import { ArrowRight, Heart, ShoppingBag, Sparkles, Star, TrendingUp, Zap, Search, User, Settings, ChevronRight, Plus, X } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-lg z-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.02em' }}>YOUTHWEAR</h1>
              <p className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '0.625rem' }}>Design System v1.0</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground uppercase tracking-wide">2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12">
        {/* Introduction */}
        <section className="mb-24">
          <div className="max-w-3xl">
            <h2 className="mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, lineHeight: '1.1', letterSpacing: '-0.02em' }}>
              DESIGN SYSTEM FOR THE BOLD
            </h2>
            <p className="text-muted-foreground mb-6" style={{ fontSize: '1.25rem', lineHeight: '1.7' }}>
              A modern, vibrant design system crafted for youth-focused brands. 
              Featuring bold typography, energetic gradients, and contemporary UI components 
              that speak to the next generation.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full border border-border text-muted-foreground uppercase tracking-wider">
                Youth-Focused
              </div>
              <div className="px-4 py-2 rounded-full border border-border text-muted-foreground uppercase tracking-wider">
                Modern
              </div>
              <div className="px-4 py-2 rounded-full border border-border text-muted-foreground uppercase tracking-wider">
                Vibrant
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-24">
          <h2 className="mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>01. COLOR PALETTE</h2>
          
          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="mb-6 uppercase tracking-wider text-muted-foreground">Base Colors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <div className="w-full h-32 rounded-[2rem] bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground" style={{ fontWeight: 700 }}>PRIMARY</span>
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Primary</div>
                  <div className="text-muted-foreground">#0a0a0a</div>
                  <div className="text-muted-foreground text-sm">Headings, CTAs</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="w-full h-32 rounded-[2rem] bg-secondary flex items-center justify-center border border-border">
                  <span className="text-secondary-foreground" style={{ fontWeight: 700 }}>SECONDARY</span>
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Secondary</div>
                  <div className="text-muted-foreground">#f4f4f5</div>
                  <div className="text-muted-foreground text-sm">Backgrounds</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="w-full h-32 rounded-[2rem] bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground" style={{ fontWeight: 700 }}>MUTED</span>
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Muted</div>
                  <div className="text-muted-foreground">#ececf0</div>
                  <div className="text-muted-foreground text-sm">Subtle elements</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="w-full h-32 rounded-[2rem] bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground" style={{ fontWeight: 700 }}>ACCENT</span>
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>Accent</div>
                  <div className="text-muted-foreground">#e9ebef</div>
                  <div className="text-muted-foreground text-sm">Highlights</div>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Colors */}
          <div className="mb-12">
            <h3 className="mb-6 uppercase tracking-wider text-muted-foreground">Brand Colors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#a78bfa' }} />
                <div className="text-sm" style={{ fontWeight: 600 }}>Purple</div>
                <div className="text-muted-foreground text-xs">#a78bfa</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#f9a8d4' }} />
                <div className="text-sm" style={{ fontWeight: 600 }}>Pink</div>
                <div className="text-muted-foreground text-xs">#f9a8d4</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#fb923c' }} />
                <div className="text-sm" style={{ fontWeight: 600 }}>Orange</div>
                <div className="text-muted-foreground text-xs">#fb923c</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#60a5fa' }} />
                <div className="text-sm" style={{ fontWeight: 600 }}>Blue</div>
                <div className="text-muted-foreground text-xs">#60a5fa</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#86a889' }} />
                <div className="text-sm" style={{ fontWeight: 600 }}>Sage</div>
                <div className="text-muted-foreground text-xs">#86a889</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#6b7054' }} />
                <div className="text-sm" style={{ fontWeight: 600 }}>Olive</div>
                <div className="text-muted-foreground text-xs">#6b7054</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#d4c5b0' }} />
                <div className="text-sm" style={{ fontWeight: 600 }}>Beige</div>
                <div className="text-muted-foreground text-xs">#d4c5b0</div>
              </div>
            </div>
          </div>

          {/* Gradients */}
          <div>
            <h3 className="mb-6 uppercase tracking-wider text-muted-foreground">Gradients</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-3">
                <div className="w-full h-40 rounded-[2rem]" style={{ background: 'linear-gradient(135deg, #c084fc 0%, #f9a8d4 100%)' }} />
                <div style={{ fontWeight: 600 }}>Purple → Pink</div>
                <div className="text-muted-foreground text-sm">Primary gradient for CTAs</div>
              </div>
              <div className="space-y-3">
                <div className="w-full h-40 rounded-[2rem]" style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)' }} />
                <div style={{ fontWeight: 600 }}>Blue → Purple</div>
                <div className="text-muted-foreground text-sm">Cool, modern feel</div>
              </div>
              <div className="space-y-3">
                <div className="w-full h-40 rounded-[2rem]" style={{ background: 'linear-gradient(135deg, #fb923c 0%, #f9a8d4 100%)' }} />
                <div style={{ fontWeight: 600 }}>Orange → Pink</div>
                <div className="text-muted-foreground text-sm">Warm, energetic</div>
              </div>
              <div className="space-y-3">
                <div className="w-full h-40 rounded-[2rem]" style={{ background: 'linear-gradient(135deg, #86a889 0%, #6b7054 100%)' }} />
                <div style={{ fontWeight: 600 }}>Sage → Olive</div>
                <div className="text-muted-foreground text-sm">Natural, grounded</div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-24">
          <h2 className="mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>02. TYPOGRAPHY</h2>
          
          <div className="space-y-8 bg-card p-8 lg:p-12 rounded-[2rem] border border-border">
            <div className="border-b border-border pb-8">
              <div style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: '1.1' }}>
                HERO DISPLAY
              </div>
              <p className="text-muted-foreground mt-2">56-80px / 900 weight / -2% letter spacing</p>
            </div>
            
            <div className="border-b border-border pb-8">
              <div style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '-0.01em', lineHeight: '1.2' }}>
                SECTION HEADING
              </div>
              <p className="text-muted-foreground mt-2">32-56px / 900 weight / -1% letter spacing</p>
            </div>
            
            <div className="border-b border-border pb-8">
              <div style={{ fontSize: '2rem', fontWeight: 900 }}>
                Card Title
              </div>
              <p className="text-muted-foreground mt-2">32px / 900 weight</p>
            </div>
            
            <div className="border-b border-border pb-8">
              <h2>H2 - Default Heading</h2>
              <p className="text-muted-foreground mt-2">24px / 500 weight</p>
            </div>
            
            <div className="border-b border-border pb-8">
              <h3>H3 - Subheading</h3>
              <p className="text-muted-foreground mt-2">20px / 500 weight</p>
            </div>
            
            <div className="border-b border-border pb-8">
              <p style={{ fontSize: '1.25rem', lineHeight: '1.7' }}>
                Body Large - Perfect for introductory paragraphs and important descriptions. 
                Provides excellent readability while maintaining visual hierarchy.
              </p>
              <p className="text-muted-foreground mt-2">20px / 400 weight / 1.7 line height</p>
            </div>
            
            <div className="border-b border-border pb-8">
              <p>
                Body Regular - The standard text size for most content. Works well for paragraphs, 
                list items, and general body copy throughout the interface.
              </p>
              <p className="text-muted-foreground mt-2">16px / 400 weight / 1.5 line height</p>
            </div>
            
            <div>
              <div className="uppercase tracking-widest text-muted-foreground" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                LABEL UPPERCASE - CATEGORY TAG
              </div>
              <p className="text-muted-foreground mt-2">12px / 600 weight / widest tracking</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-24">
          <h2 className="mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>03. BUTTONS</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Primary Buttons */}
            <div className="space-y-6">
              <h3 className="uppercase tracking-wider text-muted-foreground">Primary Buttons</h3>
              
              <button className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
                <span className="uppercase tracking-wide">Primary Button</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full bg-white text-primary px-8 py-4 rounded-full hover:bg-white/90 transition-all shadow-lg">
                <span className="uppercase tracking-wide">White Button</span>
              </button>
              
              <button className="w-full px-8 py-4 rounded-full text-white transition-all shadow-lg hover:shadow-xl" 
                      style={{ background: 'linear-gradient(135deg, #c084fc 0%, #f9a8d4 100%)' }}>
                <span className="uppercase tracking-wide">Gradient Button</span>
              </button>
              
              <button className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span className="uppercase tracking-wide">With Icon</span>
              </button>
            </div>

            {/* Secondary Buttons */}
            <div className="space-y-6">
              <h3 className="uppercase tracking-wider text-muted-foreground">Secondary Buttons</h3>
              
              <button className="w-full bg-secondary text-secondary-foreground px-8 py-4 rounded-full hover:bg-secondary/80 transition-all">
                <span className="uppercase tracking-wide">Secondary Button</span>
              </button>
              
              <button className="w-full bg-transparent text-foreground px-8 py-4 rounded-full hover:bg-secondary transition-all border-2 border-primary">
                <span className="uppercase tracking-wide">Outline Button</span>
              </button>
              
              <button className="w-full bg-white/10 backdrop-blur-sm text-foreground px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-border">
                <span className="uppercase tracking-wide">Ghost Button</span>
              </button>
              
              <button className="w-full text-primary px-8 py-4 rounded-full hover:bg-primary/10 transition-all flex items-center justify-center gap-2 group">
                <span className="uppercase tracking-wide">Text Button</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Button Sizes */}
          <div className="mt-12 space-y-6">
            <h3 className="uppercase tracking-wider text-muted-foreground">Button Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-all">
                <span className="uppercase tracking-wide text-sm">Small</span>
              </button>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-all">
                <span className="uppercase tracking-wide">Medium</span>
              </button>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all">
                <span className="uppercase tracking-wide">Large</span>
              </button>
              <button className="bg-primary text-primary-foreground px-10 py-5 rounded-full hover:bg-primary/90 transition-all" style={{ fontSize: '1.125rem' }}>
                <span className="uppercase tracking-wide">Extra Large</span>
              </button>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-24">
          <h2 className="mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>04. CARDS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Card */}
            <div className="bg-card rounded-[2rem] p-8 border border-border hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mb-3">Basic Card</h3>
              <p className="text-muted-foreground">Clean card with border and subtle hover effect</p>
            </div>

            {/* Elevated Card */}
            <div className="bg-card rounded-[2rem] p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="mb-3">Elevated Card</h3>
              <p className="text-muted-foreground">Card with shadow for emphasis and depth</p>
            </div>

            {/* Gradient Card */}
            <div className="rounded-[2rem] p-8 text-white" style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)' }}>
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <h3 className="mb-3">Gradient Card</h3>
              <p className="text-white/90">Vibrant gradient for featured content</p>
            </div>

            {/* Image Card */}
            <div className="bg-secondary rounded-[2rem] overflow-hidden hover:shadow-lg transition-all group">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <Star className="w-12 h-12 text-white" />
              </div>
              <div className="p-6">
                <h4 className="mb-2">Image Card</h4>
                <p className="text-muted-foreground">Card with image header</p>
              </div>
            </div>

            {/* Interactive Card */}
            <div className="bg-card rounded-[2rem] p-8 border-2 border-transparent hover:border-primary transition-all cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mb-3">Interactive Card</h3>
              <p className="text-muted-foreground">Hover to see border highlight</p>
            </div>

            {/* Minimal Card */}
            <div className="bg-secondary/50 rounded-[2rem] p-8 hover:bg-secondary transition-all">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="mb-3">Minimal Card</h3>
              <p className="text-muted-foreground">Subtle background with no border</p>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-24">
          <h2 className="mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>05. FORM ELEMENTS</h2>
          
          <div className="max-w-2xl space-y-6">
            <div>
              <label className="block mb-2 uppercase tracking-wider text-muted-foreground" style={{ fontSize: '0.75rem' }}>
                Text Input
              </label>
              <input 
                type="text" 
                placeholder="Enter your text"
                className="w-full px-6 py-4 rounded-full bg-input-background border-2 border-transparent focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block mb-2 uppercase tracking-wider text-muted-foreground" style={{ fontSize: '0.75rem' }}>
                Email Input
              </label>
              <input 
                type="email" 
                placeholder="your@email.com"
                className="w-full px-6 py-4 rounded-full bg-input-background border-2 border-transparent focus:border-primary focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block mb-2 uppercase tracking-wider text-muted-foreground" style={{ fontSize: '0.75rem' }}>
                Search Input
              </label>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="search" 
                  placeholder="Search..."
                  className="w-full pl-14 pr-6 py-4 rounded-full bg-input-background border-2 border-transparent focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 uppercase tracking-wider text-muted-foreground" style={{ fontSize: '0.75rem' }}>
                Textarea
              </label>
              <textarea 
                placeholder="Enter your message"
                rows={4}
                className="w-full px-6 py-4 rounded-3xl bg-input-background border-2 border-transparent focus:border-primary focus:outline-none transition-colors resize-none"
              />
            </div>
          </div>
        </section>

        {/* Badges & Tags */}
        <section className="mb-24">
          <h2 className="mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>06. BADGES & TAGS</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 uppercase tracking-wider text-muted-foreground">Status Badges</h3>
              <div className="flex flex-wrap gap-3">
                <div className="bg-primary text-primary-foreground px-5 py-2 rounded-full uppercase tracking-wider" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  NEW
                </div>
                <div className="bg-white text-primary px-5 py-2 rounded-full uppercase tracking-wider shadow-md" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  HOT
                </div>
                <div className="px-5 py-2 rounded-full uppercase tracking-wider text-white" style={{ fontSize: '0.875rem', fontWeight: 600, background: '#fb923c' }}>
                  SALE
                </div>
                <div className="bg-secondary text-secondary-foreground px-5 py-2 rounded-full uppercase tracking-wider" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  TRENDING
                </div>
                <div className="px-5 py-2 rounded-full uppercase tracking-wider text-white" style={{ fontSize: '0.875rem', fontWeight: 600, background: 'linear-gradient(135deg, #a78bfa 0%, #f9a8d4 100%)' }}>
                  LIMITED
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 uppercase tracking-wider text-muted-foreground">Hashtags</h3>
              <div className="flex flex-wrap gap-3">
                <div className="text-primary uppercase tracking-wider flex items-center gap-1" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  <span>#</span>STREETSTYLE
                </div>
                <div className="text-primary uppercase tracking-wider flex items-center gap-1" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  <span>#</span>YOUTHWEAR
                </div>
                <div className="text-primary uppercase tracking-wider flex items-center gap-1" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  <span>#</span>VIBEZ
                </div>
                <div className="text-primary uppercase tracking-wider flex items-center gap-1" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  <span>#</span>HYPEFIT
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 uppercase tracking-wider text-muted-foreground">Outline Tags</h3>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-full border border-border text-muted-foreground uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>
                  Fashion
                </div>
                <div className="px-4 py-2 rounded-full border border-border text-muted-foreground uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>
                  Streetwear
                </div>
                <div className="px-4 py-2 rounded-full border border-border text-muted-foreground uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>
                  Urban
                </div>
                <div className="px-4 py-2 rounded-full border border-border text-muted-foreground uppercase tracking-wider" style={{ fontSize: '0.75rem' }}>
                  Modern
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 uppercase tracking-wider text-muted-foreground">Info Badges</h3>
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="uppercase tracking-wider" style={{ fontSize: '0.875rem' }}>Live Now</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-5 py-3 rounded-full">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-primary uppercase tracking-wider" style={{ fontSize: '0.875rem' }}>Featured</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Icon Buttons */}
        <section className="mb-24">
          <h2 className="mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>07. ICON BUTTONS</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 uppercase tracking-wider text-muted-foreground">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform">
                  <Heart className="w-7 h-7" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="mb-4 uppercase tracking-wider text-muted-foreground">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <button className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <ShoppingBag className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full bg-white shadow-md text-primary flex items-center justify-center hover:shadow-lg transition-shadow">
                  <User className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-secondary/80 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
                <button className="w-12 h-12 rounded-full text-primary flex items-center justify-center hover:bg-primary/10 transition-colors" style={{ background: 'linear-gradient(135deg, #c084fc 0%, #f9a8d4 100%)' }}>
                  <Plus className="w-5 h-5 text-white" />
                </button>
                <button className="w-12 h-12 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center hover:bg-destructive/90 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Border Radius */}
        <section className="mb-24">
          <h2 className="mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>08. BORDER RADIUS</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="space-y-3">
              <div className="bg-secondary h-24 rounded-lg" />
              <div style={{ fontWeight: 600 }}>rounded-lg</div>
              <div className="text-muted-foreground text-sm">0.5rem / 8px</div>
            </div>
            <div className="space-y-3">
              <div className="bg-secondary h-24 rounded-xl" />
              <div style={{ fontWeight: 600 }}>rounded-xl</div>
              <div className="text-muted-foreground text-sm">0.75rem / 12px</div>
            </div>
            <div className="space-y-3">
              <div className="bg-secondary h-24 rounded-2xl" />
              <div style={{ fontWeight: 600 }}>rounded-2xl</div>
              <div className="text-muted-foreground text-sm">1rem / 16px</div>
            </div>
            <div className="space-y-3">
              <div className="bg-secondary h-24 rounded-[2rem]" />
              <div style={{ fontWeight: 600 }}>rounded-[2rem]</div>
              <div className="text-muted-foreground text-sm">2rem / 32px</div>
            </div>
            <div className="space-y-3">
              <div className="bg-secondary h-24 rounded-full" />
              <div style={{ fontWeight: 600 }}>rounded-full</div>
              <div className="text-muted-foreground text-sm">9999px</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-muted/50 rounded-2xl">
            <p className="text-muted-foreground">
              <strong>Default radius:</strong> 2rem (32px) - Used for cards and major containers<br />
              <strong>Buttons & inputs:</strong> rounded-full - Maximum roundness for modern look
            </p>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-24">
          <h2 className="mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>09. SPACING SCALE</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-24 text-muted-foreground">4px</div>
              <div className="h-8 bg-primary" style={{ width: '4px' }} />
              <div className="text-muted-foreground">Minimal spacing</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-muted-foreground">8px</div>
              <div className="h-8 bg-primary" style={{ width: '8px' }} />
              <div className="text-muted-foreground">Tight spacing</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-muted-foreground">12px</div>
              <div className="h-8 bg-primary" style={{ width: '12px' }} />
              <div className="text-muted-foreground">Small spacing</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-muted-foreground">16px</div>
              <div className="h-8 bg-primary" style={{ width: '16px' }} />
              <div className="text-muted-foreground">Base spacing</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-muted-foreground">24px</div>
              <div className="h-8 bg-primary" style={{ width: '24px' }} />
              <div className="text-muted-foreground">Medium spacing</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-muted-foreground">32px</div>
              <div className="h-8 bg-primary" style={{ width: '32px' }} />
              <div className="text-muted-foreground">Large spacing</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-muted-foreground">48px</div>
              <div className="h-8 bg-primary" style={{ width: '48px' }} />
              <div className="text-muted-foreground">XL spacing</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-muted-foreground">64px</div>
              <div className="h-8 bg-primary" style={{ width: '64px' }} />
              <div className="text-muted-foreground">Section spacing</div>
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="mb-24">
          <h2 className="mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>10. DESIGN PRINCIPLES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card rounded-[2rem] p-8 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span style={{ fontSize: '1.5rem' }}>💪</span>
              </div>
              <h3 className="mb-3">Bold & Confident</h3>
              <p className="text-muted-foreground">
                Use large, heavy typography and high contrast to make statements. 
                Don't be afraid of big, bold elements that demand attention.
              </p>
            </div>

            <div className="bg-card rounded-[2rem] p-8 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span style={{ fontSize: '1.5rem' }}>🌈</span>
              </div>
              <h3 className="mb-3">Vibrant & Energetic</h3>
              <p className="text-muted-foreground">
                Embrace gradients and bright brand colors to convey energy and youth. 
                Mix earth tones with vibrant accents for balance.
              </p>
            </div>

            <div className="bg-card rounded-[2rem] p-8 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span style={{ fontSize: '1.5rem' }}>⚡</span>
              </div>
              <h3 className="mb-3">Modern & Clean</h3>
              <p className="text-muted-foreground">
                Large border radius (2rem default) and generous spacing create a contemporary feel. 
                Keep layouts clean and breathable.
              </p>
            </div>

            <div className="bg-card rounded-[2rem] p-8 border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span style={{ fontSize: '1.5rem' }}>📱</span>
              </div>
              <h3 className="mb-3">Social-First</h3>
              <p className="text-muted-foreground">
                Incorporate hashtags, social media aesthetics, and shareable moments. 
                Design with Instagram and TikTok in mind.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-12 text-center text-muted-foreground">
          <p>© 2026 YouthWear Design System · Built for the next generation</p>
        </footer>
      </div>
    </div>
  );
}
