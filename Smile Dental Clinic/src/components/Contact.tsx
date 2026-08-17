'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { MapPin, Phone, Mail, Clock, Send, Loader2, MessageSquare, Map } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  'General Check-up',
  'Teeth Cleaning',
  'Teeth Whitening',
  'Veneers & Crowns',
  'Dental Implants',
  'Root Canal Treatment',
  'Braces & Aligners',
  'Pediatric Dentistry',
  'Tooth Extraction',
  'Dentures & Bridges',
  'Dental Bonding',
  'Emergency Care',
];

const serviceTranslations: Record<string, { en: string; mr: string }> = {
  'General Check-up': { en: 'General Check-up', mr: 'सामान्य तपासणी' },
  'Teeth Cleaning': { en: 'Teeth Cleaning', mr: 'दंत स्वच्छता' },
  'Teeth Whitening': { en: 'Teeth Whitening', mr: 'दंत धुवून काढणे' },
  'Veneers & Crowns': { en: 'Veneers & Crowns', mr: 'व्हिनिअर्स आणि क्राउन्स' },
  'Dental Implants': { en: 'Dental Implants', mr: 'दंत इम्प्लॅंट्स' },
  'Root Canal Treatment': { en: 'Root Canal Treatment', mr: 'रूट कॅनल उपचार' },
  'Braces & Aligners': { en: 'Braces & Aligners', mr: 'ब्रेसेस आणि अलाइनर्स' },
  'Pediatric Dentistry': { en: 'Pediatric Dentistry', mr: 'बाल दंतशल्यचिकित्सा' },
  'Tooth Extraction': { en: 'Tooth Extraction', mr: 'दंत निघालणे' },
  'Dentures & Bridges': { en: 'Dentures & Bridges', mr: 'डेंचर्स आणि ब्रिड्जेस' },
  'Dental Bonding': { en: 'Dental Bonding', mr: 'दंत बॉन्डिंग' },
  'Emergency Care': { en: 'Emergency Care', mr: 'आपत्कालीन काळजी' },
};

export default function Contact() {
  const { t, locale } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success(t.contact.form.success);
      reset();
    } catch {
      toast.error(t.contact.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      value: t.common.location,
      href: 'https://maps.google.com',
      target: '_blank',
    },
    {
      icon: Phone,
      title: t.contact.phone,
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: Mail,
      title: t.contact.email,
      value: 'smiledental@kharghar.com',
      href: 'mailto:smiledental@kharghar.com',
    },
    {
      icon: Clock,
      title: t.contact.hours,
      value: `${t.contact.mondayFriday} | ${t.contact.saturday}`,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
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
            {t.contact.subtitle}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-neutral-600">
            Have questions? We'd love to hear from you. Send us a message or visit our clinic.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Cards */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-4 p-6 bg-neutral-50 rounded-2xl hover:bg-primary-50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary-600" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-500 mb-1">{item.title}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.target}
                        rel={item.target ? 'noopener noreferrer' : undefined}
                        className="text-neutral-900 hover:text-primary-600 transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-neutral-900 font-medium">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-accent-500 text-white rounded-xl font-medium hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="w-5 h-5" />
                <span>{t.common.whatsapp}</span>
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                href="tel:+919876543210"
                className="flex items-center justify-center gap-3 px-6 py-4 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>{t.common.callNow}</span>
              </motion.a>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-video rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200"
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <Map className="w-12 h-12 text-neutral-300 mb-4" />
                <h3 className="font-heading text-xl font-semibold text-neutral-900 mb-2">Clinic Location</h3>
                <p className="text-neutral-600 mb-4 max-w-sm">Smile Dental Clinic, Kharghar Sector 10, Navi Mumbai, Maharashtra 410210</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-neutral-50 rounded-2xl p-6 sm:p-8" noValidate>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t.contact.form.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    id="name"
                    type="text"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-500' : 'border-neutral-200 focus:border-primary-500'
                    } bg-white focus:ring-2 focus:ring-primary-500/20 transition-colors`}
                    placeholder="Your full name"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500" role="alert">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t.contact.form.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    id="email"
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? 'border-red-500' : 'border-neutral-200 focus:border-primary-500'
                    } bg-white focus:ring-2 focus:ring-primary-500/20 transition-colors`}
                    placeholder="your@email.com"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500" role="alert">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t.contact.form.phone} <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('phone', { required: 'Phone is required' })}
                    id="phone"
                    type="tel"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? 'border-red-500' : 'border-neutral-200 focus:border-primary-500'
                    } bg-white focus:ring-2 focus:ring-primary-500/20 transition-colors`}
                    placeholder="+91 98765 43210"
                    aria-invalid={errors.phone ? 'true' : 'false'}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500" role="alert">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t.contact.form.service}
                  </label>
                  <select
                    {...register('service')}
                    id="service"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 bg-white focus:ring-2 focus:ring-primary-500/20 transition-colors appearance-none bg-no-repeat bg-right"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%236b7280%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E")', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                  >
                    <option value="">{t.contact.form.service}</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {serviceTranslations[s]?.[locale] || s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 bg-white focus:ring-2 focus:ring-primary-500/20 transition-colors resize-none"
                  placeholder="Tell us about your concern or question..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary-600 text-white rounded-xl font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t.contact.form.submitting}
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}