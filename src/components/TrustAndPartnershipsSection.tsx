import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ChevronLeft, ChevronRight, Star, Quote, Award, CheckCircle2 } from 'lucide-react';

export const TrustAndPartnershipsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const partners = [
    {
      name: "IITA",
      fullName: "International Institute of Tropical Agriculture",
      role: "Scientific Soil Mapping Partner",
      badge: "Agronomy Validation"
    },
    {
      name: "NAQS",
      fullName: "Nigeria Agricultural Quarantine Service",
      role: "Export Standard Compliance",
      badge: "Regulatory Clearance"
    },
    {
      name: "Proximal NIR",
      fullName: "Proximal Soil Spectroscopy Network",
      role: "In-Field Root Zone Telemetry",
      badge: "99.8% Field Precision"
    },
    {
      name: "OCP Africa",
      fullName: "OCP Custom Blend Fertilizer Network",
      role: "Verified Input Supply Chain",
      badge: "Counterfeit-Free Inputs"
    },
    {
      name: "FEPSAN",
      fullName: "Fertilizer Producers & Suppliers Association",
      role: "Subsidized Blending Plants",
      badge: "Direct Distribution"
    }
  ];

  const testimonials = [
    {
      quote: "SOILREVIVE has revolutionized how our 850 cassava cooperative farmers apply fertilizer in Enugu. By testing root zone chemistry first, our members saved over 15 million Naira in wasted input costs in a single planting season.",
      author: "Chief Emeka Nnamani",
      role: "President, Enugu Farmers Cooperative Union",
      location: "Nsukka, Enugu State",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      stars: 5,
      impact: "850 Farmers Empowered"
    },
    {
      quote: "Managing a 50-hectare commercial maize operation used to require blind blanket fertilizer spreading. With SOILREVIVE's Proximal Sensing telemetry maps, we feed exact nutrients to stress zones, cutting fertilizer usage by 24% while boosting grain weight.",
      author: "Hajiya Fatima Aliyu",
      role: "Director of Operations, Zaria Grains Ltd",
      location: "Kaduna State",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&auto=format&fit=crop",
      stars: 5,
      impact: "24% Input Cost Reduction"
    },
    {
      quote: "The native voice advice in Hausa and Yoruba makes this platform accessible to every smallholder in our district regardless of literacy level. Our soil champions conduct tests in under 2 minutes.",
      author: "Dr. Ibrahim Danjuma",
      role: "Senior Agronomist, Northern Nigeria Agro Tech",
      location: "Kano State",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
      stars: 5,
      impact: "100% Literacy Accessibility"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="partners" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute inset-0 soil-grid-bg opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-soil-primary">
            <ShieldCheck className="w-3.5 h-3.5 text-soil-primary" />
            <span>Trusted Partnerships & Science</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-slate-900">
            Validated by Science, <br className="hidden sm:block" />
            <span className="text-soil-primary">Trusted by Communities</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            SOILREVIVE operates in direct technical partnership with international agricultural research bodies and Nigerian federal quarantine authorities.
          </p>
        </div>

        {/* Partners Grid / Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-20">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-soil-primary/40 hover:bg-emerald-50/50 transition-all text-center group flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700 block mb-2 mx-auto w-max">
                  {partner.badge}
                </span>
                <h4 className="text-xl font-extrabold font-display text-slate-900 group-hover:text-soil-primary transition-colors">
                  {partner.name}
                </h4>
                <p className="text-[11px] font-semibold text-slate-600 mt-1 line-clamp-1">
                  {partner.fullName}
                </p>
              </div>
              <p className="text-[10px] text-slate-400 mt-3 pt-2 border-t border-slate-200">
                {partner.role}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel Section */}
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Quote className="w-64 h-64 text-emerald-500" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Community & Cooperative Testimonials
              </span>

              {/* Navigation Controls */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Carousel Item with Framer Motion */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Stars */}
                <div className="flex space-x-1 text-amber-400">
                  {[...Array(testimonials[currentTestimonial].stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg sm:text-2xl font-serif text-slate-200 leading-relaxed italic">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].author}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-emerald-400 shadow-md"
                    />
                    <div>
                      <h4 className="text-base font-bold font-display text-white">
                        {testimonials[currentTestimonial].author}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                      </p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex px-3 py-1.5 rounded-xl bg-emerald-950 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-mono">
                    {testimonials[currentTestimonial].impact}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
};
