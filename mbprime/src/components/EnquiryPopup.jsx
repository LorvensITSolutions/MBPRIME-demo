import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

const EnquiryPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Check if user has already submitted the form
        const hasSubmitted = localStorage.getItem('mbPrimeEnquirySubmitted');

        if (!hasSubmitted && !isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 10000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would normally send the data to a backend
        console.log('Form submitted:', formData);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            localStorage.setItem('mbPrimeEnquirySubmitted', 'true');

            // Close popup after showing success message
            setTimeout(() => {
                setIsVisible(false);
            }, 2000);
        }, 1000);
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full p-1"
                        >
                            <X size={20} />
                        </button>

                        <div className="p-8 md:p-10">
                            {isSubmitted ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
                                    <p className="text-gray-600">We have received your details and will get in touch with you shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">
                                            Fill in your details and get in touch with us.
                                        </h2>
                                        <div className="space-y-2 mt-4">
                                            <div className="flex items-center gap-3 text-secondary font-bold">
                                                <Phone size={18} />
                                                <span>+91 1234567891</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-600 text-sm">
                                                <Mail size={18} />
                                                <span>info@mbprime.com</span>
                                            </div>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                                                <User size={18} />
                                            </div>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-gray-400 text-gray-700"
                                            />
                                        </div>

                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                                                <Mail size={18} />
                                            </div>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-gray-400 text-gray-700"
                                            />
                                        </div>

                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-secondary">
                                                <Phone size={18} />
                                            </div>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-gray-400 text-gray-700"
                                            />
                                        </div>

                                        <div className="relative">
                                            <div className="absolute top-3 left-3 pointer-events-none text-secondary">
                                                <MessageSquare size={18} />
                                            </div>
                                            <textarea
                                                name="message"
                                                rows="3"
                                                placeholder="Message (Optional)"
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-secondary/20 focus:border-secondary outline-none transition-all placeholder:text-gray-400 text-gray-700 resize-none"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="w-40 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3 px-6 rounded-md shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1 uppercase text-sm tracking-wider flex items-center justify-center gap-2"
                                            style={{ backgroundColor: '#2b95d8' }} // Matching the blue button in screenshot usually
                                        >
                                            Submit <span className="text-lg">→</span>
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EnquiryPopup;
