'use client'

import React, { useState, FormEvent } from 'react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out bg-white/95 backdrop-blur-md shadow-sm" id="navbar">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between transition-all duration-500 ease-in-out h-20" id="nav-content">
      {/* Logo */}
      <div className="flex items-center space-x-3 group">
        <div className="relative w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
          <div className="absolute inset-1 bg-white rounded-md flex items-center justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-500 font-bold text-lg">I</span>
          </div>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent transition-all duration-300">
          Imaginry Space
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <a href="#home" className="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-purple-600 group">
          <span className="relative z-10">Home</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
        </a>
        <a href="#services" className="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-purple-600 group">
          <span className="relative z-10">Services</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
        </a>
        <a href="#about" className="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-purple-600 group">
          <span className="relative z-10">About</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
        </a>
        <a href="#pricing" className="relative px-4 py-2 text-gray-700 font-medium transition-all duration-300 hover:text-purple-600 group">
          <span className="relative z-10">Pricing</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>
        </a>
        <a href="#contact" className="ml-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 hover:scale-105">
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1.5 group" id="mobile-menu-button">
        <span className="w-6 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-300 group-hover:w-7"></span>
        <span className="w-6 h-0.5 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full transition-all duration-300"></span>
        <span className="w-6 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-300 group-hover:w-7"></span>
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div className="md:hidden hidden bg-white/98 backdrop-blur-lg border-t border-gray-100 shadow-2xl" id="mobile-menu">
    <div className="px-4 py-6 space-y-3">
      <a href="#home" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-300 transform hover:translate-x-2">
        Home
      </a>
      <a href="#services" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-300 transform hover:translate-x-2">
        Services
      </a>
      <a href="#about" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-300 transform hover:translate-x-2">
        About
      </a>
      <a href="#pricing" className="block px-4 py-3 text-gray-700 font-medium rounded-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-600 transition-all duration-300 transform hover:translate-x-2">
        Pricing
      </a>
      <a href="#contact" className="block px-4 py-3 mt-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-semibold rounded-lg text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
        Contact
      </a>
    </div>
  </div>

  <script dangerouslySetInnerHTML={{__html: `
    (function() {
      const navbar = document.getElementById('navbar');
      const navContent = document.getElementById('nav-content');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      const mobileMenu = document.getElementById('mobile-menu');
      
      let lastScroll = 0;
      
      window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
          navContent.style.height = '4rem';
          navbar.classList.add('shadow-md');
        } else {
          navContent.style.height = '5rem';
          navbar.classList.remove('shadow-md');
        }
        
        lastScroll = currentScroll;
      });
      
      mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
      });
    })();
  `}} />
