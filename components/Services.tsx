'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import {
  Sparkles,
  Tooth,
  HeartPulse,
  Scissors,
  Baby,
  Shield,
  Zap,
  Bone,
  Smile,
  Activity,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const serviceCategories = [
  {
    id: 'preventive',
    icon: Shield,
    color: 'primary',
    bgColor: 'primary-100',
    items: ['checkup', 'cleaning', 'xray', 'fillings', 'mouthguards'],
  },
  {
    id: 'cosmetic',
    icon: Sparkles,
    color: 'accent',
    bgColor: 'accent-100',
    items: ['whitening', 'veneers', 'bonding', 'reshaping', 'smile'],
  },
  {
    id: 'restorative',
    icon: Tooth,
    color: 'green',
    bgColor: 'green-100',
    items: ['rootcanal', 'implants', 'dentures', 'crowns', 'fillings'],
  },
  {
    id: 'surgical',
    icon: Scissors,
    color: 'red',
    bgColor: 'red-100',
    items: ['extractions', 'surgery', 'implants', 'bone'],
  },
  {
    id: 'orthodontic',
    icon: Activity,
    color: 'purple',
    bgColor: 'purple-100',
    items: ['braces', 'aligners', 'mouthguards'],
  },
  {
    id: 'pediatric',
    icon: Baby,
    color: 'pink',
    bgColor: 'pink-100',
    items: ['pediatric', 'sealants', 'fillings'],
  },
];

const serviceDetails: Record<string, { en: string; mr: string; icon: React.ComponentType<{ className?: string }> }> = {
  checkup: { en: 'Dental Check-ups', mr: 'दंत तपासणी', icon: Tooth },
  cleaning: { en: 'Teeth Cleaning', mr: 'दंत स्वच्छता', icon: Sparkles },
  xray: { en: 'Digital X-Ray', mr: 'डिजिटल एक्स-रे', icon: Activity },
  whitening: { en: 'Teeth Whitening', mr: 'दंत धुवून काढणे', icon: Sparkles },
  veneers: { en: 'Veneers & Crowns', mr: 'व्हिनिअर्स आणि क्राउन्स', icon: Tooth },
  bonding: { en: 'Dental Bonding', mr: 'दंत बॉन्डिंग', icon: HeartPulse },
  reshaping: { en: 'Teeth Reshaping', mr: 'दंत आकार देणे', icon: Scissors },
  fillings: { en: 'Fillings & Sealants', mr: 'फिलिंग्स आणि सीलंट्स', icon: Shield },
  rootcanal: { en: 'Root Canal Treatment', mr: 'रूट कॅनल उपचार', icon: Tooth },
  implants: { en: 'Dental Implants', mr: 'दंत इम्प्लॅंट्स', icon: Bone },
  dentures: { en: 'Dentures & Bridges', mr: 'डेंचर्स आणि ब्रिड्जेस', icon: Tooth },
  extractions: { en: 'Extractions', mr: 'दंत निघालणे', icon: Scissors },
  surgery: { en: 'Oral Surgery', mr: 'ओरल सर्जरी', icon: Scissors },
  braces: { en: 'Braces & Aligners', mr: 'ब्रेसेस आणि अलाइनर्स', icon: Activity },
  mouthguards: { en: 'Mouth Guards', mr: 'माऊथ गार्ड्स', icon: Shield },
  pediatric: { en: 'Pediatric Dentistry', mr: 'बाल दंतशल्यचिकित्सा', icon: Baby },
  smile: { en: 'Smile Design', mr: 'हास्य डिझाइन', icon: Smile },
  crowns: { en: 'Crowns & Bridges', mr: 'क्राउन्स आणि ब्रिड्जेस', icon: Tooth },
  sealants: { en: 'Dental Sealants', mr: 'दंत सीलंट्स', icon: Shield },
  aligners: { en: 'Clear Aligners', mr: 'स्पष्ट अलाइनर्स', icon: Activity },
  bone: { en: 'Bone Grafting', mr: 'अस्थि ग्राफ्टिंग', icon: Bone },
};

export default function Services() {
  const { t, locale } = useLanguage();

  const getServiceName = (key: string) => serviceDetails[key]?.[locale] || key;
  const getServiceIcon = (key: string) => serviceDetails[key]?.icon || Tooth;

  return (
    <section id="services" className="py-20 lg:py-32 bg-neutral-50">
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
            {t.services.subtitle}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-neutral-600">
            Comprehensive dental care for the whole family with modern technology and gentle approach
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Service categories">
            {serviceCategories.map((category, index) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={index === 0}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  index === 0
                    ? `bg-${category.color}-600 text-white shadow-lg`
                    : 'bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {t.services.categories[category.id as keyof typeof t.services.categories]}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(serviceDetails).map(([key, service], index) => (
            <motion.article
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-xl hover:border-primary-200 transition-all duration-300 overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-5 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {getServiceName(key)}
                </h3>
                <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
                  Professional {getServiceName(key).toLowerCase()} with latest techniques and materials for optimal results.
                </p>

                {/* Link */}
                <Link
                  href="#appointment"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                >
                  <span>Book Appointment</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="#appointment"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            {t.common.bookNow}
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}