import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, Clock, CheckCircle2, User, Mail, Phone, MapPin, Building2, ArrowRight, ArrowLeft, ChevronDown, Check, ChevronUp, Search, Calculator, Home, Sparkles, Box, Key, Hammer, Repeat } from 'lucide-react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

// Custom Select Component with Search & Sort
const CustomSelect = ({ options, value, onChange, placeholder, className = "", searchable = false }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Sort options alphabetically by title
    const sortedOptions = useMemo(() => {
        return [...options].sort((a: any, b: any) => a.title.localeCompare(b.title));
    }, [options]);

    // Filter options based on search query
    const filteredOptions = useMemo(() => {
        if (!searchQuery) return sortedOptions;
        return sortedOptions.filter((option: any) =>
            option.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [sortedOptions, searchQuery]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Auto-focus removed to prevent scroll jumping on mobile
    useEffect(() => {
        if (!isOpen) {
            setSearchQuery(""); // Reset search when closed
        }
    }, [isOpen]);

    const selectedOption = options.find((o: any) => o.id === value);

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full pl-4 pr-10 py-3 rounded-xl border flex items-center gap-3 transition-all text-left ${isOpen ? 'border-primary ring-4 ring-primary/10 bg-white shadow-xl' : 'bg-slate/5 border-transparent hover:bg-slate/10'}`}
            >
                {selectedOption ? (
                    <>
                        <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            {selectedOption.icon && <selectedOption.icon className="w-4 h-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                            <span className="block font-bold text-secondary text-sm leading-tight">{selectedOption.title}</span>
                            {selectedOption.desc && <span className="block text-xs text-slate-500 leading-tight mt-0.5">{selectedOption.desc}</span>}
                        </div>
                    </>
                ) : (
                    <span className="text-slate-400 font-medium px-2">{placeholder}</span>
                )}

                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate/40">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border border-slate/10 overflow-hidden"
                    >
                        {/* Search Input - Clean Premium Style */}
                        {searchable && (
                            <div className="p-3 border-b border-slate-100 bg-white sticky top-0 z-10 w-full">
                                <div className="relative group">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder="Search location..."
                                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary/30 focus:ring-4 focus:ring-primary/5 outline-none text-sm font-medium transition-all placeholder:text-slate-400"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate/20 scrollbar-track-transparent overscroll-contain">
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option: any) => (
                                    <button
                                        type="button"
                                        key={option.id}
                                        onClick={() => {
                                            onChange(option.id);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full p-3 flex items-center gap-3 hover:bg-slate-50 transition-colors border-b border-slate/5 last:border-0 text-left group ${value === option.id ? 'bg-primary/5' : ''}`}
                                    >
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${value === option.id ? 'bg-primary text-white shadow-md shadow-primary/20' : 'bg-slate-100 text-slate-400 group-hover:bg-white group-hover:text-primary group-hover:shadow-sm'}`}>
                                            {option.icon && <option.icon className="w-4 h-4" />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <span className={`font-bold text-sm leading-tight truncate ${value === option.id ? 'text-primary' : 'text-secondary'}`}>{option.title}</span>
                                                {option.popular && <span className="text-[10px] bg-secondary text-white px-1.5 py-0.5 rounded-full uppercase font-bold shrink-0">Popular</span>}
                                            </div>
                                            {option.desc && <span className="block text-xs text-slate-500 leading-tight mt-0.5 truncate group-hover:text-slate-600">{option.desc}</span>}
                                        </div>
                                        {value === option.id && <Check className="w-4 h-4 text-primary shrink-0" />}
                                    </button>
                                ))
                            ) : (
                                <div className="p-8 text-center">
                                    <p className="text-sm text-slate-500 font-medium">No locations found.</p>
                                    <p className="text-xs text-slate-400 mt-1">Try a different search term.</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const frequencyOptions = [
    { id: 'one_time', title: 'One-Time', desc: 'Standard single clean', discount: 0 },
    { id: 'weekly', title: 'Weekly', desc: 'Save 20%', discount: 20 },
    { id: 'bi_weekly', title: 'Bi-Weekly', desc: 'Save 15%', discount: 15 },
    { id: 'monthly', title: 'Monthly', desc: 'Save 10%', discount: 10 }
];

const timeSlots = [
    "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00"
];

export default function BookingForm() {
    const formTopRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(1);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form Data State
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [zipCode, setZipCode] = useState('');

    // Backend Data
    const [locations, setLocations] = useState<{ id: string; name: string }[]>([]);
    const [services, setServices] = useState<any[]>([]);
    const [addOns, setAddOns] = useState<any[]>([]);

    // Selections
    const [selectedLocationId, setSelectedLocationId] = useState('');
    const [serviceTypeId, setServiceTypeId] = useState('');
    const [frequency, setFrequency] = useState('one_time');
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [sqft, setSqft] = useState(1000);
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    // Date & Time State
    const [date, setDate] = useState<Date>();
    const [time, setTime] = useState<string>('');

    // Availability State
    const [bookedSlots, setBookedSlots] = useState<string[]>([]);
    const [isLoadingAvailability, setIsLoadingAvailability] = useState(false);

    // Pricing
    const [estimatedPrice, setEstimatedPrice] = useState(0);
    const [priceBreakdown, setPriceBreakdown] = useState<any>(null);
    const [isCalculatingPrice, setIsCalculatingPrice] = useState(false);

    // Scroll to top on success
    useEffect(() => {
        if (isSuccess && formTopRef.current) {
            formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isSuccess]);

    // Fetch Locations on Mount
    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const response = await fetch('/api/places');
                const data = await response.json();
                if (data.places) {
                    setLocations(data.places);
                }
            } catch (error) {
                console.error('Failed to fetch locations:', error);
            }
        };
        fetchLocations();
    }, []);

    // Fetch Services & Add-ons on Mount
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('/api/services');
                const data = await response.json();

                // Process services to add icons/descriptions if needed
                if (data.services) {
                    const iconMap: Record<string, any> = {
                        'Regular': Home,
                        'Deep': Sparkles,
                        'Move': Box,
                        'Construction': Hammer,
                        'Airbnb': Key
                    };

                    const processedServices = data.services.map((s: any) => {
                        // Find matching icon
                        let Icon = Home;
                        for (const key in iconMap) {
                            if (s.name.includes(key)) Icon = iconMap[key];
                        }

                        return {
                            id: s.id,
                            title: s.name,
                            desc: s.description || 'Professional cleaning service',
                            icon: Icon,
                            popular: s.name.includes("Deep") // Hint
                        };
                    }).sort((a: any, b: any) => {
                        // Sort logic: Regular first, then Deep, etc.
                        if (a.title.includes("Regular")) return -1;
                        if (b.title.includes("Regular")) return 1;
                        return 0;
                    });

                    setServices(processedServices);
                    // Set default
                    if (processedServices.length > 0 && !serviceTypeId) {
                        setServiceTypeId(processedServices[0].id);
                    }
                }

                if (data.addOns) {
                    setAddOns(data.addOns.map((a: any) => ({
                        id: a.id,
                        label: a.name,
                        price: a.basePrice,
                        desc: a.description,
                        unitLabel: a.unitLabel
                    })));
                }

            } catch (error) {
                console.error('Failed to fetch services:', error);
            }
        };
        fetchServices();
    }, []);

    // Fetch Availability when Date or Location Changes
    useEffect(() => {
        const fetchAvailability = async () => {
            if (!date || !selectedLocationId) return;

            setIsLoadingAvailability(true);
            setBookedSlots([]); // Reset while fetching
            setTime(''); // Reset selected time on date/location change

            try {
                const formattedDate = format(date, 'yyyy-MM-dd');
                const response = await fetch(`/api/availability?date=${formattedDate}&locationId=${selectedLocationId}`);
                const data = await response.json();

                if (data.bookedTimes) {
                    setBookedSlots(data.bookedTimes);
                }
            } catch (error) {
                console.error('Failed to fetch availability:', error);
            } finally {
                setIsLoadingAvailability(false);
            }
        };

        fetchAvailability();
    }, [date, selectedLocationId]);

    // Real-time Pricing Calculation
    useEffect(() => {
        // Debounce calculation
        const timer = setTimeout(() => {
            calculatePrice();
        }, 500);
        return () => clearTimeout(timer);
    }, [serviceTypeId, bedrooms, bathrooms, sqft, frequency, selectedAddons, selectedLocationId]);

    const calculatePrice = async () => {
        if (!serviceTypeId) return;

        setIsCalculatingPrice(true);
        try {
            const payload = {
                serviceId: serviceTypeId,
                locationId: selectedLocationId || undefined, // Send if available
                bedrooms,
                bathrooms,
                sqft,
                frequency,
                addOnIds: selectedAddons
            };

            const response = await fetch('/api/pricing/calculate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const data = await response.json();
            if (data.finalPrice) {
                setEstimatedPrice(data.finalPrice);
                setPriceBreakdown(data);
            }
        } catch (error) {
            console.error("Pricing calculation failed:", error);
        } finally {
            setIsCalculatingPrice(false);
        }
    };

    const toggleAddon = (id: string) => {
        if (selectedAddons.includes(id)) {
            setSelectedAddons(selectedAddons.filter(item => item !== id));
        } else {
            setSelectedAddons([...selectedAddons, id]);
        }
    };

    const validateStep = () => {
        if (step === 1) return firstName && lastName && email && phone && zipCode;
        if (step === 2) return selectedLocationId && bedrooms && bathrooms;
        if (step === 3) return !!serviceTypeId && !!frequency;
        if (step === 4) return true; // Extras are optional
        if (step === 5) return date && time;
        return true;
    };

    const nextStep = () => {
        if (validateStep()) {
            setSubmitError(null);
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setSubmitError(null);
        setStep(step - 1);
    };

    const [bookingId, setBookingId] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateStep() || isSubmitting) return;

        setSubmitError(null);
        setIsSubmitting(true);

        const bookingData = {
            firstName,
            lastName,
            email,
            phone,
            zipCode,
            serviceId: serviceTypeId, // UUID
            serviceType: serviceTypeId, // Legacy shim? No backend expects serviceId
            placeId: selectedLocationId, // UUID

            bedrooms,
            bathrooms,
            sqft,
            frequency,
            addons: selectedAddons, // UUIDs

            date: date ? format(date, 'yyyy-MM-dd') : null,
            time,
            price: estimatedPrice,
        };

        try {
            const response = await fetch('/api/create-booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bookingData),
            });

            const result = await response.json();

            if (response.ok) {
                setBookingId(result.id);
                setIsSuccess(true);
                setSubmitError(null);
            } else {
                setSubmitError(result.error || 'Failed to submit booking');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitError('An unexpected error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Custom Styles for DayPicker to match theme directly
    const css = `
        .rdp { --rdp-cell-size: 45px; --rdp-accent-color: #2F9E87; --rdp-background-color: #eaf6f4; margin: 0; }
        .rdp-button { border-radius: 100%; transition: all 0.2s; }
        .rdp-button:not([disabled]) { background-color: #F8FAFC; color: #1E293B; }
        .rdp-button:hover:not([disabled]):not(.rdp-day_selected) { background-color: #E2E8F0; color: #2F9E87; font-weight: bold; }
        .rdp-day_selected { background-color: #2F9E87 !important; color: white !important; font-weight: bold; box-shadow: 0 4px 12px rgba(47, 158, 135, 0.3); }
        .rdp-day_today { font-weight: bold; color: #2F9E87; border: 2px solid #2F9E87; }
        .rdp-button[disabled] { opacity: 0.3; color: #94A3B8; background-color: transparent; }
    `;

    return (
        <div ref={formTopRef} className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-full border border-secondary/5 font-sans relative min-h-[600px]">
            <style>{css}</style>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20 opacity-50"></div>

            {isSuccess ? (
                <div className="flex-grow flex flex-col items-center justify-center text-center p-6 h-full animate-in fade-in zoom-in duration-500">
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', duration: 0.8 }}
                        className="relative mb-4"
                    >
                        <div className="text-6xl md:text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary/10 select-none pointer-events-none whitespace-nowrap" style={{ fontFamily: '"Permanent Marker", cursive' }}>
                            Yay!
                        </div>

                        <div className="relative z-10 bg-green-50 rounded-full p-4 inline-block mx-auto shadow-sm">
                            <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative z-10 w-full max-w-sm"
                    >
                        <h2 className="text-2xl md:text-3xl text-secondary mb-2 transform -rotate-2 leading-tight" style={{ fontFamily: '"Permanent Marker", cursive' }}>
                            Booking Confirmed!
                        </h2>
                        <p className="text-slate-500 text-sm mb-6 leading-relaxed font-sans">
                            Thanks <span className="font-bold text-secondary">{firstName}</span>!
                            <br />
                            We've received your request for:
                            <br />
                            <span className="font-bold text-base text-primary block my-1">
                                {services.find(t => t.id === serviceTypeId)?.title || 'Service'}
                            </span>
                            <span className="inline-block mt-1 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 text-xs md:text-sm">
                                <span className="font-bold text-secondary">{date ? format(date, 'MMM do') : ''}</span>
                                <span className="mx-1 text-slate-400">at</span>
                                <span className="font-bold text-secondary">{time}</span>
                            </span>
                        </p>

                        <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 mb-6 mx-auto w-full">
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-0.5">Booking ID</p>
                            <p className="font-mono text-sm text-secondary select-all break-all">{bookingId || 'PENDING'}</p>
                        </div>

                        <button
                            onClick={() => window.location.reload()}
                            className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold shadow-lg hover:shadow-primary/40 hover:bg-primary-dark transition-all text-sm transform active:scale-95 w-full"
                        >
                            Book Another Service
                        </button>
                    </motion.div>
                </div>
            ) : (
                <>
                    {/* Steps Indicator */}
                    <div className="bg-white/50 backdrop-blur-sm px-4 md:px-6 py-4 border-b border-slate/5 flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate/40">
                        {/* Simplified stepper for brevity in this replace block, can keep original style */}
                        {/* Step 1: Contact */}
                        <span className={step >= 1 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5"}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 1 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-slate/10 text-slate/40'}`}>1</span>
                            <span>Contact</span>
                        </span>

                        {/* Separator */}
                        <div className={`h-px w-full mx-2 hidden md:block ${step >= 2 ? 'bg-primary/20' : 'bg-slate/10'}`}></div>

                        {/* Step 2: Home */}
                        <span className={step >= 2 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5"}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 2 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-slate/10 text-slate/40'}`}>2</span>
                            <span>Home</span>
                        </span>

                        {/* Separator */}
                        <div className={`h-px w-full mx-2 hidden md:block ${step >= 3 ? 'bg-primary/20' : 'bg-slate/10'}`}></div>

                        {/* Step 3: Service */}
                        <span className={step >= 3 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5"}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 3 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-slate/10 text-slate/40'}`}>3</span>
                            <span>Service</span>
                        </span>

                        {/* Separator */}
                        <div className={`h-px w-full mx-2 hidden md:block ${step >= 4 ? 'bg-primary/20' : 'bg-slate/10'}`}></div>

                        {/* Step 4: Extras */}
                        <span className={step >= 4 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5"}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 4 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-slate/10 text-slate/40'}`}>4</span>
                            <span>Extras</span>
                        </span>

                        {/* Separator */}
                        <div className={`h-px w-full mx-2 hidden md:block ${step >= 5 ? 'bg-primary/20' : 'bg-slate/10'}`}></div>

                        {/* Step 5: Time */}
                        <span className={step >= 5 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5"}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 5 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-slate/10 text-slate/40'}`}>5</span>
                            <span>Time</span>
                        </span>
                    </div>

                    <div className="p-6 md:p-8 flex-grow flex flex-col overflow-y-auto">
                        <AnimatePresence mode="wait">
                            {/* STEP 1: CONTACT INFO */}
                            {step === 1 && (
                                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold text-secondary">Who You Are</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* Simplified Inputs */}
                                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="w-full p-3 rounded-xl bg-slate/5 border-none focus:ring-2 focus:ring-primary/20" />
                                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="w-full p-3 rounded-xl bg-slate/5 border-none focus:ring-2 focus:ring-primary/20" />
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded-xl bg-slate/5 border-none focus:ring-2 focus:ring-primary/20 md:col-span-2" />
                                        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full p-3 rounded-xl bg-slate/5 border-none focus:ring-2 focus:ring-primary/20" />
                                        <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} placeholder="Zip Code" className="w-full p-3 rounded-xl bg-slate/5 border-none focus:ring-2 focus:ring-primary/20" />
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 2: HOME DETAILS */}
                            {step === 2 && (
                                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold text-secondary">Your Home</h3>
                                    <div className="mb-4 relative z-50">
                                        <label className="block text-sm font-bold text-slate/70 mb-3 flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-primary" /> Service Area
                                        </label>
                                        <CustomSelect
                                            options={locations.map(l => ({ id: l.id, title: l.name, icon: MapPin }))}
                                            value={selectedLocationId}
                                            onChange={setSelectedLocationId}
                                            placeholder="Select your area..."
                                            searchable={true}
                                        />
                                    </div>
                                    <div className="relative z-0">
                                        <label className="block text-sm font-bold text-slate/70 mb-2">Approx. Square Footage</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" />
                                            <input type="number" value={sqft} onChange={(e) => setSqft(Number(e.target.value))} className="w-full pl-10 pr-12 py-3 rounded-xl bg-slate/5 border-none focus:ring-2 focus:ring-primary/20" />
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate/40 text-sm font-bold">ft²</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 relative z-0">
                                        <div>
                                            <label className="block text-sm font-bold text-slate/70 mb-2">Bedrooms</label>
                                            <select value={bedrooms} onChange={(e) => setBedrooms(Number(e.target.value))} className="w-full p-3 rounded-xl bg-slate/5 border-none">
                                                {[0, 1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} Bed</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate/70 mb-2">Bathrooms</label>
                                            <select value={bathrooms} onChange={(e) => setBathrooms(Number(e.target.value))} className="w-full p-3 rounded-xl bg-slate/5 border-none">
                                                {[0, 1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} Bath</option>)}
                                            </select>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 3: SERVICE TYPE & FREQUENCY */}
                            {step === 3 && (
                                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4 flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2">Select Service</h3>

                                    {/* Service List from API */}
                                    <div className="flex flex-col gap-2.5">
                                        {services.map((type: any) => (
                                            <button
                                                key={type.id}
                                                onClick={() => setServiceTypeId(type.id)}
                                                className={`relative w-full p-3 rounded-xl border transition-all flex items-center gap-3 text-left group ${serviceTypeId === type.id ? 'border-primary/50 bg-primary/5 shadow-md shadow-primary/5 ring-1 ring-primary/20' : 'border-slate/10 hover:border-primary/30 hover:shadow-sm hover:bg-slate/5'}`}
                                            >
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${serviceTypeId === type.id ? 'bg-primary text-white shadow-sm' : 'bg-white text-slate/40 border border-slate/10 group-hover:text-primary group-hover:border-primary/20'}`}>
                                                    {type.icon && <type.icon className="w-4 h-4" />}
                                                </div>
                                                <div className="flex-1 min-w-0 pr-6">
                                                    <div className="flex items-center gap-2">
                                                        <span className="block font-bold text-secondary text-sm leading-tight truncate">{type.title}</span>
                                                        {type.popular && <span className="text-[9px] font-bold bg-secondary text-white px-1.5 py-0.5 rounded uppercase tracking-wide hidden sm:inline-block">Popular</span>}
                                                    </div>
                                                    <span className="text-[10px] text-slate-500 font-medium leading-tight block mt-0.5 truncate">{type.desc}</span>
                                                </div>
                                                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${serviceTypeId === type.id ? 'border-primary bg-primary text-white' : 'border-slate/10'}`}>
                                                    {serviceTypeId === type.id && <CheckCircle2 className="w-2.5 h-2.5" />}
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                    {/* Frequency Selector */}
                                    <h3 className="text-lg font-bold text-secondary mt-4 mb-2">How Often?</h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        {frequencyOptions.map((opt) => (
                                            <button
                                                key={opt.id}
                                                onClick={() => setFrequency(opt.id)}
                                                className={`p-3 rounded-xl border transition-all text-left flex flex-col justify-center ${frequency === opt.id ? 'border-primary bg-primary/5 shadow-sm' : 'border-slate/10 hover:bg-slate/5'}`}
                                            >
                                                <div className="flex justify-between items-center w-full">
                                                    <span className={`font-bold text-sm ${frequency === opt.id ? 'text-primary' : 'text-secondary'}`}>{opt.title}</span>
                                                    {opt.discount > 0 && <span className="text-[10px] font-bold bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">-{opt.discount}%</span>}
                                                </div>
                                                <span className="text-[10px] text-slate-500 mt-1">{opt.desc}</span>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 4: EXTRAS (Dynamic) */}
                            {step === 4 && (
                                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold text-secondary">Optional Extras</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                                        {addOns.map((addon: any) => (
                                            <button
                                                key={addon.id}
                                                onClick={() => toggleAddon(addon.id)}
                                                className={`relative p-1.5 rounded-xl border transition-all flex items-center gap-2 text-left group ${selectedAddons.includes(addon.id) ? 'border-primary/50 bg-primary/5 shadow-sm ring-1 ring-primary/10' : 'border-slate/10 hover:border-primary/30 hover:bg-slate/5'}`}
                                            >
                                                <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors ${selectedAddons.includes(addon.id) ? 'bg-primary text-white shadow-sm' : 'bg-white text-slate/40 border border-slate/10 group-hover:text-primary group-hover:border-primary/20'}`}>
                                                    {selectedAddons.includes(addon.id) ? <Check className="w-3.5 h-3.5" /> : <span className="text-base font-bold leading-none pb-0.5">+</span>}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex justify-between items-start gap-1">
                                                        <span className="block font-bold text-secondary text-[10px] leading-tight flex-1">{addon.label}</span>
                                                        <div className="text-right shrink-0">
                                                            <span className="text-[10px] font-bold text-primary">${addon.price}</span>
                                                            {addon.unitLabel && <span className="text-[7px] text-slate-400 block -mt-0.5 leading-none">{addon.unitLabel}</span>}
                                                        </div>
                                                    </div>
                                                    {addon.desc && <span className="text-[8px] text-slate-500 font-medium leading-tight block mt-0.5 whitespace-normal opacity-70 group-hover:opacity-100 transition-opacity">{addon.desc}</span>}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                    <div className="bg-slate-900 p-4 rounded-xl flex items-center justify-between text-white shadow-lg mt-auto">
                                        <div>
                                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Estimated Total</p>
                                            <div className="flex items-center gap-2">
                                                {isCalculatingPrice ? (
                                                    <span className="animate-pulse text-lg">Calculating...</span>
                                                ) : (
                                                    <p className="text-2xl font-bold tracking-tight">${estimatedPrice}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 5: SCHEDULE */}
                            {step === 5 && (
                                <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6 flex-grow">
                                    <h3 className="text-xl md:text-2xl font-bold text-secondary">Schedule Service</h3>
                                    <div className="flex flex-col items-center">
                                        <div className="border border-slate/10 rounded-2xl p-2 bg-white shadow-sm inline-block">
                                            <DayPicker mode="single" selected={date} onSelect={setDate} disabled={{ before: new Date() }} modifiersClassNames={{ selected: 'bg-primary text-white' }} />
                                        </div>
                                    </div>
                                    {date && (
                                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 w-full">
                                            {timeSlots.map(slot => {
                                                const isBooked = bookedSlots.includes(slot);
                                                return (
                                                    <button
                                                        key={slot}
                                                        onClick={() => !isBooked && setTime(slot)}
                                                        disabled={isBooked}
                                                        className={`py-2 rounded-xl text-sm font-bold border transition-all duration-200 
                                                            ${isBooked
                                                                ? 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed opacity-60'
                                                                : time === slot
                                                                    ? 'bg-primary text-white border-primary shadow-md shadow-primary/20 transform scale-105'
                                                                    : 'bg-white text-secondary border-slate-200 hover:border-primary/50 hover:bg-primary/5'
                                                            }`}
                                                    >
                                                        {slot}
                                                        {isBooked && <span className="block text-[8px] uppercase tracking-tighter opacity-50 -mt-0.5">Taken</span>}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Error Message */}
                        <AnimatePresence>
                            {submitError && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                    className="mt-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-between gap-3 shadow-sm"
                                >
                                    <div className="flex items-center gap-3 text-red-600">
                                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                                            <Calculator className="w-4 h-4" /> {/* Using Calculator as a placeholder for a generic warning/error feel if Alert isn't imported, but CheckCircle2 rotated is also an option */}
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest font-black opacity-50 leading-none mb-1">Booking Failed</p>
                                            <p className="text-sm font-bold leading-tight">{submitError}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => { setSubmitError(null); handleSubmit({ preventDefault: () => { } } as any); }}
                                        className="shrink-0 bg-red-600 text-white px-4 py-2 rounded-xl font-bold text-xs shadow-lg shadow-red-200 hover:bg-red-700 transition-all active:scale-95"
                                    >
                                        Retry
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation */}
                        <div className="mt-8 pt-6 border-t border-slate/10 flex justify-between items-center gap-4 relative z-20 shrink-0">
                            {step > 1 ? <button onClick={prevStep} className="text-slate/40 hover:text-secondary font-bold text-sm px-4">Back</button> : <div className="w-20"></div>}
                            {step < 5 ? (
                                <button onClick={nextStep} disabled={!validateStep()} className={`bg-secondary text-white px-6 py-3 rounded-xl font-bold shadow-lg ${!validateStep() ? 'opacity-50' : ''}`}>Next Step</button>
                            ) : (
                                <button onClick={handleSubmit} disabled={isSubmitting} className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg">{isSubmitting ? 'Processing...' : 'Book Now'}</button>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
