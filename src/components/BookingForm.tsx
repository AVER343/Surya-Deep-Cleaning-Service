import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarIcon, Clock, CheckCircle2, User, Mail, Phone, MapPin, Building2, ArrowRight, ArrowLeft, ChevronDown, Check, ChevronUp, Search, Calculator, Home, Sparkles, Box, Key, Hammer } from 'lucide-react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

// Custom Select Component with Search & Sort
const CustomSelect = ({ options, value, onChange, placeholder, className = "", searchable = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const containerRef = useRef(null);
    const inputRef = useRef(null);

    // Sort options alphabetically by title
    const sortedOptions = useMemo(() => {
        return [...options].sort((a, b) => a.title.localeCompare(b.title));
    }, [options]);

    // Filter options based on search query
    const filteredOptions = useMemo(() => {
        if (!searchQuery) return sortedOptions;
        return sortedOptions.filter(option =>
            option.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [sortedOptions, searchQuery]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
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

    const selectedOption = options.find(o => o.id === value);

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
                                filteredOptions.map((option) => (
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

// ... (serviceTypes can stay as is, just showing the import line change above)

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

const timeSlots = [
    "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00"
];

export default function BookingForm() {
    const formTopRef = useRef<HTMLDivElement>(null);
    const [step, setStep] = useState(1);
    const [isSuccess, setIsSuccess] = useState(false);

    // ... existing state ...

    // Scroll to top on success
    useEffect(() => {
        if (isSuccess && formTopRef.current) {
            formTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [isSuccess]);

    // ... existing code ...

    // Form Data State
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [zipCode, setZipCode] = useState('');

    // Backend Data
    const [locations, setLocations] = useState<{ id: string; name: string }[]>([]);
    const [selectedLocationId, setSelectedLocationId] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [serviceType, setServiceType] = useState('regular'); // Default to regular
    const [bedrooms, setBedrooms] = useState(1);
    const [bathrooms, setBathrooms] = useState(1);
    const [sqft, setSqft] = useState(1000);
    const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

    // Date & Time State
    const [date, setDate] = useState<Date>();
    const [time, setTime] = useState<string>('');

    // Availability State
    const [bookedSlots, setBookedSlots] = useState<string[]>([]);
    const [isLoadingAvailability, setIsLoadingAvailability] = useState(false);

    // Fetch Availability when Date Changes
    useEffect(() => {
        const fetchAvailability = async () => {
            if (!date) return;

            setIsLoadingAvailability(true);
            setBookedSlots([]); // Reset while fetching

            try {
                const formattedDate = format(date, 'yyyy-MM-dd');
                const response = await fetch(`/api/availability?date=${formattedDate}`);
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
    }, [date]);

    const [estimatedPrice, setEstimatedPrice] = useState(0);

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

    // Calculate Price Effect
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

    const validateStep = () => {
        if (step === 1) return firstName && lastName && email && phone && zipCode;
        if (step === 2) return selectedLocationId && bedrooms && bathrooms;
        if (step === 3) return !!serviceType;
        if (step === 4) return true; // Extras are optional
        if (step === 5) return date && time;
        return true;
    };

    const nextStep = () => {
        if (validateStep()) setStep(step + 1);
    };

    const prevStep = () => setStep(step - 1);

    // Success State
    const [bookingId, setBookingId] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
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
            date: date ? format(date, 'yyyy-MM-dd') : null,
            time,
            price: estimatedPrice,
            placeId: selectedLocationId
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
            } else {
                alert(`Error: ${result.error || 'Failed to submit booking'}`);
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('An unexpected error occurred. Please try again.');
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
                    {/* Using key to force re-animation if needed, but here it's just stable */}

                    {/* Decorative Confetti (Simple CSS) */}
                    <div className="absolute top-6 left-6 text-xl animate-bounce delay-100 opacity-20">🎉</div>
                    <div className="absolute top-12 right-6 text-xl animate-bounce delay-300 opacity-20">✨</div>
                    <div className="absolute bottom-6 left-12 text-xl animate-bounce delay-700 opacity-20">🎈</div>
                    <div className="absolute bottom-12 right-12 text-xl animate-bounce delay-500 opacity-20">🎊</div>

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
                                {serviceTypes.find(t => t.id === serviceType)?.title || 'Service'}
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
                    {/* Steps Indicator - Mobile Vertical Stack, Desktop Horizontal */}
                    <div className="bg-white/50 backdrop-blur-sm px-4 md:px-6 py-4 border-b border-slate/5 flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate/40">
                        <span className={step >= 1 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5"}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 1 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-slate/10 text-slate/40'}`}>1</span>
                            <span>Contact</span>
                        </span>

                        <div className={`h-px w-full mx-2 hidden md:block ${step >= 2 ? 'bg-primary/20' : 'bg-slate/10'}`}></div>

                        <span className={step >= 2 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5"}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 2 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-slate/10 text-slate/40'}`}>2</span>
                            <span>Home</span>
                        </span>

                        <div className={`h-px w-full mx-2 hidden md:block ${step >= 3 ? 'bg-primary/20' : 'bg-slate/10'}`}></div>

                        <span className={step >= 3 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5"}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 3 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-slate/10 text-slate/40'}`}>3</span>
                            <span>Service</span>
                        </span>

                        <div className={`h-px w-full mx-2 hidden md:block ${step >= 4 ? 'bg-primary/20' : 'bg-slate/10'}`}></div>

                        <span className={step >= 4 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5"}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 4 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-slate/10 text-slate/40'}`}>4</span>
                            <span>Extras</span>
                        </span>

                        <div className={`h-px w-full mx-2 hidden md:block ${step >= 5 ? 'bg-primary/20' : 'bg-slate/10'}`}></div>

                        <span className={step >= 5 ? "text-primary transition-colors flex flex-col md:flex-row items-center gap-1.5" : "flex flex-col md:flex-row items-center gap-1.5"}>
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] transition-all ${step >= 5 ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-slate/10 text-slate/40'}`}>5</span>
                            <span>Time</span>
                        </span>
                    </div>

                    <div className="p-6 md:p-8 flex-grow flex flex-col overflow-y-auto">
                        <AnimatePresence mode="wait">
                            {/* STEP 1: CONTACT INFO */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6 flex-grow"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-secondary">Who You Are</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-slate/50 uppercase tracking-widest ml-1">First Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" />
                                                <input
                                                    type="text"
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary shadow-inner focus:shadow-xl"
                                                    placeholder="Jane"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-slate/50 uppercase tracking-widest ml-1">Last Name</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" />
                                                <input
                                                    type="text"
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary shadow-inner focus:shadow-xl"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1 md:col-span-2">
                                            <label className="text-xs font-bold text-slate/50 uppercase tracking-widest ml-1">Email Address</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" />
                                                <input
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary shadow-inner focus:shadow-xl"
                                                    placeholder="jane@example.com"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-slate/50 uppercase tracking-widest ml-1">Phone Number</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" />
                                                <input
                                                    type="tel"
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary shadow-inner focus:shadow-xl"
                                                    placeholder="(555) 123-4567"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold text-slate/50 uppercase tracking-widest ml-1">Zip Code</label>
                                            <div className="relative">
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" />
                                                <input
                                                    type="text"
                                                    value={zipCode}
                                                    onChange={(e) => setZipCode(e.target.value)}
                                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary shadow-inner focus:shadow-xl"
                                                    placeholder="12345"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 2: HOME DETAILS */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6 flex-grow"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-secondary">Your Home</h3>

                                    {/* Service Area Selection - Custom Searchable Dropdown */}
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
                                        {!selectedLocationId && <p className="text-xs text-orange-500 mt-2 font-medium ml-1">Please select an area to proceed.</p>}
                                    </div>

                                    {/* Sqft Input */}
                                    <div className="relative z-0">
                                        <label className="block text-sm font-bold text-slate/70 mb-2">Approx. Square Footage</label>
                                        <div className="relative">
                                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate/40" />
                                            <input
                                                type="number"
                                                value={sqft}
                                                onChange={(e) => setSqft(Number(e.target.value))}
                                                className="w-full pl-10 pr-12 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-medium text-secondary shadow-inner focus:shadow-xl"
                                            />
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate/40 text-sm font-bold">ft²</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 relative z-0">
                                        <div>
                                            <label className="block text-sm font-bold text-slate/70 mb-2">Bedrooms</label>
                                            <div className="relative">
                                                <select
                                                    value={bedrooms}
                                                    onChange={(e) => setBedrooms(Number(e.target.value))}
                                                    className="w-full px-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none font-medium text-secondary appearance-none shadow-inner transition-all"
                                                >
                                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Bedroom' : 'Bedrooms'}</option>)}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate/40">
                                                    <ChevronDown className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-slate/70 mb-2">Bathrooms</label>
                                            <div className="relative">
                                                <select
                                                    value={bathrooms}
                                                    onChange={(e) => setBathrooms(Number(e.target.value))}
                                                    className="w-full px-4 py-3 rounded-xl bg-slate/5 border border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10 outline-none font-medium text-secondary appearance-none shadow-inner transition-all"
                                                >
                                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Bathroom' : 'Bathrooms'}</option>)}
                                                </select>
                                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate/40">
                                                    <ChevronDown className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 3: SERVICE TYPE (COMPACT LIST) */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4 flex-grow"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-secondary mb-2">Select Service</h3>

                                    {/* Ultra-Compact Vertical List for Mobile */}
                                    <div className="flex flex-col gap-2.5">
                                        {serviceTypes.map((type) => (
                                            <button
                                                key={type.id}
                                                onClick={() => setServiceType(type.id)}
                                                className={`relative w-full p-3 rounded-xl border transition-all flex items-center gap-3 text-left group ${serviceType === type.id ? 'border-primary/50 bg-primary/5 shadow-md shadow-primary/5 ring-1 ring-primary/20' : 'border-slate/10 hover:border-primary/30 hover:shadow-sm hover:bg-slate/5'}`}
                                            >
                                                {/* Icon */}
                                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${serviceType === type.id ? 'bg-primary text-white shadow-sm' : 'bg-white text-slate/40 border border-slate/10 group-hover:text-primary group-hover:border-primary/20'}`}>
                                                    <type.icon className="w-4 h-4 md:w-5 md:h-5" />
                                                </div>

                                                {/* Text Content */}
                                                <div className="flex-1 min-w-0 pr-6">
                                                    <div className="flex items-center gap-2">
                                                        <span className="block font-bold text-secondary text-sm md:text-base leading-tight truncate">{type.title}</span>
                                                        {type.popular && (
                                                            <span className="text-[9px] font-bold bg-secondary text-white px-1.5 py-0.5 rounded uppercase tracking-wide shadow-sm shrink-0 hidden sm:inline-block">
                                                                Popular
                                                            </span>
                                                        )}
                                                    </div>
                                                    <span className="text-[10px] md:text-xs text-slate-500 font-medium leading-tight block mt-0.5 truncate md:whitespace-normal group-hover:text-slate-600 transition-colors opacity-90">{type.desc}</span>
                                                </div>

                                                {/* Mobile Badge (Absolute) */}
                                                {type.popular && (
                                                    <div className="absolute top-2 right-2 sm:hidden">
                                                        <span className="text-[8px] font-bold bg-secondary text-white px-1 py-0.5 rounded uppercase tracking-wide shadow-sm">
                                                            Popular
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Checkmark */}
                                                <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${serviceType === type.id ? 'border-primary bg-primary text-white' : 'border-slate/10 group-hover:border-primary/20'}`}>
                                                    {serviceType === type.id && <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3" />}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 4: EXTRAS */}
                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6 flex-grow"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-secondary">Optional Extras</h3>

                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {addOnOptions.map(addon => (
                                            <button
                                                key={addon.id}
                                                onClick={() => toggleAddon(addon.id)}
                                                className={`p-3 rounded-xl text-sm font-medium border-2 transition-all flex flex-col items-center gap-2 text-center h-full justify-center ${selectedAddons.includes(addon.id) ? 'border-primary bg-primary/5 text-primary shadow-sm ring-1 ring-primary/10' : 'border-slate/10 text-slate/60 hover:border-primary/30 hover:bg-slate/5'}`}
                                            >
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-colors ${selectedAddons.includes(addon.id) ? 'bg-primary text-white' : 'bg-slate/10 text-slate/40'}`}>
                                                    {selectedAddons.includes(addon.id) ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-xl font-bold leading-none pb-0.5">+</span>}
                                                </div>
                                                <span className="leading-tight font-bold">{addon.label}</span>
                                                <span className="text-xs opacity-60 font-bold bg-slate/10 px-2 py-0.5 rounded-full">${addon.price}</span>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="bg-slate-900 p-4 rounded-xl flex items-center justify-between text-white shadow-lg mt-auto">
                                        <div>
                                            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Estimated Total</p>
                                            <p className="text-2xl font-bold tracking-tight">${estimatedPrice}</p>
                                        </div>
                                        <p className="text-[10px] text-slate-400 font-medium text-right max-w-[120px] leading-tight">Final price confirmed on-site based on condition.</p>
                                    </div>
                                </motion.div>
                            )}

                            {/* STEP 5: SCHEDULE */}
                            {step === 5 && (
                                <motion.div
                                    key="step5"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6 flex-grow"
                                >
                                    <h3 className="text-xl md:text-2xl font-bold text-secondary">Schedule Service</h3>

                                    <div className="flex flex-col gap-6">
                                        {/* Calendar - Always Visible */}
                                        <div className="flex flex-col items-center">
                                            <label className="block text-sm font-bold text-slate/70 mb-2 flex items-center gap-2 self-start">
                                                <CalendarIcon className="w-4 h-4 text-primary" /> Select Date
                                            </label>
                                            <div className="border border-slate/10 rounded-2xl p-2 bg-white shadow-sm inline-block">
                                                <DayPicker
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    disabled={{ before: new Date() }}
                                                    modifiersClassNames={{
                                                        selected: 'bg-primary text-white'
                                                    }}
                                                    styles={{
                                                        caption: { color: '#0F172A' },
                                                        head_cell: { color: '#64748B' },
                                                    }}
                                                />
                                            </div>
                                            {!date && <p className="text-xs text-orange-500 mt-2 font-medium">Please select a date.</p>}
                                        </div>

                                        {/* Time Column - PROGRESSIVE DISCLOSURE */}
                                        {date && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="flex flex-col items-center"
                                            >
                                                <label className="block text-sm font-bold text-slate/70 mb-2 flex items-center gap-2 self-start">
                                                    <Clock className="w-4 h-4 text-primary" /> Select Time
                                                </label>
                                                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 w-full">
                                                    {timeSlots.map((slot) => {
                                                        const isBooked = bookedSlots.includes(slot);
                                                        const isDisabled = isBooked || isLoadingAvailability;
                                                        return (
                                                            <button
                                                                key={slot}
                                                                onClick={() => !isDisabled && setTime(slot)}
                                                                disabled={isDisabled}
                                                                className={`
                                                                    py-3 px-2 rounded-xl text-sm font-bold border-2 transition-all 
                                                                    ${isBooked
                                                                        ? 'bg-slate/5 text-slate/20 border-transparent cursor-not-allowed decoration-slate/20 line-through'
                                                                        : isLoadingAvailability
                                                                            ? 'bg-slate/5 text-slate/30 border-transparent cursor-wait'
                                                                            : time === slot
                                                                                ? 'bg-primary text-white border-primary shadow-md transform scale-105'
                                                                                : 'bg-white border-slate/10 text-slate-600 hover:border-primary/30 hover:shadow-sm'
                                                                    }
                                                                `}
                                                            >
                                                                {slot}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                                {isLoadingAvailability && <p className="text-xs text-slate-400 mt-2 animate-pulse">Checking availability...</p>}
                                                {!time && date && !isLoadingAvailability && (
                                                    <p className="text-xs text-orange-500 mt-2 font-medium">Please select a time slot.</p>
                                                )}
                                            </motion.div>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="mt-8 pt-6 border-t border-slate/10 flex justify-between items-center gap-4 relative z-20 shrink-0">
                            {step > 1 ? (
                                <button onClick={prevStep} className="text-slate/40 hover:text-secondary font-bold text-sm flex items-center gap-2 transition-colors px-4 py-2">
                                    <ArrowLeft className="w-4 h-4" /> Back
                                </button>
                            ) : (
                                <div className="w-20"></div> // Spacer
                            )}

                            {step < 5 ? (
                                <button
                                    onClick={(e) => { e.preventDefault(); nextStep(); }}
                                    className={`bg-secondary text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl hover:bg-black transition-all flex items-center gap-2 text-sm justify-center flex-1 sm:flex-initial sm:w-auto ${!validateStep() ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={!validateStep()}
                                >
                                    Next Step <ArrowRight className="w-4 h-4" />
                                </button>
                            ) : (
                                <button onClick={handleSubmit} className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-primary/40 hover:bg-primary-dark transition-all flex items-center gap-2 text-sm justify-center flex-1 sm:flex-initial sm:w-auto cursor-pointer" disabled={isSubmitting}>
                                    {isSubmitting ? 'Processing...' : 'Book Now'}
                                </button>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
