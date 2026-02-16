import { e as createComponent, g as addAttribute, k as renderSlot, l as renderHead, r as renderTemplate, h as createAstro, m as maybeRenderHead, n as renderComponent, o as renderScript, p as Fragment$1 } from '../chunks/astro/server_BuPk3ixh.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                 */
import { Phone, ArrowRight, CheckCircle, Home, Clock, Star, Users, MapPin, ChevronDown, Mail, Linkedin, Facebook, Instagram, Sparkles, Box, Key, Hammer, CheckCircle2, User, Building2, CalendarIcon, ArrowLeft, ChevronUp, Search, Check } from 'lucide-react';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Home Cleaning & Co - Professional Cleaning Services in St. Petersburg, FL"
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth" style="scroll-padding-top: 100px;"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body class="bg-background text-text font-sans antialiased selection:bg-primary selection:text-white"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/k-a-v/Documents/github/r_pronto/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { text: "About", href: "#about" },
    { text: "Services", href: "#services" },
    { text: "Reviews", href: "#testimonials" },
    { text: "Areas", href: "#areas" },
    { text: "Support", href: "#faq" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 md:top-6 left-0 right-0 z-50 flex justify-center px-0 md:px-4 pointer-events-none transition-transform duration-300" data-astro-cid-3ef6ksr2> <div class="pointer-events-auto bg-white md:bg-white/95 md:backdrop-blur-xl md:border md:border-secondary/5 md:shadow-2xl md:rounded-full px-4 md:px-6 py-2 flex items-center justify-between gap-2 lg:gap-6 max-w-5xl w-full md:w-auto transition-all duration-500" data-astro-cid-3ef6ksr2> <!-- Logo (Left on mobile, left on desktop) --> <a href="/" class="flex items-center gap-2 order-1 shrink-0" data-astro-cid-3ef6ksr2> <img src="/images/logo.png" alt="Home Cleaning & Co" class="h-9 md:h-10 w-auto object-contain" data-astro-cid-3ef6ksr2> </a> <!-- Desktop Nav --> <nav class="hidden md:flex items-center gap-2 order-2" data-astro-cid-3ef6ksr2> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="px-2 lg:px-4 py-2 text-xs lg:text-sm font-medium text-text-light hover:text-secondary hover:bg-black/5 rounded-full transition-all whitespace-nowrap" data-astro-cid-3ef6ksr2> ${link.text} </a>`)} </nav> <!-- CTA Button --> <div class="hidden md:flex items-center gap-2 lg:gap-4 order-3 pl-2" data-astro-cid-3ef6ksr2> <a href="tel:9543933479" class="flex items-center gap-2 text-text-light hover:text-primary font-medium transition-colors whitespace-nowrap" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Phone", Phone, { "className": "w-4 h-4", "data-astro-cid-3ef6ksr2": true })} <span class="hidden lg:inline" data-astro-cid-3ef6ksr2>(954) 393-3479</span> </a> <a href="#quote" class="bg-primary hover:bg-primary-dark text-white text-sm font-bold px-6 py-2.5 rounded-full transition-colors shadow-xl hover:shadow-primary/30 ring-2 ring-primary/20 whitespace-nowrap" data-astro-cid-3ef6ksr2>
