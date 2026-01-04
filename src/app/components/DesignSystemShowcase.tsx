import React from 'react';
import { ArrowRight, Heart, ShoppingBag, Sparkles } from 'lucide-react';

export function DesignSystemShowcase() {
  return (
    <div className="min-h-screen bg-background p-6 lg:p-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <h1 className="mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900 }}>
            DESIGN SYSTEM
          </h1>
          <p className="text-muted-foreground max-w-2xl" style={{ fontSize: '1.125rem' }}>
            A comprehensive design system for YouthWear Local Co. featuring bold typography, vibrant gradients, and modern UI components.
          </p>
        </div>

        {/* Colors */}
        <section className="mb-20">
          <h2 className="mb-8" style={{ fontSize: '2rem', fontWeight: 900 }}>COLOR PALETTE</h2>
          
          <div className="mb-8">
            <h3 className="mb-4 uppercase tracking-wider text-muted-foreground">Brand Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#a78bfa' }} />
                <div>
                  <div>Purple</div>
                  <div className="text-muted-foreground">#a78bfa</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#f9a8d4' }} />
                <div>
                  <div>Pink</div>
                  <div className="text-muted-foreground">#f9a8d4</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#fb923c' }} />
                <div>
                  <div>Orange</div>
                  <div className="text-muted-foreground">#fb923c</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#60a5fa' }} />
                <div>
                  <div>Blue</div>
                  <div className="text-muted-foreground">#60a5fa</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#86a889' }} />
                <div>
                  <div>Sage</div>
                  <div className="text-muted-foreground">#86a889</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#6b7054' }} />
                <div>
                  <div>Olive</div>
                  <div className="text-muted-foreground">#6b7054</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-24 rounded-2xl" style={{ background: '#d4c5b0' }} />
                <div>
                  <div>Beige</div>
                  <div className="text-muted-foreground">#d4c5b0</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 uppercase tracking-wider text-muted-foreground">Gradients</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <div className="w-full h-32 rounded-2xl" style={{ background: 'linear-gradient(135deg, #c084fc 0%, #f9a8d4 100%)' }} />
                <div>Purple → Pink</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-32 rounded-2xl" style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)' }} />
                <div>Blue → Purple</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-32 rounded-2xl" style={{ background: 'linear-gradient(135deg, #fb923c 0%, #f9a8d4 100%)' }} />
                <div>Orange → Pink</div>
              </div>
              <div className="space-y-2">
                <div className="w-full h-32 rounded-2xl" style={{ background: 'linear-gradient(135deg, #86a889 0%, #6b7054 100%)' }} />
                <div>Sage → Olive</div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-20">
          <h2 className="mb-8" style={{ fontSize: '2rem', fontWeight: 900 }}>TYPOGRAPHY</h2>
          
          <div className="space-y-6 bg-card p-8 rounded-2xl">
            <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
              HERO DISPLAY
            </div>
            <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900 }}>
              SECTION HEADING
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 900 }}>
              Card Title
            </div>
            <h2>Heading 2 - Default Style</h2>
            <h3>Heading 3 - Default Style</h3>
            <h4>Heading 4 - Default Style</h4>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
              Body Large - Perfect for descriptions and introductory text
            </p>
            <p>Body Regular - The standard text size for most content</p>
            <div className="uppercase tracking-wider text-muted-foreground">
              LABEL UPPERCASE - For categories and small headings
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-20">
          <h2 className="mb-8" style={{ fontSize: '2rem', fontWeight: 900 }}>BUTTONS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="uppercase tracking-wider text-muted-foreground mb-4">Primary Buttons</h3>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 w-full justify-center">
                <span className="uppercase tracking-wide">Primary Button</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-primary px-8 py-4 rounded-full hover:bg-white/90 transition-all shadow-lg w-full">
                <span className="uppercase tracking-wide">White Button</span>
              </button>
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all flex items-center gap-2 w-full justify-center group">
                <Sparkles className="w-5 h-5" />
                <span className="uppercase tracking-wide">With Icon</span>
              </button>
            </div>

            <div className="space-y-4">
              <h3 className="uppercase tracking-wider text-muted-foreground mb-4">Secondary Buttons</h3>
              <button className="bg-white/10 backdrop-blur-sm text-foreground px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-border w-full">
                <span className="uppercase tracking-wide">Ghost Button</span>
              </button>
              <button className="bg-transparent text-foreground px-8 py-4 rounded-full hover:bg-secondary transition-all border-2 border-primary w-full">
                <span className="uppercase tracking-wide">Outline Button</span>
              </button>
              <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-full hover:bg-secondary/80 transition-all w-full">
                <span className="uppercase tracking-wide">Secondary Button</span>
              </button>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-20">
          <h2 className="mb-8" style={{ fontSize: '2rem', fontWeight: 900 }}>CARDS & COMPONENTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Simple Card */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h4 className="mb-2">Simple Card</h4>
              <p className="text-muted-foreground">Clean and minimal card design with subtle border</p>
            </div>

            {/* Gradient Card */}
            <div className="rounded-2xl p-6 text-white" style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #f9a8d4 100%)' }}>
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h4 className="mb-2">Gradient Card</h4>
              <p className="text-white/90">Vibrant gradient backgrounds for featured content</p>
            </div>

            {/* Elevated Card */}
            <div className="bg-card rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="mb-2">Elevated Card</h4>
              <p className="text-muted-foreground">Strong shadow for emphasis and depth</p>
            </div>
          </div>
        </section>

        {/* Badges & Tags */}
        <section className="mb-20">
          <h2 className="mb-8" style={{ fontSize: '2rem', fontWeight: 900 }}>BADGES & TAGS</h2>
          
          <div className="flex flex-wrap gap-3">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full uppercase tracking-wider">
              NEW
            </div>
            <div className="bg-white text-primary px-4 py-2 rounded-full uppercase tracking-wider shadow-md">
              HOT
            </div>
            <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full uppercase tracking-wider">
              TRENDING
            </div>
            <div className="px-4 py-2 rounded-full uppercase tracking-wider" style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #f9a8d4 100%)', color: 'white' }}>
              LIMITED
            </div>
            <div className="bg-white/10 backdrop-blur-sm text-foreground px-4 py-2 rounded-full uppercase tracking-wider border border-border">
              SALE
            </div>
            <div className="text-primary uppercase tracking-wider flex items-center gap-1">
              <span>#</span>STREETSTYLE
            </div>
            <div className="text-primary uppercase tracking-wider flex items-center gap-1">
              <span>#</span>YOUTHWEAR
            </div>
          </div>
        </section>

        {/* Icon Buttons */}
        <section className="mb-20">
          <h2 className="mb-8" style={{ fontSize: '2rem', fontWeight: 900 }}>ICON BUTTONS</h2>
          
          <div className="flex flex-wrap gap-4">
            <button className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform">
              <Heart className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-white shadow-md text-primary flex items-center justify-center hover:scale-110 transition-transform">
              <ShoppingBag className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-white/20 transition-all">
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform">
              <Sparkles className="w-6 h-6" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-primary flex items-center justify-center hover:bg-white/30 transition-all">
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* Rounded Corners */}
        <section className="mb-20">
          <h2 className="mb-8" style={{ fontSize: '2rem', fontWeight: 900 }}>BORDER RADIUS</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="bg-secondary h-24 rounded-lg mb-2" />
              <div className="text-muted-foreground">rounded-lg (0.5rem)</div>
            </div>
            <div>
              <div className="bg-secondary h-24 rounded-xl mb-2" />
              <div className="text-muted-foreground">rounded-xl (0.75rem)</div>
            </div>
            <div>
              <div className="bg-secondary h-24 rounded-2xl mb-2" />
              <div className="text-muted-foreground">rounded-2xl (1rem)</div>
            </div>
            <div>
              <div className="bg-secondary h-24 rounded-[2rem] mb-2" />
              <div className="text-muted-foreground">rounded-[2rem]</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
