'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { CheckCircle, Award, HeartPulse, GraduationCap, UserCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: HeartPulse, titleKey: 'feature1_title', descKey: 'feature1_desc' },
  { icon: Award, titleKey: 'feature2_title', descKey: 'feature2_desc' },
  { icon: GraduationCap, titleKey: 'feature3_title', descKey: 'feature3_desc' },
  { icon: UserCheck, titleKey: 'feature4_title', descKey: 'feature4_desc' },
];

// Additional translations for about section features
const featureTranslations: Record<string, { en: string; mr: string }> = {
  feature1_title: { en: 'Patient-Centered Care', mr: 'रुग्णकेंद्रित काळजी' },
  feature1_desc: { en: 'Every treatment plan is tailored to your unique needs and comfort', mr: 'प्रत्येक उपचार योजना तुमच्या अनन्य गरजां आणि सुखानुसार तयार केली जाते' },
  feature2_title: { en: 'Advanced Technology', mr: 'उन्नत तंत्रज्ञान' },
  feature2_desc: { en: 'Digital X-rays, intraoral cameras, and modern sterilization', mr: 'डिजिटल एक्स-रे, इंट्राऑरल कॅमेरे आणि आधुनिक स्टेरिलायझेशन' },
  feature3_title: { en: 'Expert Team', mr: 'तज्ज्ञ टीम' },
  feature3_desc: { en: 'Highly qualified professionals with continuous education', mr: 'सतत शिक्षणासह उच्च शिक्षित व्यावसायिक' },
  feature4_title: { en: 'Comfortable Experience', mr: 'सुखद अनुभव' },
  feature4_desc: { en: 'Relaxing environment with painless treatment options', mr: 'शांत वातावरण आणि पीडारहित उपचार पर्याय' },
};

export default function About() {
  const { t, locale } = useLanguage();

  const getFeatureText = (key: string) => featureTranslations[key]?.[locale] || key;

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl" />
              <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" />
                <div className="relative flex items-center justify-center h-full p-8">
                  <div className="text-center">
                    <div className="w-28 h-28 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-2">Dr. Rajeshwar Bhattacharya</h3>
                    <p className="text-primary-600 font-medium">BDS, MDS - Cosmetic Dentistry</p>
                    <p className="text-neutral-600 mt-4 text-sm max-w-xs mx-auto">15+ years of excellence in dental care</p>
                  </div>
                </div>
              </div>

              {/* Experience Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border border-neutral-100 min-w-[200px]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center">
                    <Award className="w-7 h-7 text-primary-500" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-2xl text-neutral-900">15+</p>
                    <p className="text-sm text-neutral-500">Years Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Qualification Badge */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-accent-500" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 text-sm">BDS, MDS</p>
                    <p className="text-xs text-neutral-500">Cosmetic Dentistry</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-500" />
              {t.about.subtitle}
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
              {t.about.title}
            </h2>

            <div className="prose prose-neutral max-w-none mb-8">
              <p className="text-lg text-neutral-600 leading-relaxed mb-4">
                {t.about.description}
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our clinic in Kharghar Sector 10 is equipped with the latest dental technology and follows international sterilization protocols. We believe in building long-term relationships with our patients based on trust, transparency, and exceptional care.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-primary-50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-neutral-900 mb-1">
                      {getFeatureText(feature.titleKey)}
                    </h4>
                    <p className="text-sm text-neutral-600">
                      {getFeatureText(feature.descKey)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-4 py-3 bg-white border border-neutral-200 rounded-xl shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-neutral-700">NABH Accredited Standards</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-white border border-neutral-200 rounded-xl shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-neutral-700">ISO Certified Sterilization</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 bg-white border border-neutral-200 rounded-xl shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-neutral-700">Digital Smile Design</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}