Book Now
</a> </div> <!-- Mobile Menu Button (Animated Hamburger) --> <button id="menu-btn" class="md:hidden p-2 rounded-full transition-colors order-3 hamburger-btn" aria-label="Toggle menu" data-astro-cid-3ef6ksr2> <div class="hamburger-icon" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> <span data-astro-cid-3ef6ksr2></span> </div> </button> </div> <!-- Mobile Nav Dropdown --> <div id="mobile-menu" class="absolute top-full left-0 right-0 mt-0 md:hidden invisible opacity-0 -translate-y-2 transition-all duration-300 ease-in-out z-40 pointer-events-auto" data-astro-cid-3ef6ksr2> <div class="bg-white shadow-lg border-t border-border py-4 px-5 flex flex-col gap-1" data-astro-cid-3ef6ksr2> ${links.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="text-base font-medium text-secondary/80 hover:text-primary py-3 px-2 border-b border-border transition-all mobile-link text-center" data-astro-cid-3ef6ksr2> ${link.text} </a>`)} <a href="tel:9543933479" class="text-base font-medium text-secondary/80 hover:text-primary py-3 px-2 border-b border-border transition-all mobile-link text-center flex items-center justify-center gap-2" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Phone", Phone, { "className": "w-4 h-4", "data-astro-cid-3ef6ksr2": true })}
(954) 393-3479
</a> <a href="#quote" class="mobile-link bg-primary text-white text-base font-bold px-6 py-3 rounded-full shadow-lg shadow-primary/30 text-center mt-4 hover:bg-primary-dark transition-colors" data-astro-cid-3ef6ksr2>
Book Now
</a> </div> </div> </header> ${renderScript($$result, "/Users/k-a-v/Documents/github/r_pronto/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/k-a-v/Documents/github/r_pronto/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { id, class: className, containerClass, fullWidth = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(["py-16 md:py-24", className], "class:list")}> ${fullWidth ? renderTemplate`${renderSlot($$result, $$slots["default"])}` : renderTemplate`<div${addAttribute(["container mx-auto px-4 md:px-6", containerClass], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`} </section>`;
}, "/Users/k-a-v/Documents/github/r_pronto/src/components/ui/Section.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "hero", "class": "relative overflow-hidden bg-background-mint min-h-screen flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-0", "containerClass": "relative z-10 w-full", "data-astro-cid-bbe6dxrz": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="absolute bottom-0 left-0 lg:-left-24 xl:-left-32 w-[22%] xl:w-[26%] max-w-[500px] z-10 hidden lg:block pointer-events-none opacity-0 animate-fade-in delay-200" data-astro-cid-bbe6dxrz> <img src="/images/hero/hero-left-women.png" alt="Professional cleaner" class="w-full h-full object-contain object-bottom" data-astro-cid-bbe6dxrz> </div>  <div class="absolute bottom-0 right-0 lg:-right-24 xl:-right-32 w-[22%] xl:w-[26%] max-w-[500px] z-10 hidden lg:block pointer-events-none opacity-0 animate-fade-in delay-300" data-astro-cid-bbe6dxrz> <img src="/images/hero/hero-right-women.png" alt="Professional cleaner" class="w-full h-full object-contain object-bottom transform" data-astro-cid-bbe6dxrz> </div>  <div class="max-w-4xl mx-auto flex flex-col items-center text-center px-4" data-astro-cid-bbe6dxrz> <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-secondary/5 text-secondary/70 text-sm font-medium mb-8 shadow-sm opacity-0 animate-fade-in-up" data-astro-cid-bbe6dxrz> <span class="w-2 h-2 rounded-full bg-primary animate-pulse" data-astro-cid-bbe6dxrz></span>
Trusted by 500+ St. Pete Homes
</div> <h1 class="text-5xl md:text-7xl lg:text-7xl font-bold text-secondary leading-[1.05] tracking-tight mb-8 opacity-0 animate-fade-in-up" data-astro-cid-bbe6dxrz>
St. Petersburg's<br data-astro-cid-bbe6dxrz> <span class="text-primary" data-astro-cid-bbe6dxrz>Most Trusted</span><br data-astro-cid-bbe6dxrz>
Home Cleaning Team
</h1> <p class="text-lg md:text-xl text-text-light mb-10 max-w-xl leading-relaxed opacity-0 animate-fade-in-up delay-100" data-astro-cid-bbe6dxrz>
Family-owned, licensed & insured. We bring the supplies, you enjoy
            the results — guaranteed.
</p> <div class="py-5 opacity-0 animate-fade-in-up delay-200" data-astro-cid-bbe6dxrz> <a href="#quote" class="inline-flex items-center gap-2 bg-primary text-white text-xl font-bold px-12 py-5 rounded-full shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300" data-astro-cid-bbe6dxrz>
Book Now
${renderComponent($$result2, "ArrowRight", ArrowRight, { "className": "w-5 h-5", "data-astro-cid-bbe6dxrz": true })} </a> </div> <div class="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-text-light font-medium opacity-0 animate-fade-in-up delay-300" data-astro-cid-bbe6dxrz> <div class="flex items-center gap-2" data-astro-cid-bbe6dxrz> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-5 h-5 text-primary", "data-astro-cid-bbe6dxrz": true })} <span data-astro-cid-bbe6dxrz>Licensed & Insured</span> </div> <div class="flex items-center gap-2" data-astro-cid-bbe6dxrz> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-5 h-5 text-primary", "data-astro-cid-bbe6dxrz": true })} <span data-astro-cid-bbe6dxrz>Supplies Included</span> </div> <div class="flex items-center gap-2" data-astro-cid-bbe6dxrz> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-5 h-5 text-primary", "data-astro-cid-bbe6dxrz": true })} <span data-astro-cid-bbe6dxrz>Satisfaction Guaranteed</span> </div> <div class="flex items-center gap-2" data-astro-cid-bbe6dxrz> ${renderComponent($$result2, "CheckCircle", CheckCircle, { "className": "w-5 h-5 text-primary", "data-astro-cid-bbe6dxrz": true })} <span data-astro-cid-bbe6dxrz>Fast Quotes</span> </div> </div> </div> ` })} `;
}, "/Users/k-a-v/Documents/github/r_pronto/src/components/Hero.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "about", "class": "bg-white py-16 md:py-24" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"> <!-- Image Column --> <div class="w-full lg:w-[45%] max-w-xl mx-auto lg:max-w-none relative order-2 lg:order-1 mb-12 lg:mb-0"> <div class="relative rounded-3xl overflow-hidden shadow-xl border border-border-light aspect-[4/3] lg:aspect-[4/5] group"> <img src="/images/hero-clean-home.jpg" alt="Bright, freshly cleaned living room" class="w-full h-full object-cover object-top transform transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-t from-secondary/30 via-transparent to-transparent"></div> </div> <!-- Floating Stats Card --> <div class="absolute left-6 -right-4 -bottom-10 sm:left-auto sm:-right-6 sm:-bottom-12 sm:w-[280px] lg:-right-8 lg:-bottom-10 lg:w-[320px] z-10"> <div class="rounded-2xl border border-white/60 bg-white/80 backdrop-blur-xl p-5 shadow-xl shadow-secondary/10"> <ul class="space-y-4"> <li class="flex items-start gap-4"> <span class="mt-0.5 shrink-0 rounded-full bg-primary/10 p-2.5 text-primary"> ${renderComponent($$result2, "Home", Home, { "className": "w-5 h-5" })} </span> <div> <p class="text-2xl leading-none font-bold text-secondary mb-1">
500+
</p> <p class="text-sm font-bold text-secondary">
Happy Homes
</p> <p class="text-xs font-medium text-text-light">
Served in St. Pete
</p> </div> </li> <li class="flex items-start gap-4"> <span class="mt-0.5 shrink-0 rounded-full bg-primary/10 p-2.5 text-primary"> ${renderComponent($$result2, "Clock", Clock, { "className": "w-5 h-5" })} </span> <div> <p class="text-base leading-tight font-bold text-secondary">
24-Hour Reclean
</p> <p class="text-xs font-medium text-text-light">
Satisfaction Guarantee
</p> </div> </li> <li class="flex items-start gap-4"> <span class="mt-0.5 shrink-0 rounded-full bg-primary/10 p-2.5 text-primary"> ${renderComponent($$result2, "Star", Star, { "className": "w-5 h-5" })} </span> <div> <p class="text-base leading-tight font-bold text-secondary">
5-Star Rated
</p> <p class="text-xs font-medium text-text-light">
Google Reviews
</p> </div> </li> </ul> </div> </div> </div> <!-- Content Column --> <div class="w-full lg:w-[55%] text-center lg:text-left order-1 lg:order-2"> <span class="inline-flex items-center gap-1.5 text-text-600 font-semibold tracking-wider uppercase text-sm bg-surface border border-border-light px-4 py-1.5 rounded-full mb-6">About Us</span> <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary tracking-tight leading-tight mb-6">
More Than Just Cleaners.<br class="hidden lg:block">
We're Family.
</h2> <p class="text-lg text-text-light leading-relaxed mb-8">
Home Cleaning & Co is a sibling-owned cleaning company proudly
                serving St. Petersburg. As a family-run business, we take pride
                in delivering dependable service with a personal touch. Every
                visit is handled with the same level of care we'd expect in our
                own home.
</p> <div class="bg-surface border border-border-light rounded-3xl p-6 md:p-8 text-center lg:text-left mb-8"> <p class="text-sm font-bold uppercase tracking-wider text-primary mb-3">
Why We're Different
</p> <p class="text-text-700 leading-relaxed font-medium">
We stand by our work with a 24-hour reclean guarantee. If
                    any detail is missed, we'll return within 24 hours to make
                    it right. That consistency and accountability is why local
                    families continue to trust us.
</p> </div> <div class="flex flex-wrap gap-3 justify-center lg:justify-start"> <span class="inline-flex items-center gap-2 rounded-full bg-surface border border-border-light px-5 py-2.5 text-sm font-semibold text-secondary shadow-sm"> ${renderComponent($$result2, "Users", Users, { "className": "w-4 h-4 text-primary shrink-0" })}
Sibling-owned & operated
</span> <span class="inline-flex items-center gap-2 rounded-full bg-surface border border-border-light px-5 py-2.5 text-sm font-semibold text-secondary shadow-sm"> ${renderComponent($$result2, "MapPin", MapPin, { "className": "w-4 h-4 text-primary shrink-0" })}
Based in St. Petersburg, FL
</span> </div> </div> </div> ` })}`;
}, "/Users/k-a-v/Documents/github/r_pronto/src/components/About.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      title: "Regular Maintenance",
      image: "/images/services/regular-maintenance.png"
    },
    {
      title: "Deep Cleaning",
      image: "/images/services/deep-cleaning.png"
    },
    {
      title: "Move-In / Move-Out",
      image: "/images/services/move-in:move-out.png"
    },
    {
      title: "Airbnb Turnover",
      image: "/images/services/airbnb-rentals.png"
    },
    {
      title: "Post-Construction",
      image: "/images/services/post-construction.png"
    },
    {
      title: "Office Cleaning",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
    }
  ];
  const allServices = [...services, ...services];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "services", "class": "bg-background-mint overflow-hidden py-16 md:py-24", "fullWidth": true, "data-astro-cid-g5jplrhu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="text-center max-w-2xl mx-auto mb-16 px-4 animate-fade-in-up" data-astro-cid-g5jplrhu> <span class="inline-flex items-center gap-1.5 text-text-600 font-semibold tracking-wider uppercase text-xs bg-white border border-border-light px-4 py-1.5 rounded-full mb-4" data-astro-cid-g5jplrhu>What are you looking for?</span> <h2 class="text-4xl md:text-5xl font-bold text-secondary mb-6 font-sans tracking-tight" data-astro-cid-g5jplrhu>
