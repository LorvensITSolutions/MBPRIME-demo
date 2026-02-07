import React from 'react';
import { X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const EnquiryForm = ({ isModal = false, onClose }) => {
    return (
        <motion.div
            className={`w-full ${isModal ? 'max-w-[500px]' : 'max-w-full'} overflow-hidden rounded-md shadow-2xl border border-white/10 flex flex-col`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            {/* Header */}
            <div className="bg-primary flex justify-between items-center px-3 py-2 md:px-6 md:py-4 border-b border-white/10 relative">
                <div className="w-full text-center">
                    <h2 className="text-secondary text-lg md:text-2xl font-serif font-bold tracking-widest">ENQUIRE NOW</h2>
                </div>
                {isModal && (
                    <button
                        onClick={onClose}
                        className="text-textMuted hover:text-white transition-colors absolute right-4"
                    >
                        <X size={18} className="md:w-6 md:h-6" />
                    </button>
                )}
            </div>

            {/* Form Body with Primary/Navy Gradient */}
            <div className="bg-linear-to-br from-primary to-[#0d213f] px-2 py-2 md:px-8 md:py-10">


                <form className="space-y-2 md:space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-2 py-1.5 md:px-4 md:py-3 text-xs md:text-base rounded-sm border border-white/10 bg-white/5 text-white placeholder:text-textMuted focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                        />
                    </div>

                    <div className="relative">
                        <select className="w-full px-2 py-1.5 md:px-4 md:py-3 text-xs md:text-base rounded-sm border border-white/10 bg-white/5 text-white focus:border-secondary focus:ring-1 focus:ring-secondary outline-none appearance-none cursor-pointer">
                            <option className="bg-primary">IN - India (+91)</option>
                            <option className="bg-primary">US - USA (+1)</option>
                            <option className="bg-primary">UK - United Kingdom (+44)</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-textMuted pointer-events-none" size={14} />
                    </div>

                    <div>
                        <input
                            type="tel"
                            placeholder="Mobile no without country code*"
                            className="w-full px-2 py-1.5 md:px-4 md:py-3 text-xs md:text-base rounded-sm border border-white/10 bg-white/5 text-white placeholder:text-textMuted focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-2 py-1.5 md:px-4 md:py-3 text-xs md:text-base rounded-sm border border-white/10 bg-white/5 text-white placeholder:text-textMuted focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all"
                        />
                    </div>

                    <div>
                        <textarea
                            placeholder="Message"
                            rows="2"
                            className="w-full px-2 py-1.5 md:px-4 md:py-3 text-xs md:text-base rounded-sm border border-white/10 bg-white/5 text-white placeholder:text-textMuted focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    <div className="pt-1 md:pt-4 flex justify-center">
                        <button
                            type="submit"
                            className="btn-primary w-full py-1.5 text-xs md:text-base md:py-3"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default EnquiryForm;
