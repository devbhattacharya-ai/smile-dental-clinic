'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Search, Maximize, Heart, Star, Award, Truck } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: { en: 'Reception Area', mr: 'रिसेप्शन क्षेत्र' },
    category: { en: 'Clinic Interior', mr: 'क्लिनिक आंतर्गत' },
    icon: Heart,
    color: 'primary',
  },
  {
    id: 2,
    title: { en: 'Treatment Room', mr: 'उपचार कक्ष' },
    category: { en: 'Clinical Setup', mr: 'क्लिनिकल सेटअप' },
    icon: Award,
    color: 'accent',
  },
  {
    id: 3,
    title: { en: 'Sterilization Area', mr: 'स्टेरिलायझेशन क्षेत्र' },
    category: { en: 'Safety First', mr: 'सुरक्षा प्रथम' },
    icon: Shield,
    color: 'green',
  },
  {
    id: 4,
    title: { en: 'Digital X-Ray Room', mr: 'डिजिटल एक्स-रे कक्ष' },
    category: { en: 'Advanced Tech', mr: 'उन्नत तंत्रज्ञान' },
    icon: Star,
    color: 'blue',
  },
  {
    id: 5,
    title: { en: 'Waiting Lounge', mr: 'प्रतीक्षा लाउंज' },
    category: { en: 'Patient Comfort', mr: 'रुग्ण सुख' },
    icon: Truck,
    color: 'purple',
  },
  {
    id: 6,
    title: { en: 'Pediatric Corner', mr: 'बाल कोपरा' },
    category: { en: 'Kids Zone', mr: 'किड्स झोन' },
    icon: Heart,
    color: 'pink',
  },
];

export default function Gallery() {
  const { t, locale } = useLanguage();

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500" />
            {t.gallery.subtitle}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-neutral-600">
            Modern facilities with state-of-the-art equipment for your comfort and safety
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 cursor-pointer"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-{item.color}-100 to-{item.color}-200" />

              {/* Pattern Overlay */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M0 38.59L38.59 0M-1.41 40L40 1.41M38.59 40L40 38.59%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-1">
                    {item.title[locale]}
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    {item.category[locale]}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    <span>View Details</span>
                    <Maximize className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-neutral-700">
                  {item.category[locale]}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Heart, title: { en: 'Comfortable Waiting', mr: 'सुखद प्रतीक्षा' }, desc: { en: 'Relaxing lounge with refreshments', mr: 'रिफ्रेशमेंट्ससह शांत लाउंज' } },
            { icon: Star, title: { en: 'Advanced Equipment', mr: 'उन्नत उपकरणे' }, desc: { en: 'Latest dental technology', mr: 'नवीनतम दंत तंत्रज्ञान' } },
            { icon: Award, title: { en: 'Strict Sterilization', mr: 'कडक स्टेरिलायझेशन' }, desc: { en: 'International protocols followed', mr: 'आंतरराष्ट्रीय प्रोटोकॉल्स अनुसरण' } },
            { icon: Search, title: { en: 'Digital Diagnostics', mr: 'डिजिटल निदान' }, desc: { en: 'Precise treatment planning', mr: 'सुचूच उपचार योजना' } },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-neutral-50 hover:bg-primary-50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-primary-600" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-neutral-900 mb-1">
                  {feature.title[locale]}
                </h4>
                <p className="text-sm text-neutral-600">
                  {feature.desc[locale]}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}