Our Services
</h2> </div>  <div class="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 px-4 lg:hidden" data-astro-cid-g5jplrhu> ${services.map((service, index) => renderTemplate`<div class="flex flex-col items-center group/card"${addAttribute(`animation: fade-in-up 0.6s ease-out forwards ${index * 100}ms; opacity: 0;`, "style")} data-astro-cid-g5jplrhu> <!-- Image Card --> <div class="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-md relative" data-astro-cid-g5jplrhu> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover" loading="lazy" data-astro-cid-g5jplrhu> <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" data-astro-cid-g5jplrhu></div> </div> <!-- Title Below --> <h3 class="mt-4 text-lg font-bold text-secondary text-center tracking-tight leading-tight" data-astro-cid-g5jplrhu> ${service.title} </h3> </div>`)} </div>  <div class="hidden lg:block relative w-full overflow-hidden group" data-astro-cid-g5jplrhu> <!-- Scrolling Track --> <div class="flex w-max animate-scroll py-4" data-astro-cid-g5jplrhu> ${allServices.map((service) => renderTemplate`<div class="flex-none px-4" data-astro-cid-g5jplrhu> <div class="w-[350px] flex flex-col items-center group/card" data-astro-cid-g5jplrhu> <!-- Image Card --> <div class="w-full aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-lg relative" data-astro-cid-g5jplrhu> <img${addAttribute(service.image, "src")}${addAttribute(service.title, "alt")} class="w-full h-full object-cover" data-astro-cid-g5jplrhu> <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" data-astro-cid-g5jplrhu></div> </div> <!-- Title Below --> <h3 class="mt-8 text-3xl font-bold text-secondary text-center tracking-tight" data-astro-cid-g5jplrhu> ${service.title} </h3> </div> </div>`)} </div> </div> ` })} `;
}, "/Users/k-a-v/Documents/github/r_pronto/src/components/Services.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "St. Petersburg",
      text: "The team did an incredible job! My house has never looked this clean. They were professional, on time, and paid attention to every detail.",
      rating: 5
    },
    {
      name: "James D.",
      location: "Clearwater",
      text: "I've used several cleaning services before, but Home Cleaning & Co is by far the best. The team is friendly and they really care about their work.",
      rating: 5
    },
    {
      name: "Emily R.",
      location: "Tampa",
      text: "Moving out was stressful enough, but their move-out cleaning service was a lifesaver. Got my full deposit back thanks to them!",
      rating: 5
    },
    {
      name: "Michael B.",
      location: "St. Pete Beach",
      text: "Incredible attention to detail. They cleaned places I didn't even know were dirty. Highly recommend for deep cleaning.",
      rating: 5
    },
    {
      name: "Jessica T.",
      location: "Largo",
      text: "Reliable and trustworthy. I leave them my key and come home to a sparkling house every time. Best part of my week!",
      rating: 5
    },
    {
      name: "David W.",
      location: "Seminole",
      text: "Post-construction cleanup was a breeze with them. They removed all the dust and debris quickly. Professional and efficient.",
      rating: 5
    },
    {
      name: "Ashley K.",
      location: "St. Petersburg",
      text: "The cleaners were so polite and respectful. They did a fantastic job on my bathrooms and kitchen. Will definitely book again.",
      rating: 5
    },
    {
      name: "Robert L.",
      location: "Clearwater Beach",
      text: "Excellent service for my Airbnb rentals. They are quick, thorough, and always reliable. My guests love the cleanliness.",
      rating: 5
    },
    {
      name: "Amanda P.",
      location: "Pinellas Park",
      text: "I love the eco-friendly products they use. Smells fresh without the harsh chemical smell. Great for my pets!",
      rating: 5
    }
  ];
  const col1 = [testimonials[0], testimonials[3], testimonials[6]];
  const col2 = [testimonials[1], testimonials[4], testimonials[7]];
  const col3 = [testimonials[2], testimonials[5], testimonials[8]];
  const columns = [
    { items: col1, className: "animate-scroll-up-1" },
    { items: col2, className: "hidden md:block animate-scroll-up-2" },
    { items: col3, className: "hidden lg:block animate-scroll-up-3" }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "testimonials", "class": "bg-background-mint py-16 md:py-24 overflow-hidden", "data-astro-cid-aadlzisc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4" data-astro-cid-aadlzisc> <div class="text-center mb-16 px-4 animate-fade-in-up" data-astro-cid-aadlzisc> <span class="inline-flex items-center gap-1.5 text-text-600 font-semibold tracking-wider uppercase text-xs bg-surface border border-border-light px-4 py-1.5 rounded-full mb-4" data-astro-cid-aadlzisc>Testimonials</span> <h2 class="text-4xl md:text-5xl font-bold text-secondary mb-6 font-sans tracking-tight" data-astro-cid-aadlzisc>
Loved by <span class="text-primary" data-astro-cid-aadlzisc>Locals</span> </h2> <p class="text-text-light max-w-lg mx-auto" data-astro-cid-aadlzisc>
Real feedback from your neighbors in St. Petersburg and across
                Pinellas County.
</p> </div> <div class="relative w-full h-[600px] overflow-hidden" data-astro-cid-aadlzisc> <!-- Fade Gradients --> <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background-mint to-transparent z-10 pointer-events-none" data-astro-cid-aadlzisc></div> <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-mint to-transparent z-10 pointer-events-none" data-astro-cid-aadlzisc></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-aadlzisc> ${columns.map((col) => renderTemplate`<div${addAttribute(col.className, "class")} data-astro-cid-aadlzisc>  ${[...col.items, ...col.items, ...col.items].map(
    (testimonial, index) => renderTemplate`<div class="bg-white p-8 rounded-3xl shadow-sm border border-secondary/5 mb-6 hover:shadow-md transition-shadow" data-astro-cid-aadlzisc> <div class="flex gap-1 mb-4 text-primary" data-astro-cid-aadlzisc> ${[
      ...Array(
        testimonial?.rating || 5
      )
    ].map(() => renderTemplate`${renderComponent($$result2, "Star", Star, { "className": "w-4 h-4 fill-current", "data-astro-cid-aadlzisc": true })}`)} </div> <p class="text-text-600 mb-6 leading-relaxed" data-astro-cid-aadlzisc>
"${testimonial?.text}"
</p> <div class="flex items-center gap-3" data-astro-cid-aadlzisc> <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold" data-astro-cid-aadlzisc> ${testimonial?.name.charAt(0)} </div> <div data-astro-cid-aadlzisc> <p class="font-bold text-sm text-secondary" data-astro-cid-aadlzisc> ${testimonial?.name} </p> <p class="text-xs text-text-light" data-astro-cid-aadlzisc> ${testimonial?.location} </p> </div> </div> </div>`
  )} </div>`)} </div> </div> </div> ` })} `;
}, "/Users/k-a-v/Documents/github/r_pronto/src/components/Testimonials.astro", void 0);

const $$StickyBook = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="sticky-book" class="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-secondary/10 px-4 py-4 lg:hidden transform translate-y-full transition-transform duration-300 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]"> <div class="flex items-center justify-between gap-4 max-w-sm mx-auto"> <div class="flex flex-col"> <span class="text-xs font-bold text-secondary uppercase tracking-wider">
Ready to clean?
</span> <span class="text-xs text-text-500"> Get a quote in seconds </span> </div> <a href="#quote" class="bg-primary text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-primary-dark transition-colors text-sm whitespace-nowrap">
Book Now
</a> </div> </div> ${renderScript($$result, "/Users/k-a-v/Documents/github/r_pronto/src/components/StickyBook.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/k-a-v/Documents/github/r_pronto/src/components/StickyBook.astro", void 0);

const $$Areas = createComponent(($$result, $$props, $$slots) => {
  const areas = [
    { name: "St. Petersburg", primary: true },
    { name: "South Pasadena", primary: false },
    { name: "Pinellas Park", primary: false },
    { name: "Kenneth City", primary: false },
    { name: "Lealman", primary: false },
    { name: "West Lealman", primary: false },
    { name: "Gulfport", primary: false },
    { name: "Seminole", primary: false },
    { name: "Treasure Island", primary: false },
    { name: "Madeira Beach", primary: false },
    { name: "Bay Pines", primary: false }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "areas", "class": "bg-background-mint py-16 md:py-24" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-7xl mx-auto px-4"> <!-- Centered Header --> <div class="text-center mb-16"> <span class="inline-flex items-center gap-1.5 text-text-600 font-semibold tracking-wider uppercase text-xs bg-white border border-border-light px-4 py-1.5 rounded-full mb-4">Service Coverage</span> <h2 class="text-4xl md:text-5xl font-bold text-secondary mb-4 font-sans tracking-tight">
Areas We <span class="text-primary">Serve</span> </h2> <p class="text-text-light text-lg max-w-lg mx-auto">
Based in St. Petersburg and proudly serving nearby communities.
</p> </div> <!-- Location Tags --> <div class="max-w-4xl mx-auto"> <div class="flex flex-wrap justify-center gap-3"> ${areas.map((area) => renderTemplate`<div${addAttribute(`inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 group cursor-default
                            ${area.primary ? "bg-white border-primary shadow-md transform scale-105" : "bg-white/60 border-transparent hover:bg-white hover:border-border-light hover:shadow-sm"}`, "class")}> ${renderComponent($$result2, "MapPin", MapPin, { "className": `w-4 h-4 ${area.primary ? "text-primary fill-primary/20" : "text-text-400 group-hover:text-primary transition-colors"}` })} <span${addAttribute(`text-sm ${area.primary ? "font-bold text-secondary" : "font-medium text-text-600 group-hover:text-secondary transition-colors"}`, "class")}> ${area.name} </span> ${area.primary && renderTemplate`<span class="text-[10px] font-bold uppercase tracking-wider bg-primary text-white px-1.5 py-0.5 rounded ml-1">
HQ
</span>`} </div>`)} </div> </div> </div> ` })}`;
}, "/Users/k-a-v/Documents/github/r_pronto/src/components/Areas.astro", void 0);

const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "Do you bring supplies and equipment?",
      answer: "Yes \u2014 we bring our own supplies and standard equipment. You don't need to provide anything. If you prefer we use specific products (or avoid certain ingredients), just let us know in your quote request."
    },
    {
      question: "What are your hours?",
      answer: "We're available 7am\u20138pm, Monday through Sunday."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "Let us know within 24 hours and we'll come back to re-clean the specific areas you mention."
    },
    {
      question: "Do I need to be home?",
      answer: "No \u2014 many clients provide access instructions and come back to a spotless home."
    },
    {
      question: "How do you price cleanings?",
      answer: "Pricing depends on bedrooms, bathrooms, and the home's condition. Request a quote and we'll confirm an accurate estimate quickly."
    },
    {
      question: "What's your reschedule or cancellation policy?",
      answer: "If you need to reschedule, please give us as much notice as possible so we can adjust the schedule and serve everyone on time."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "faq", "class": "bg-surface py-16 md:py-24" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4"> <div class="text-center mb-16"> <span class="inline-flex items-center gap-1.5 text-text-600 font-semibold tracking-wider uppercase text-xs bg-white border border-border-light px-4 py-1.5 rounded-full mb-4">Common Questions</span> <h2 class="text-4xl md:text-5xl font-bold text-secondary mb-6 font-sans tracking-tight">
Frequently Asked <span class="text-primary">Questions</span> </h2> <p class="text-text-600 text-lg">
Quick answers to common questions.
</p> </div> <div class="space-y-4"> ${faqs.map((faq, index) => renderTemplate`<div class="bg-white rounded-2xl shadow-md border border-border overflow-hidden transition-all duration-300 hover:shadow-lg group"> <details class="group w-full"> <summary class="flex items-center justify-between p-6 cursor-pointer list-none"> <h3 class="text-lg font-bold text-text-900 pr-8"> ${faq.question} </h3> <span class="text-primary transition-transform duration-300 group-open:rotate-180"> ${renderComponent($$result2, "ChevronDown", ChevronDown, { "className": "w-5 h-5" })} </span> </summary> <div class="px-6 pb-6 text-text-600 leading-relaxed"> ${faq.answer} </div> </details> </div>`)} </div> </div> ` })}`;
}, "/Users/k-a-v/Documents/github/r_pronto/src/components/FAQ.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-secondary text-white pt-20 pb-10"> <div class="container mx-auto px-4 md:px-8"> <div class="flex flex-col items-center text-center mb-12"> <!-- Brand --> <div class="flex flex-col items-center gap-6"> <a href="/" class="flex items-center gap-2"> <span class="font-bold text-3xl tracking-tight text-white font-sans">Home Cleaning & Co</span> </a> <p class="text-white/60 text-lg leading-relaxed max-w-md mx-auto">
Reliable home services at your fingertips. Professional,
                    vetted, and always on time.
</p> <div class="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center"> <a href="mailto:support@homecleaningco.com" class="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full px-6 py-3 transition-all duration-300 group"> <div class="bg-primary/20 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors"> ${renderComponent($$result, "Mail", Mail, { "className": "w-5 h-5" })} </div> <span class="font-medium">support@homecleaningco.com</span> </a> <a href="tel:9543933479" class="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full px-6 py-3 transition-all duration-300 group"> <div class="bg-primary/20 p-2 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors"> ${renderComponent($$result, "Phone", Phone, { "className": "w-5 h-5" })} </div> <span class="font-medium">(954) 393-3479</span> </a> </div> </div> </div> <!-- Bottom Bar --> <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"> <p class="text-white/40 text-sm font-medium">
© ${currentYear} Home Cleaning & Co. All rights reserved.
</p> <div class="flex items-center gap-4"> <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300"> ${renderComponent($$result, "Linkedin", Linkedin, { "className": "w-5 h-5" })} </a> <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300"> ${renderComponent($$result, "Facebook", Facebook, { "className": "w-5 h-5" })} </a> <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-300"> ${renderComponent($$result, "Instagram", Instagram, { "className": "w-5 h-5" })} </a> </div> </div> </div> </footer>`;
}, "/Users/k-a-v/Documents/github/r_pronto/src/components/Footer.astro", void 0);