</nav>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-800">
  {/* Animated Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-fuchsia-500/20 to-amber-500/20 animate-pulse"></div>
  
  {/* Animated Gradient Orbs */}
  <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
  <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
  <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
  
  {/* Floating Particles */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-[10%] w-2 h-2 bg-white/40 rounded-full animate-float"></div>
    <div className="absolute top-40 right-[15%] w-3 h-3 bg-cyan-300/50 rounded-full animate-float animation-delay-1000"></div>
    <div className="absolute bottom-32 left-[20%] w-2 h-2 bg-pink-300/50 rounded-full animate-float animation-delay-2000"></div>
    <div className="absolute top-1/2 right-[25%] w-1 h-1 bg-white/60 rounded-full animate-float animation-delay-3000"></div>
    <div className="absolute bottom-20 right-[30%] w-2 h-2 bg-purple-300/40 rounded-full animate-float animation-delay-1500"></div>
  </div>
  
  {/* Content Container */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
    {/* Floating Badge */}
    <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-float">
      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full animate-pulse"></span>
      <span className="text-sm font-medium text-white/90 tracking-wide">Where Ideas Find Infinite Space</span>
    </div>
    
    {/* Main Headline - Floating Text Elements */}
    <div className="space-y-4 mb-8">
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight">
        <span className="inline-block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent animate-gradient-x">
          Imaginry
        </span>
        <br />
        <span className="inline-block bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent animate-gradient-x animation-delay-1000">
          Space
        </span>
      </h1>
    </div>
    
    {/* Subheadline */}
    <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed animate-float animation-delay-500">
      Marketing campaigns that transcend the ordinary.
      <br />
      <span className="text-cyan-200 font-medium">We turn bold visions into market-moving realities.</span>
    </p>
    
    {/* Description */}
    <p className="text-base sm:text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed animate-float animation-delay-1000">
      From brand strategy to digital experiences, we craft marketing that doesn't just capture attention—it commands it. Your story deserves infinite possibilities.
    </p>
    
    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-float animation-delay-1500">
      <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
        <span className="relative z-10 flex items-center gap-2">
          Launch Your Campaign
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
      
      <button className="group px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105">
        <span className="flex items-center gap-2">
          Explore Our Work
          <svg className="w-5 h-5 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </button>
    </div>
    
    {/* Floating Stats */}
    <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
      <div className="animate-float animation-delay-2000">
        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">500+</div>
        <div className="text-sm text-white/60 mt-2">Campaigns Launched</div>
      </div>
      <div className="animate-float animation-delay-2500">
        <div className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">98%</div>
        <div className="text-sm text-white/60 mt-2">Client Satisfaction</div>
      </div>
      <div className="animate-float animation-delay-3000">
        <div className="text-4xl font-bold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent">3.2M+</div>
        <div className="text-sm text-white/60 mt-2">Audience Reached</div>
      </div>
    </div>
  </div>
  
  {/* Bottom Gradient Fade */}
  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
  
  <style jsx>{`
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    
    @keyframes gradient-x {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    .animate-blob {
      animation: blob 7s infinite;
    }
    
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
    
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 3s ease infinite;
    }
    
    .animation-delay-1000 {
      animation-delay: 1s;
    }
    
    .animation-delay-1500 {
      animation-delay: 1.5s;
    }
    
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    
    .animation-delay-2500 {
      animation-delay: 2.5s;
    }
    
    .animation-delay-3000 {
      animation-delay: 3s;
    }
    
    .animation-delay-4000 {
      animation-delay: 4s;
    }
  `}</style>
</section>
      
      {/* Services Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-24 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-slate-900 mb-4">
        Creative Excellence at <span className="text-purple-600">Imaginry Space</span>
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        Award-winning creative work powered by data-driven strategies and collaborative innovation
      </p>
    </div>

    {/* Bento Grid */}
    <div className="grid grid-cols-12 grid-rows-12 gap-4 h-[1000px]">
      
      {/* Large Card - Award-Winning Creative */}
      <div className="col-span-12 md:col-span-7 row-span-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 flex flex-col justify-between shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Award-Winning Creative Work</h3>
          <p className="text-purple-100 text-lg leading-relaxed">
            Our diverse team of specialized creative professionals delivers exceptional work across multiple disciplines - from brand identity to digital campaigns that captivate audiences and drive results.
          </p>
        </div>
        <div className="flex gap-3 mt-6 relative z-10">
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">Branding</span>
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">Digital</span>
          <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">Content</span>
        </div>
      </div>

      {/* Tall Card - Collaborative Process */}
      <div className="col-span-12 md:col-span-5 row-span-8 bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 group">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Client-First Collaboration</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">
          At Imaginry Space, your vision drives our creative process. We believe in transparent, collaborative partnerships that transform ideas into impactful marketing solutions.
        </p>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-slate-700">Strategic discovery sessions</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-slate-700">Regular feedback loops</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-slate-700">Dedicated project management</p>
          </div>
        </div>
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100">
          <p className="text-sm text-slate-700 italic">"Imaginry Space transformed our brand vision into reality with seamless collaboration."</p>
          <p className="text-xs text-slate-500 mt-2 font-medium">— Fortune 500 Client</p>
        </div>
      </div>

      {/* Wide Card - Data-Driven Results */}
      <div className="col-span-12 md:col-span-7 row-span-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 group relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-48 translate-y-48 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">Data-Driven Creative Strategies</h3>
          <p className="text-emerald-50 text-lg mb-8 leading-relaxed">
            Proven track record of delivering measurable results. We combine creative excellence with analytics to ensure every campaign drives ROI and achieves your business objectives.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <p className="text-4xl font-bold text-white mb-1">250+</p>
              <p className="text-emerald-100 text-sm">Campaigns Launched</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <p className="text-4xl font-bold text-white mb-1">3.5x</p>
              <p className="text-emerald-100 text-sm">Avg ROI Increase</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
              <p className="text-4xl font-bold text-white mb-1">98%</p>
              <p className="text-emerald-100 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Square Card - End-to-End Services */}
      <div className="col-span-12 md:col-span-5 row-span-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-8 shadow-xl hover:shadow-orange-500/50 transition-all duration-300 group relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/20 rounded-full blur-2xl transform translate-x-24 -translate-y-24"></div>
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white/30 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm group-hover:rotate-12 transition-transform duration-300">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">End-to-End Creative Services</h3>
          <p className="text-amber-50 leading-relaxed">
            From initial concept to final execution, Imaginry Space handles every aspect of your creative needs with seamless integration and expert precision.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom CTA */}
    <div className="mt-12 text-center">
      <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-purple-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Start Your Creative Journey
      </button>
    </div>
  </div>
</section>
      
      {/* Testimonials Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24">
  <div className="container mx-auto px-4 mb-16">
    <div className="text-center max-w-3xl mx-auto">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Trusted by Marketing Leaders
      </h2>
      <p className="text-xl text-gray-600">
        See what industry professionals say about Imaginry Space
      </p>
    </div>
  </div>

  {/* Infinite Scroll Container */}
  <div className="relative">
    {/* First Row - Scrolling Left */}
    <div className="flex mb-8 animate-[scroll-left_40s_linear_infinite] hover:[animation-play-state:paused]">
      <div className="flex gap-6 min-w-max">
        {/* Testimonial 1 */}
        <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Sarah Mitchell"
              className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">Sarah Mitchell</h4>
              <p className="text-purple-600 text-sm">CMO at BrandVision</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            "Imaginry Space transformed our entire marketing strategy. Their innovative approach increased our campaign ROI by 340% in just six months. Absolutely game-changing!"
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="Marcus Chen"
              className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">Marcus Chen</h4>
              <p className="text-blue-600 text-sm">Marketing Director at TechFlow</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            "Working with Imaginry Space has been phenomenal. Their data-driven insights and creative execution helped us reach 2M+ qualified leads. Best investment we've made!"
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              alt="Emily Rodriguez"
              className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">Emily Rodriguez</h4>
              <p className="text-purple-600 text-sm">VP Marketing at GrowthLabs</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            "Imaginry Space doesn't just deliver campaigns—they deliver results. Our brand awareness doubled and customer acquisition costs dropped by 45%. Highly recommend!"
          </p>
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
              alt="Sarah Mitchell"
              className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">Sarah Mitchell</h4>
              <p className="text-purple-600 text-sm">CMO at BrandVision</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            "Imaginry Space transformed our entire marketing strategy. Their innovative approach increased our campaign ROI by 340% in just six months. Absolutely game-changing!"
          </p>
        </div>

        <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="Marcus Chen"
              className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">Marcus Chen</h4>
              <p className="text-blue-600 text-sm">Marketing Director at TechFlow</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            "Working with Imaginry Space has been phenomenal. Their data-driven insights and creative execution helped us reach 2M+ qualified leads. Best investment we've made!"
          </p>
        </div>

        <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
              alt="Emily Rodriguez"
              className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">Emily Rodriguez</h4>
              <p className="text-purple-600 text-sm">VP Marketing at GrowthLabs</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            "Imaginry Space doesn't just deliver campaigns—they deliver results. Our brand awareness doubled and customer acquisition costs dropped by 45%. Highly recommend!"
          </p>
        </div>
      </div>
    </div>

    {/* Second Row - Scrolling Right */}
    <div className="flex animate-[scroll-right_35s_linear_infinite] hover:[animation-play-state:paused]">
      <div className="flex gap-6 min-w-max">
        {/* Testimonial 4 */}
        <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              alt="David Park"
              className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">David Park</h4>
              <p className="text-blue-600 text-sm">Head of Digital at Nexus Media</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            "The team at Imaginry Space understands modern marketing like no other. They helped us pivot our strategy and achieve 5x engagement across all channels. Outstanding work!"
          </p>
        </div>

        {/* Testimonial 5 */}
        <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
              alt="Jessica Thompson"
              className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">Jessica Thompson</h4>
              <p className="text-purple-600 text-sm">CEO at Spark Digital</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            "Imaginry Space brought fresh perspectives to our stale campaigns. Their creative solutions and strategic thinking resulted in our most successful quarter ever. True partners!"
          </p>
        </div>

        {/* Testimonial 6 */}
        <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
              alt="Alex Kumar"
              className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">Alex Kumar</h4>
              <p className="text-blue-600 text-sm">Marketing Lead at Velocity Inc</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            "From concept to execution, Imaginry Space exceeded every expectation. Our conversion rates tripled and we finally cracked the millennial market. Can't thank them enough!"
          </p>
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
              alt="David Park"
              className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">David Park</h4>
              <p className="text-blue-600 text-sm">Head of Digital at Nexus Media</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            "The team at Imaginry Space understands modern marketing like no other. They helped us pivot our strategy and achieve 5x engagement across all channels. Outstanding work!"
          </p>
        </div>

        <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-purple-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
              alt="Jessica Thompson"
              className="w-16 h-16 rounded-full object-cover border-4 border-purple-200"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">Jessica Thompson</h4>
              <p className="text-purple-600 text-sm">CEO at Spark Digital</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            "Imaginry Space brought fresh perspectives to our stale campaigns. Their creative solutions and strategic thinking resulted in our most successful quarter ever. True partners!"
          </p>
        </div>

        <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
              alt="Alex Kumar"
              className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
            />
            <div className="ml-4">
              <h4 className="font-bold text-lg text-gray-900">Alex Kumar</h4>
              <p className="text-blue-600 text-sm">Marketing Lead at Velocity Inc</p>
            </div>
          </div>
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed">
            "From concept to execution, Imaginry Space exceeded every expectation. Our conversion rates tripled and we finally cracked the millennial market. Can't thank them enough!"
          </p>
        </div>
      </div>
    </div>
  </div>

  <style jsx>{`
    @keyframes scroll-left {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    @keyframes scroll-right {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0);
      }
    }
  `}</style>
</section>
      
      {/* Pricing Section - Stripe Integration */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-blue-50">
  <div className="max-w-7xl mx-auto">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-4">
        Imaginry Space <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Pricing</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Transform your marketing strategy with powerful creative tools
      </p>
    </div>

    {/* Feature Matrix Grid */}
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Left: Pricing Card */}
        <div className="p-12 bg-gradient-to-br from-purple-600 to-blue-600 text-white flex flex-col justify-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">Professional Plan</h3>
            <p className="text-purple-100">Everything you need to scale your marketing</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-6xl font-bold">$79</span>
              <span className="text-2xl text-purple-200">/month</span>
            </div>
            <p className="text-purple-100 mt-2">Billed monthly • Cancel anytime</p>
          </div>

          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_5kQ7sN0IX2Pqalc8WP0VO00'}
            className="w-full bg-white text-purple-600 py-4 px-8 rounded-xl font-bold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-xl mb-6"
          >
            Start Your Journey →
          </button>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-4 pt-6 border-t border-purple-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Stripe Protected</span>
            </div>
          </div>
        </div>

        {/* Right: Feature Matrix */}
        <div className="p-12 bg-gray-50">
          <h4 className="text-2xl font-bold text-gray-900 mb-8">What's Included</h4>
          
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-1">AI-Powered Campaign Builder</h5>
                <p className="text-gray-600 text-sm">Create stunning marketing campaigns in minutes with Imaginry Space's intelligent automation</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-1">Advanced Analytics Dashboard</h5>
                <p className="text-gray-600 text-sm">Track ROI, engagement metrics, and conversion rates in real-time</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-1">Team Collaboration Tools</h5>
                <p className="text-gray-600 text-sm">Unlimited team members with role-based permissions and workflow management</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-1">Brand Asset Library</h5>
                <p className="text-gray-600 text-sm">Store and organize unlimited creative assets with Imaginry Space cloud storage</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-1">Automated Scheduling</h5>
                <p className="text-gray-600 text-sm">Schedule campaigns across all channels with smart timing optimization</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h5 className="font-bold text-gray-900 mb-1">Priority Support</h5>
                <p className="text-gray-600 text-sm">24/7 dedicated support from Imaginry Space marketing experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Trust Bar */}
    <div className="mt-12 text-center">
      <p className="text-gray-500 text-sm mb-4">Trusted by 10,000+ marketing teams worldwide</p>
      <div className="flex items-center justify-center gap-8 text-gray-400">
        <span className="text-xs">✓ No credit card required</span>
        <span className="text-xs">✓ Cancel anytime</span>
        <span className="text-xs">✓ 30-day money back</span>
      </div>
    </div>
  </div>
