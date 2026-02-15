import React, { useState, useEffect } from 'react';
import { Calculator, Building2, Home, ArrowRight, ArrowLeft, Sparkles, Box, Key, Hammer, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const serviceTypes = [
    {
        id: 'regular',
        title: 'Regular / Maintenance',
        desc: 'Consistent clean for fresh homes.',
        icon: Home,
        multiplier: 1
    },
    {
        id: 'deep',
        title: 'Deep Cleaning',
        desc: 'Detailed clean for buildup & corners.',
        icon: Sparkles,
        multiplier: 1.5,
        popular: true
    },
    {
        id: 'move',
        title: 'Move-In / Move-Out',
        desc: 'Empty-home focus for transitions.',
        icon: Box,
        multiplier: 1.8
    },
    {
        id: 'airbnb',
        title: 'Airbnb / Rentals',
        desc: 'Reliable turnovers for 5-star stays.',
        icon: Key,
        multiplier: 1.2
    },
    {
        id: 'post-construction',
        title: 'Post-Construction',
        desc: 'Dust & debris cleanup after reno.',
        icon: Hammer,
        multiplier: 2.0
    }
];

const addOnOptions = [
    { id: 'fridge', label: 'Inside Fridge', price: 35 },
    { id: 'oven', label: 'Inside Oven', price: 35 },
    { id: 'windows', label: 'Interior Windows', price: 45 },
    { id: 'laundry', label: 'Laundry', price: 25 },
    { id: 'pets', label: 'Pet Hair Focus', price: 30 }
];

export default function BookingForm() {
    const [step, setStep] = useState(1);
    const [serviceType, setServiceType] = useState('regular'); // Default to regular
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [sqft, setSqft] = useState(1000);
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
    const [estimatedPrice, setEstimatedPrice] = useState(0);

    useEffect(() => {
        calculatePrice();
    }, [serviceType, bedrooms, bathrooms, sqft, selectedAddons]);

    const calculatePrice = () => {
        // Base Calculation
        let base = 110;
        let bedPrice = (bedrooms - 1) * 25; // First bed included in base roughly
        let bathPrice = (bathrooms - 1) * 35;
        let sqftPrice = (sqft - 1000) * 0.05; // Base covers up to 1000sqft
        if (sqftPrice < 0) sqftPrice = 0;

        let subtotal = base + bedPrice + bathPrice + sqftPrice;

        // Service Multiplier
        const service = serviceTypes.find(s => s.id === serviceType);
        if (service) {
            subtotal *= service.multiplier;
        }

        // Add-ons
        let addonsTotal = 0;
        selectedAddons.forEach(id => {
            const addon = addOnOptions.find(a => a.id === id);
            if (addon) addonsTotal += addon.price;
        });

        const total = Math.round(subtotal + addonsTotal);
        setEstimatedPrice(total < 90 ? 90 : total); // Minimum $90
    };

    const toggleAddon = (id: string) => {
        if (selectedAddons.includes(id)) {
            setSelectedAddons(selectedAddons.filter(item => item !== id));
        } else {
            setSelectedAddons([...selectedAddons, id]);
        }
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Quote Request Sent! Estimated: $${estimatedPrice}. We'll contact you shortly.`);
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full border border-slate/10 font-sans">
            {/* Steps Indicator */}
            <div className="bg-mist px-6 py-4 border-b border-slate/10 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate/40">
                <span className={step >= 1 ? "text-primary transition-colors" : ""}>1. Service</span>
                <span className={step >= 2 ? "text-primary transition-colors" : ""}>2. Details</span>
                <span className={step >= 3 ? "text-primary transition-colors" : ""}>3. Estimate</span>
            </div>

            <div className="p-6 md:p-8 flex-grow flex flex-col">
                <AnimatePresence mode="wait">
                    {/* STEP 1: SERVICE TYPE */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4 flex-grow"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2">What kind of clean?</h3>
                            <div className="flex flex-col gap-3">
                                {serviceTypes.map((type) => (
                                    <button
                                        key={type.id}
                                        onClick={() => setServiceType(type.id)}
                                        className={`relative p-4 rounded-xl border-2 text-left transition-all hover:border-primary/30 flex items-start gap-4 ${serviceType === type.id ? 'border-primary bg-mist ring-1 ring-primary/20' : 'border-slate/10'}`}
                                    >
                                        <div className={`p-2 rounded-lg ${serviceType === type.id ? 'bg-primary/10 text-primary' : 'bg-slate/5 text-slate/50'}`}>
                                            <type.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="block font-bold text-secondary text-sm md:text-base">{type.title}</span>
                                            <span className="text-xs md:text-sm text-slate/60 leading-tight block mt-1">{type.desc}</span>
                                        </div>
                                        {type.popular && (
                                            <span className="absolute top-3 right-3 text-[10px] font-bold bg-secondary text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                                                Popular
                                            </span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: DETAILS */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6 flex-grow"
                        >
                            <h3 className="text-xl md:text-2xl font-bold text-secondary">Property Details</h3>

                            {/* Sqft Input */}
                            <div>
                                <label className="block text-sm font-bold text-slate/70 mb-2">Approx. Square Imagery</label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={sqft}
                                        onChange={(e) => setSqft(Number(e.target.value))}
                                        className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-secondary"
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate/40 text-sm font-bold">ft²</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-slate/70 mb-2">Bedrooms</label>
                                    <select
                                        value={bedrooms}
                                        onChange={(e) => setBedrooms(Number(e.target.value))}
                                        className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:border-primary outline-none bg-white font-medium text-secondary"
                                    >
                                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate/70 mb-2">Bathrooms</label>
                                    <select
                                        value={bathrooms}
                                        onChange={(e) => setBathrooms(Number(e.target.value))}
                                        className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:border-primary outline-none bg-white font-medium text-secondary"
                                    >
                                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate/70 mb-3">Optional Add-ons</label>
                                <div className="flex flex-wrap gap-2">
                                    {addOnOptions.map(addon => (
                                        <button
                                            key={addon.id}
                                            onClick={() => toggleAddon(addon.id)}
                                            className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all flex items-center gap-2 ${selectedAddons.includes(addon.id) ? 'border-primary bg-primary/5 text-primary' : 'border-slate/20 text-slate/60 hover:border-primary/30'}`}
                                        >
                                            {selectedAddons.includes(addon.id) && <CheckCircle2 className="w-3.5 h-3.5" />}
                                            {addon.label} <span className="text-xs opacity-60 ml-0.5">(+${addon.price})</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: ESTIMATE */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-6 flex-grow text-center"
                        >
                            <div className="w-14 h-14 bg-mist rounded-full flex items-center justify-center mx-auto mb-2 border border-primary/10">
                                <Calculator className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary">Your Estimate</h3>

                            <div className="bg-mist p-6 rounded-2xl border border-secondary/5 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/40 to-primary"></div>
                                <p className="text-secondary/50 mb-1 uppercase text-[10px] tracking-widest font-bold">Estimated Total</p>
                                <p className="text-5xl font-bold text-secondary tracking-tight">${estimatedPrice}</p>
                                <p className="text-xs text-secondary/40 mt-2 font-medium">Final price confirmed on-site.</p>
                            </div>

                            <div className="space-y-3 text-left">
                                <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" required />
                                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" required />
                                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-slate/20 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm" required />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="mt-8 flex justify-between items-center pt-6 border-t border-slate/10 gap-8">
                    {step > 1 ? (
                        <button onClick={prevStep} className="text-slate/40 hover:text-secondary font-bold text-sm flex items-center gap-2 transition-colors whitespace-nowrap">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                    ) : (
                        <div></div>
                    )}

                    {step < 3 ? (
                        <button onClick={nextStep} className="bg-secondary text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-black transition-all flex items-center gap-2 text-sm justify-center flex-1 sm:flex-initial sm:w-auto">
                            Next Step <ArrowRight className="w-4 h-4" />
                        </button>
                    ) : (
                        <button onClick={handleSubmit} className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-primary/40 hover:bg-primary-dark transition-all flex items-center gap-2 text-sm justify-center flex-1 sm:flex-initial sm:w-auto">
                            Book Now
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