const CustomSelect = ({ options, value, onChange, placeholder, className = "", searchable = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const sortedOptions = useMemo(() => {
    return [...options].sort((a, b) => a.title.localeCompare(b.title));
  }, [options]);
  const filteredOptions = useMemo(() => {
    if (!searchQuery) return sortedOptions;
    return sortedOptions.filter(
      (option) => option.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [sortedOptions, searchQuery]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);
  const selectedOption = options.find((o) => o.id === value);
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, className: `relative ${className}`, children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(!isOpen),
        className: `w-full pl-4 pr-10 py-3 rounded-xl border flex items-center gap-3 transition-all text-left ${isOpen ? "border-primary ring-4 ring-primary/10 bg-white shadow-xl" : "bg-slate/5 border-transparent hover:bg-slate/10"}`,
        children: [
          selectedOption ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0", children: selectedOption.icon && /* @__PURE__ */ jsx(selectedOption.icon, { className: "w-4 h-4" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsx("span", { className: "block font-bold text-secondary text-sm leading-tight", children: selectedOption.title }),
              selectedOption.desc && /* @__PURE__ */ jsx("span", { className: "block text-xs text-slate-500 leading-tight mt-0.5", children: selectedOption.desc })
            ] })
          ] }) : /* @__PURE__ */ jsx("span", { className: "text-slate-400 font-medium px-2", children: placeholder }),
          /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-1/2 -translate-y-1/2 text-slate/40", children: isOpen ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 10, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 10, scale: 0.95 },
        transition: { duration: 0.2 },
        className: "absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border border-slate/10 overflow-hidden",
        children: [
          searchable && /* @__PURE__ */ jsx("div", { className: "p-3 border-b border-slate-100 bg-white sticky top-0 z-10 w-full", children: /* @__PURE__ */ jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: searchQuery,
                onChange: (e) => setSearchQuery(e.target.value),
                placeholder: "Search location...",
                className: "w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 outline-none text-sm font-medium transition-all placeholder:text-slate-400",
                onClick: (e) => e.stopPropagation()
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate/20 scrollbar-track-transparent overscroll-contain", children: filteredOptions.length > 0 ? filteredOptions.map((option) => /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                onChange(option.id);
                setIsOpen(false);
              },
              className: `w-full p-3 flex items-center gap-3 hover:bg-slate-50 transition-colors border-b border-slate/5 last:border-0 text-left group ${value === option.id ? "bg-primary/5" : ""}`,
              children: [
                /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${value === option.id ? "bg-primary text-white shadow-md shadow-primary/20" : "bg-slate-100 text-slate-400 group-hover:bg-white group-hover:text-primary group-hover:shadow-sm"}`, children: option.icon && /* @__PURE__ */ jsx(option.icon, { className: "w-4 h-4" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: `font-bold text-sm leading-tight truncate ${value === option.id ? "text-primary" : "text-secondary"}`, children: option.title }),
                    option.popular && /* @__PURE__ */ jsx("span", { className: "text-[10px] bg-secondary text-white px-1.5 py-0.5 rounded-full uppercase font-bold shrink-0", children: "Popular" })
                  ] }),
                  option.desc && /* @__PURE__ */ jsx("span", { className: "block text-xs text-slate-500 leading-tight mt-0.5 truncate group-hover:text-slate-600", children: option.desc })
                ] }),
                value === option.id && /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 text-primary shrink-0" })
              ]
            },
            option.id
          )) : /* @__PURE__ */ jsxs("div", { className: "p-8 text-center", children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-500 font-medium", children: "No locations found." }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-1", children: "Try a different search term." })
          ] }) })
        ]
      }
    ) })
  ] });
};
const serviceTypes = [
  {
    id: "regular",
    title: "Regular / Maintenance",
    desc: "Consistent clean for fresh homes.",
    icon: Home,
    multiplier: 1
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    desc: "Detailed clean for buildup & corners.",
    icon: Sparkles,
    multiplier: 1.5,
    popular: true
  },
  {
    id: "move",
    title: "Move-In / Move-Out",
    desc: "Empty-home focus for transitions.",
    icon: Box,
    multiplier: 1.8
  },
  {
    id: "airbnb",
    title: "Airbnb / Rentals",
    desc: "Reliable turnovers for 5-star stays.",
    icon: Key,
    multiplier: 1.2
  },
  {
    id: "post-construction",
    title: "Post-Construction",
    desc: "Dust & debris cleanup after reno.",
    icon: Hammer,
    multiplier: 2
  }
];
const addOnOptions = [
  { id: "fridge", label: "Inside Fridge", price: 35 },
  { id: "oven", label: "Inside Oven", price: 35 },
  { id: "windows", label: "Interior Windows", price: 45 },
  { id: "laundry", label: "Laundry", price: 25 },
  { id: "pets", label: "Pet Hair Focus", price: 30 }
];
const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00"
];
function BookingForm() {
  const formTopRef = useRef(null);
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (isSuccess && formTopRef.current) {
      formTopRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isSuccess]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [locations, setLocations] = useState([]);
  const [selectedLocationId, setSelectedLocationId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceType, setServiceType] = useState("regular");
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [sqft, setSqft] = useState(1e3);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [date, setDate] = useState();
  const [time, setTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState([]);
  const [isLoadingAvailability, setIsLoadingAvailability] = useState(false);
  useEffect(() => {
    const fetchAvailability = async () => {
      if (!date) return;
      setIsLoadingAvailability(true);
      setBookedSlots([]);
      try {
        const formattedDate = format(date, "yyyy-MM-dd");
        const response = await fetch(`/api/availability?date=${formattedDate}`);
        const data = await response.json();
        if (data.bookedTimes) {
          setBookedSlots(data.bookedTimes);
        }
      } catch (error) {
        console.error("Failed to fetch availability:", error);
      } finally {
        setIsLoadingAvailability(false);
      }
    };
    fetchAvailability();
  }, [date]);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("/api/places");
        const data = await response.json();
        if (data.places) {
          setLocations(data.places);
        }
      } catch (error) {
        console.error("Failed to fetch locations:", error);
      }
    };
    fetchLocations();
  }, []);
  useEffect(() => {
    calculatePrice();
  }, [serviceType, bedrooms, bathrooms, sqft, selectedAddons]);
  const calculatePrice = () => {
    let base = 110;
    let bedPrice = (bedrooms - 1) * 25;
    let bathPrice = (bathrooms - 1) * 35;
    let sqftPrice = (sqft - 1e3) * 0.05;
    if (sqftPrice < 0) sqftPrice = 0;
    let subtotal = base + bedPrice + bathPrice + sqftPrice;
    const service = serviceTypes.find((s) => s.id === serviceType);
    if (service) {
      subtotal *= service.multiplier;
    }
    let addonsTotal = 0;
    selectedAddons.forEach((id) => {
      const addon = addOnOptions.find((a) => a.id === id);
      if (addon) addonsTotal += addon.price;
    });
    const total = Math.round(subtotal + addonsTotal);
    setEstimatedPrice(total < 90 ? 90 : total);
  };
  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };
  const validateStep = () => {
    if (step === 1) return firstName && lastName && email && phone && zipCode;
    if (step === 2) return selectedLocationId && bedrooms && bathrooms;
    if (step === 3) return !!serviceType;
    if (step === 4) return true;
    if (step === 5) return date && time;
    return true;
  };
  const nextStep = () => {
    if (validateStep()) setStep(step + 1);
  };
  const prevStep = () => setStep(step - 1);
  const [bookingId, setBookingId] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep() || isSubmitting) return;
    setIsSubmitting(true);
    const bookingData = {
      firstName,
      lastName,
      email,
      phone,
      zipCode,
      serviceType,
      bedrooms,
      bathrooms,
      sqft,
      addons: selectedAddons,
      date: date ? format(date, "yyyy-MM-dd") : null,
      time,
      price: estimatedPrice,
      placeId: selectedLocationId
    };
    try {
      const response = await fetch("/api/create-booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
      });
      const result = await response.json();
      if (response.ok) {
        setBookingId(result.id);
        setIsSuccess(true);
      } else {
        alert(`Error: ${result.error || "Failed to submit booking"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const css = `
        .rdp { --rdp-cell-size: 45px; --rdp-accent-color: #2F9E87; --rdp-background-color: #eaf6f4; margin: 0; }
        .rdp-button { border-radius: 100%; transition: all 0.2s; }
        .rdp-button:not([disabled]) { background-color: #F8FAFC; color: #1E293B; }
        .rdp-button:hover:not([disabled]):not(.rdp-day_selected) { background-color: #E2E8F0; color: #2F9E87; font-weight: bold; }
        .rdp-day_selected { background-color: #2F9E87 !important; color: white !important; font-weight: bold; box-shadow: 0 4px 12px rgba(47, 158, 135, 0.3); }
        .rdp-day_today { font-weight: bold; color: #2F9E87; border: 2px solid #2F9E87; }
        .rdp-button[disabled] { opacity: 0.3; color: #94A3B8; background-color: transparent; }
    `;
  return /* @__PURE__ */ jsxs("div", { ref: formTopRef, className: "bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full border border-secondary/5 font-sans relative min-h-[600px]", children: [
    /* @__PURE__ */ jsx("style", { children: css }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-50" }),
    isSuccess ? /* @__PURE__ */ jsxs("div", { className: "flex-grow flex flex-col items-center justify-center text-center p-6 h-full animate-in fade-in zoom-in duration-500", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-6 left-6 text-xl animate-bounce delay-100 opacity-20", children: "🎉" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-12 right-6 text-xl animate-bounce delay-300 opacity-20", children: "✨" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-12 text-xl animate-bounce delay-700 opacity-20", children: "🎈" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-12 right-12 text-xl animate-bounce delay-500 opacity-20", children: "🎊" }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { scale: 0.5, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          transition: { type: "spring", duration: 0.8 },
          className: "relative mb-4",
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-6xl md:text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/10 select-none pointer-events-none whitespace-nowrap", style: { fontFamily: '"Permanent Marker", cursive' }, children: "Yay!" }),
            /* @__PURE__ */ jsx("div", { className: "relative z-10 bg-green-50 rounded-full p-4 inline-block mx-auto shadow-sm", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "w-10 h-10 md:w-12 md:h-12 text-primary" }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { y: 20, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { delay: 0.3 },
          className: "relative z-10 w-full max-w-sm",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl text-secondary mb-2 transform -rotate-2 leading-tight", style: { fontFamily: '"Permanent Marker", cursive' }, children: "Booking Confirmed!" }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-500 text-sm mb-6 leading-relaxed font-sans", children: [
              "Thanks ",
              /* @__PURE__ */ jsx("span", { className: "font-bold text-secondary", children: firstName }),
              "!",
              /* @__PURE__ */ jsx("br", {}),
              "We've received your request for:",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "font-bold text-base text-primary block my-1", children: serviceTypes.find((t) => t.id === serviceType)?.title || "Service" }),
              /* @__PURE__ */ jsxs("span", { className: "inline-block mt-1 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-xs md:text-sm", children: [
                /* @__PURE__ */ jsx("span", { className: "font-bold text-secondary", children: date ? format(date, "MMM do") : "" }),
                /* @__PURE__ */ jsx("span", { className: "mx-1 text-slate-400", children: "at" }),
                /* @__PURE__ */ jsx("span", { className: "font-bold text-secondary", children: time })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border border-slate-100 rounded-lg p-3 mb-6 mx-auto w-full", children: [
              /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-0.5", children: "Booking ID" }),
              /* @__PURE__ */ jsx("p", { className: "font-mono text-sm text-secondary select-all break-all", children: bookingId || "PENDING" })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => window.location.reload(),
                className: "bg-primary text-white px-6 py-2.5 rounded-xl font-bold shadow-lg hover:shadow-primary/40 hover:bg-primary-dark transition-all text-sm transform active:scale-95 w-full",
                children: "Book Another Service"
              }
            )
          ]
        }
      )
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white/50 backdrop-blur-sm px-4 md:px-6 py-4 border-b border-slate/5 flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate/40", children: [
        /* @__PURE__ */ jsxs("span", { className: step >= 1 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: `w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 1 ? "bg-primary text-white shadow-md shadow-primary/30" : "bg-slate/10 text-slate/40"}`, children: "1" }),
          /* @__PURE__ */ jsx("span", { children: "Contact" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `h-px w-full mx-2 hidden md:block ${step >= 2 ? "bg-primary/20" : "bg-slate/10"}` }),
        /* @__PURE__ */ jsxs("span", { className: step >= 2 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: `w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 2 ? "bg-primary text-white shadow-md shadow-primary/30" : "bg-slate/10 text-slate/40"}`, children: "2" }),
          /* @__PURE__ */ jsx("span", { children: "Home" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `h-px w-full mx-2 hidden md:block ${step >= 3 ? "bg-primary/20" : "bg-slate/10"}` }),
        /* @__PURE__ */ jsxs("span", { className: step >= 3 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: `w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 3 ? "bg-primary text-white shadow-md shadow-primary/30" : "bg-slate/10 text-slate/40"}`, children: "3" }),
          /* @__PURE__ */ jsx("span", { children: "Service" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `h-px w-full mx-2 hidden md:block ${step >= 4 ? "bg-primary/20" : "bg-slate/10"}` }),
        /* @__PURE__ */ jsxs("span", { className: step >= 4 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: `w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 4 ? "bg-primary text-white shadow-md shadow-primary/30" : "bg-slate/10 text-slate/40"}`, children: "4" }),
          /* @__PURE__ */ jsx("span", { children: "Extras" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `h-px w-full mx-2 hidden md:block ${step >= 5 ? "bg-primary/20" : "bg-slate/10"}` }),
        /* @__PURE__ */ jsxs("span", { className: step >= 5 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: `w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 5 ? "bg-primary text-white shadow-md shadow-primary/30" : "bg-slate/10 text-slate/40"}`, children: "5" }),
          /* @__PURE__ */ jsx("span", { children: "Time" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8 flex-grow flex flex-col overflow-y-auto", children: [
        /* @__PURE__ */ jsxs(AnimatePresence, { mode: "wait", children: [
          step === 1 && /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              className: "space-y-6 flex-grow",
              children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-secondary", children: "Who You Are" }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate/50 uppercase tracking-widest ml-1", children: "First Name" }),
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(User, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          value: firstName,
                          onChange: (e) => setFirstName(e.target.value),
                          className: "w-full pl-10 pr-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary shadow-inner focus:shadow-xl",
                          placeholder: "Jane"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate/50 uppercase tracking-widest ml-1", children: "Last Name" }),
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(User, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          value: lastName,
                          onChange: (e) => setLastName(e.target.value),
                          className: "w-full pl-10 pr-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary shadow-inner focus:shadow-xl",
                          placeholder: "Doe"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-1 md:col-span-2", children: [
                    /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate/50 uppercase tracking-widest ml-1", children: "Email Address" }),
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(Mail, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "email",
                          value: email,
                          onChange: (e) => setEmail(e.target.value),
                          className: "w-full pl-10 pr-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary shadow-inner focus:shadow-xl",
                          placeholder: "jane@example.com"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate/50 uppercase tracking-widest ml-1", children: "Phone Number" }),
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(Phone, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "tel",
                          value: phone,
                          onChange: (e) => setPhone(e.target.value),
                          className: "w-full pl-10 pr-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary shadow-inner focus:shadow-xl",
                          placeholder: "(555) 123-4567"
                        }
                      )
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                    /* @__PURE__ */ jsx("label", { className: "text-xs font-bold text-slate/50 uppercase tracking-widest ml-1", children: "Zip Code" }),
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(MapPin, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" }),
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "text",
                          value: zipCode,
                          onChange: (e) => setZipCode(e.target.value),
                          className: "w-full pl-10 pr-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary shadow-inner focus:shadow-xl",
                          placeholder: "12345"
                        }
                      )
                    ] })
                  ] })
                ] })
              ]
            },
            "step1"
          ),
          step === 2 && /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              className: "space-y-6 flex-grow",
              children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-secondary", children: "Your Home" }),
                /* @__PURE__ */ jsxs("div", { className: "mb-4 relative z-50", children: [
                  /* @__PURE__ */ jsxs("label", { className: "block text-sm font-bold text-slate/70 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-primary" }),
                    " Service Area"
                  ] }),
                  /* @__PURE__ */ jsx(
                    CustomSelect,
                    {
                      options: locations.map((l) => ({ id: l.id, title: l.name, icon: MapPin })),
                      value: selectedLocationId,
                      onChange: setSelectedLocationId,
                      placeholder: "Select your area...",
                      searchable: true
                    }
                  ),
                  !selectedLocationId && /* @__PURE__ */ jsx("p", { className: "text-xs text-orange-500 mt-2 font-medium ml-1", children: "Please select an area to proceed." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative z-0", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate/70 mb-2", children: "Approx. Square Footage" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx(Building2, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "number",
                        value: sqft,
                        onChange: (e) => setSqft(Number(e.target.value)),
                        className: "w-full pl-10 pr-12 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary shadow-inner focus:shadow-xl"
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "absolute right-4 top-1/2 -translate-y-1/2 text-slate/40 text-sm font-bold", children: "ft²" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 relative z-0", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate/70 mb-2", children: "Bedrooms" }),
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(
                        "select",
                        {
                          value: bedrooms,
                          onChange: (e) => setBedrooms(Number(e.target.value)),
                          className: "w-full px-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none font-medium text-secondary appearance-none shadow-inner transition-all",
                          children: [0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => /* @__PURE__ */ jsxs("option", { value: n, children: [
                            n,
                            " ",
                            n === 1 ? "Bedroom" : "Bedrooms"
                          ] }, n))
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate/40", children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-slate/70 mb-2", children: "Bathrooms" }),
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx(
                        "select",
                        {
                          value: bathrooms,
                          onChange: (e) => setBathrooms(Number(e.target.value)),
                          className: "w-full px-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none font-medium text-secondary appearance-none shadow-inner transition-all",
                          children: [0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => /* @__PURE__ */ jsxs("option", { value: n, children: [
                            n,
                            " ",
                            n === 1 ? "Bathroom" : "Bathrooms"
                          ] }, n))
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate/40", children: /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" }) })
                    ] })
                  ] })
                ] })
              ]
            },
            "step2"
          ),
          step === 3 && /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              className: "space-y-4 flex-grow",
              children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-secondary mb-2", children: "Select Service" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2.5", children: serviceTypes.map((type) => /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setServiceType(type.id),
                    className: `relative w-full p-3 rounded-xl border transition-all flex items-center gap-3 text-left group ${serviceType === type.id ? "border-primary/50 bg-primary/5 shadow-md shadow-primary/5 ring-1 ring-primary/20" : "border-slate/10 hover:border-primary/30 hover:shadow-sm hover:bg-slate/5"}`,
                    children: [
                      /* @__PURE__ */ jsx("div", { className: `w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${serviceType === type.id ? "bg-primary text-white shadow-sm" : "bg-white text-slate/40 border border-slate/10 group-hover:text-primary group-hover:border-primary/20"}`, children: /* @__PURE__ */ jsx(type.icon, { className: "w-4 h-4 md:w-5 md:h-5" }) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 pr-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx("span", { className: "block font-bold text-secondary text-sm md:text-base leading-tight truncate", children: type.title }),
                          type.popular && /* @__PURE__ */ jsx("span", { className: "text-[9px] font-bold bg-secondary text-white px-1.5 py-0.5 rounded uppercase tracking-wide shadow-sm shrink-0 hidden sm:inline-block", children: "Popular" })
                        ] }),
                        /* @__PURE__ */ jsx("span", { className: "text-[10px] md:text-xs text-slate-500 font-medium leading-tight block mt-0.5 truncate md:whitespace-normal group-hover:text-slate-600 transition-colors opacity-90", children: type.desc })
                      ] }),
                      type.popular && /* @__PURE__ */ jsx("div", { className: "absolute top-2 right-2 sm:hidden", children: /* @__PURE__ */ jsx("span", { className: "text-[8px] font-bold bg-secondary text-white px-1 py-0.5 rounded uppercase tracking-wide shadow-sm", children: "Popular" }) }),
                      /* @__PURE__ */ jsx("div", { className: `w-4 h-4 md:w-5 md:h-5 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${serviceType === type.id ? "border-primary bg-primary text-white" : "border-slate/10 group-hover:border-primary/20"}`, children: serviceType === type.id && /* @__PURE__ */ jsx(CheckCircle2, { className: "w-2.5 h-2.5 md:w-3 md:h-3" }) })
                    ]
                  },
                  type.id
                )) })
              ]
            },
            "step3"
          ),
          step === 4 && /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              className: "space-y-6 flex-grow",
              children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-secondary", children: "Optional Extras" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3 mb-6", children: addOnOptions.map((addon) => /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => toggleAddon(addon.id),
                    className: `p-3 rounded-xl text-sm font-medium border-2 transition-all flex flex-col items-center gap-2 text-center h-full justify-center ${selectedAddons.includes(addon.id) ? "border-primary bg-primary/5 text-primary shadow-sm ring-1 ring-primary/10" : "border-slate/10 text-slate/60 hover:border-primary/30 hover:bg-slate/5"}`,
                    children: [
                      /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-colors ${selectedAddons.includes(addon.id) ? "bg-primary text-white" : "bg-slate/10 text-slate/40"}`, children: selectedAddons.includes(addon.id) ? /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx("span", { className: "text-xl font-bold leading-none pb-0.5", children: "+" }) }),
                      /* @__PURE__ */ jsx("span", { className: "leading-tight font-bold", children: addon.label }),
                      /* @__PURE__ */ jsxs("span", { className: "text-xs opacity-60 font-bold bg-slate/10 px-2 py-0.5 rounded-full", children: [
                        "$",
                        addon.price
                      ] })
                    ]
                  },
                  addon.id
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-900 p-4 rounded-xl flex items-center justify-between text-white shadow-lg mt-auto", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 uppercase tracking-widest font-bold", children: "Estimated Total" }),
                    /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold tracking-tight", children: [
                      "$",
                      estimatedPrice
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-[10px] text-slate-400 font-medium text-right max-w-[120px] leading-tight", children: "Final price confirmed on-site based on condition." })
                ] })
              ]
            },
            "step4"
          ),
          step === 5 && /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -20 },
              className: "space-y-6 flex-grow",
              children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold text-secondary", children: "Schedule Service" }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
                    /* @__PURE__ */ jsxs("label", { className: "block text-sm font-bold text-slate/70 mb-2 flex items-center gap-2 self-start", children: [
                      /* @__PURE__ */ jsx(CalendarIcon, { className: "w-4 h-4 text-primary" }),
                      " Select Date"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "border border-slate/10 rounded-2xl p-2 bg-white shadow-sm inline-block", children: /* @__PURE__ */ jsx(
                      DayPicker,
                      {
                        mode: "single",
                        selected: date,
                        onSelect: setDate,
                        disabled: { before: /* @__PURE__ */ new Date() },
                        modifiersClassNames: {
                          selected: "bg-primary text-white"
                        },
                        styles: {
                          caption: { color: "#0F172A" },
                          head_cell: { color: "#64748B" }
                        }
                      }
                    ) }),
                    !date && /* @__PURE__ */ jsx("p", { className: "text-xs text-orange-500 mt-2 font-medium", children: "Please select a date." })
                  ] }),
                  date && /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      className: "flex flex-col items-center",
                      children: [
                        /* @__PURE__ */ jsxs("label", { className: "block text-sm font-bold text-slate/70 mb-2 flex items-center gap-2 self-start", children: [
                          /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-primary" }),
                          " Select Time"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 sm:grid-cols-5 gap-2 w-full", children: timeSlots.map((slot) => {
                          const isBooked = bookedSlots.includes(slot);
                          const isDisabled = isBooked || isLoadingAvailability;
                          return /* @__PURE__ */ jsx(
                            "button",
                            {
                              onClick: () => !isDisabled && setTime(slot),
                              disabled: isDisabled,
                              className: `
                                                                    py-3 px-2 rounded-xl text-sm font-bold border-2 transition-all 
                                                                    ${isBooked ? "bg-slate/5 text-slate/20 border-transparent cursor-not-allowed decoration-slate/20 line-through" : isLoadingAvailability ? "bg-slate/5 text-slate/30 border-transparent cursor-wait" : time === slot ? "bg-primary text-white border-primary shadow-md transform scale-105" : "bg-white border-slate/10 text-slate-600 hover:border-primary/30 hover:shadow-sm"}
                                                                `,
                              children: slot
                            },
                            slot
                          );
                        }) }),
                        isLoadingAvailability && /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-2 animate-pulse", children: "Checking availability..." }),
                        !time && date && !isLoadingAvailability && /* @__PURE__ */ jsx("p", { className: "text-xs text-orange-500 mt-2 font-medium", children: "Please select a time slot." })
                      ]
                    }
                  )
                ] })
              ]
            },
            "step5"
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 pt-6 border-t border-slate/10 flex justify-between items-center gap-4 relative z-20 shrink-0", children: [
          step > 1 ? /* @__PURE__ */ jsxs("button", { onClick: prevStep, className: "text-slate/40 hover:text-secondary font-bold text-sm flex items-center gap-2 transition-colors px-4 py-2", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4" }),
            " Back"
          ] }) : /* @__PURE__ */ jsx("div", { className: "w-20" }),
          step < 5 ? /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: (e) => {
                e.preventDefault();
                nextStep();
              },
              className: `bg-secondary text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-black transition-all flex items-center gap-2 text-sm justify-center flex-1 sm:flex-initial sm:w-auto ${!validateStep() ? "opacity-50 cursor-not-allowed" : ""}`,
              disabled: !validateStep(),
              children: [
                "Next Step ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
              ]
            }
          ) : /* @__PURE__ */ jsx("button", { onClick: handleSubmit, className: "bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-primary/40 hover:bg-primary-dark transition-all flex items-center gap-2 text-sm justify-center flex-1 sm:flex-initial sm:w-auto cursor-pointer", disabled: isSubmitting, children: isSubmitting ? "Processing..." : "Book Now" })
        ] })
      ] })
    ] })
  ] });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Home Cleaning & Co | Best Cleaning Service in St. Petersburg, FL" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "StickyBook", $$StickyBook, {})} ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Areas", $$Areas, {})} ${renderComponent($$result2, "FAQ", $$FAQ, {})} ${renderComponent($$result2, "Section", $$Section, { "id": "quote", "class": "bg-background-mint/30 relative overflow-hidden py-24" }, { "default": ($$result3) => renderTemplate`  <div class="absolute inset-0 opacity-10 pointer-events-none" style="background-image: radial-gradient(#A0E8AF 2px, transparent 2px); background-size: 32px 32px;"></div> <div class="flex flex-col items-center relative z-10 max-w-4xl mx-auto text-center"> <span class="inline-flex items-center gap-1.5 text-text-600 font-semibold tracking-wider uppercase text-xs bg-surface border border-border-light px-4 py-1.5 rounded-full mb-4">Get Started</span> <h2 class="text-4xl md:text-5xl font-bold text-text-900 mb-6 font-sans leading-tight">
Ready for a <span class="text-primary">Spotless Home?</span> </h2> <p class="text-text-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
Tell us a bit about your home and your cleaning needs. We’ll
					get back to you with a personalized quote within 24 hours.
					No hidden fees, just honest pricing.
</p> <ul class="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-text-700 font-medium"> <li class="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-primary/20"> <span class="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"> ${renderComponent($$result3, "Check", Check, { "className": "w-3 h-3" })} </span>
Eco-friendly products
</li> <li class="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-primary/20"> <span class="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"> ${renderComponent($$result3, "Check", Check, { "className": "w-3 h-3" })} </span>
Bonded & insured
</li> <li class="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-primary/20"> <span class="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"> ${renderComponent($$result3, "Check", Check, { "className": "w-3 h-3" })} </span>
Satisfaction Guarantee
</li> </ul> <div class="w-full max-w-xl mx-auto text-left"> ${renderComponent($$result3, "BookingForm", BookingForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/k-a-v/Documents/github/r_pronto/src/components/BookingForm", "client:component-export": "default" })} </div> </div> ` })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment$1, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">\n			{\n				"@context": "https://schema.org",\n				"@type": "HomeAndConstructionBusiness",\n				"name": "Home Cleaning & Co",\n				"image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",\n				"@id": "https://homecleaningco.com",\n				"url": "https://homecleaningco.com",\n				"telephone": "+15550000000",\n				"address": {\n					"@type": "PostalAddress",\n					"streetAddress": "123 Main St",\n					"addressLocality": "St. Petersburg",\n					"addressRegion": "FL",\n					"postalCode": "33701",\n					"addressCountry": "US"\n				},\n				"geo": {\n					"@type": "GeoCoordinates",\n					"latitude": 27.7676,\n					"longitude": -82.6403\n				},\n				"openingHoursSpecification": {\n					"@type": "OpeningHoursSpecification",\n					"dayOfWeek": [\n						"Monday",\n						"Tuesday",\n						"Wednesday",\n						"Thursday",\n						"Friday"\n					],\n					"opens": "08:00",\n					"closes": "18:00"\n				},\n				"priceRange": "$$"\n			}\n		<\/script> ']))) })}` })} ${renderScript($$result, "/Users/k-a-v/Documents/github/r_pronto/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/k-a-v/Documents/github/r_pronto/src/pages/index.astro", void 0);

const $$file = "/Users/k-a-v/Documents/github/r_pronto/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