</section>
      
      {/* Contact Form - Supabase Integration */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/* Left Column - Content */}
      <div className="space-y-8">
        <div>
          <span className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-sm font-semibold text-purple-300 mb-6">
            Let's Create Magic Together
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
              Marketing Vision
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            At Imaginry Space, we don't just execute campaigns—we craft experiences that resonate. Let's discuss how we can elevate your brand to new heights.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email Us</h3>
              <p className="text-gray-400">hello@imaginryspace.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Call Us</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400 mb-4">Trusted by innovative brands worldwide</p>
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">500+</div>
              <div className="text-xs text-gray-400">Campaigns</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">98%</div>
              <div className="text-xs text-gray-400">Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">24/7</div>
              <div className="text-xs text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="lg:sticky lg:top-8">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-white/20 shadow-2xl">
          <h3 className="text-2xl font-bold mb-2">Start Your Journey</h3>
          <p className="text-gray-300 mb-8">Fill out the form and we'll be in touch within 24 hours.</p>
          
          <form
            onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              const form = e.currentTarget as HTMLFormElement;
              const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
              const statusDiv = form.querySelector('#form-status') as HTMLDivElement;
              
              const formData = {
                name: (form.querySelector('#name') as HTMLInputElement).value,
                email: (form.querySelector('#email') as HTMLInputElement).value,
                phone: (form.querySelector('#phone') as HTMLInputElement).value,
                company: (form.querySelector('#company') as HTMLInputElement).value,
                budget: (form.querySelector('#budget') as HTMLSelectElement).value,
                services: (form.querySelector('#services') as HTMLSelectElement).value,
                message: (form.querySelector('#message') as HTMLTextAreaElement).value,
                source: 'Imaginry Space Contact Form'
              };

              submitButton.disabled = true;
              submitButton.innerHTML = '<svg className="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>';

              try {
                const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form-submissions', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
                });

                if (!response.ok) throw new Error('Submission failed');

                statusDiv.className = 'mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl text-green-300 text-sm';
                statusDiv.textContent = '✓ Thank you! We\'ll be in touch within 24 hours.';
                form.reset();
              } catch (error) {
                statusDiv.className = 'mt-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl text-red-300 text-sm';
                statusDiv.textContent = '✗ Something went wrong. Please try again or email us directly.';
              } finally {
                submitButton.disabled = false;
                submitButton.innerHTML = 'Send Message';
              }
            }}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-2">
                  Monthly Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900">Select budget range</option>
                  <option value="5k-10k" className="bg-slate-900">$5,000 - $10,000</option>
                  <option value="10k-25k" className="bg-slate-900">$10,000 - $25,000</option>
                  <option value="25k-50k" className="bg-slate-900">$25,000 - $50,000</option>
                  <option value="50k-100k" className="bg-slate-900">$50,000 - $100,000</option>
                  <option value="100k+" className="bg-slate-900">$100,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="services" className="block text-sm font-medium mb-2">
                  Service Interest
                </label>
                <select
                  id="services"
                  name="services"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-900">Select a service</option>
                  <option value="brand-strategy" className="bg-slate-900">Brand Strategy</option>
                  <option value="digital-marketing" className="bg-slate-900">Digital Marketing</option>
                  <option value="content-creation" className="bg-slate-900">Content Creation</option>
                  <option value="social-media" className="bg-slate-900">Social Media Management</option>
                  <option value="seo-sem" className="bg-slate-900">SEO & SEM</option>
                  <option value="full-service" className="bg-slate-900">Full-Service Marketing</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Tell Us About Your Project *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all resize-none"
                placeholder="Share your goals, challenges, and what success looks like for you..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>

            <div id="form-status" className="hidden"></div>

            <p className="text-xs text-gray-400 text-center">
              By submitting this form, you agree to our privacy policy. We respect your data and will never share it with third parties.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>

  {/* Footer Integration */}
  <div className="relative border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h4 className="text-2xl font-bold mb-4">Imaginry Space</h4>
          <p className="text-gray-400 mb-6 max-w-md">
            Transforming brands through innovative marketing strategies and creative excellence.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-4">Services</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-purple-400 transition-colors">Brand Strategy</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Content Creation</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Social Media</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-4">Company</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-purple-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        <p>&copy; 2024 Imaginry Space. All rights reserved. Crafted with creativity and passion.</p>
      </div>
    </div>
  </div>
</section>
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
      {/* Brand */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">I</span>
        </div>
        <span className="font-bold text-lg">Imaginry Space</span>
      </div>

      {/* Contact Info */}
      <div className="flex flex-wrap items-center gap-6 text-gray-300">
        <a href="mailto:hello@imaginryspace.com" className="hover:text-pink-400 transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
          </svg>
          hello@imaginryspace.com
        </a>
        <a href="tel:+1234567890" className="hover:text-pink-400 transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
          </svg>
          +1 (234) 567-890
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3">
        <a href="https://linkedin.com" className="w-9 h-9 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all hover:scale-110">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://twitter.com" className="w-9 h-9 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all hover:scale-110">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </a>
        <a href="https://instagram.com" className="w-9 h-9 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all hover:scale-110">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="https://facebook.com" className="w-9 h-9 bg-white/10 hover:bg-pink-500 rounded-full flex items-center justify-center transition-all hover:scale-110">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <div className="text-gray-400 text-xs">
        © {new Date().getFullYear()} Imaginry Space. All rights reserved.
      </div>
    </div>
  </div>
</footer>
    </main>
  )
}