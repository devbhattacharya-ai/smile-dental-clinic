'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Calendar, Clock, User, Phone, Mail, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
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

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
  '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM',
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

export default function Appointment() {
  const { t, locale } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const selectedDate = watch('date');
  const selectedService = watch('service');

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      toast.success(t.appointment.form.success);
      reset();
    } catch {
      setSubmitStatus('error');
      toast.error(t.appointment.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const minDate = new Date().toISOString().split('T')[0];
  const maxDate = new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  return (
    <section id="appointment" className="py-20 lg:py-32 bg-primary-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />

      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/95 to-primary-900/95" />

      {/* Floating Decorations */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-700/50 text-accent-400 text-sm font-medium mb-6 border border-primary-600">
              <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
              {t.appointment.subtitle}
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t.appointment.title}
            </h2>

            <p className="text-primary-200 text-lg mb-10 leading-relaxed max-w-xl">
              Schedule your visit at your convenience. We offer flexible timings and same-day appointments for emergencies.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {[
                { icon: CheckCircle, text: { en: 'Flexible scheduling (9 AM - 8 PM)', mr: 'लवचिक वेळेटेबल (सकाळी ९ - सायं ८)' } },
                { icon: Clock, text: { en: 'Same-day emergency appointments', mr: 'उद्याच दिवशी आपत्कालीन अॅपॉइंटमेंट्स' } },
                { icon: User, text: { en: 'Online booking confirmation via WhatsApp', mr: 'व्हॉट्सअॅपद्वारे ऑनलाइन बुकिंग पुष्टी' } },
                { icon: Calendar, text: { en: 'Reminder notifications before visit', mr: 'भेटीपूर्वी स्मरण दिले जाते' } },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex items-center gap-4 text-primary-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-700/50 flex items-center justify-center border border-primary-600">
                    <benefit.icon className="w-5 h-5 text-accent-400" aria-hidden="true" />
                  </div>
                  <span>{benefit.text[locale]}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Quick Actions */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 bg-accent-500 text-white rounded-xl font-medium hover:bg-accent-600 transition-all shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Booking</span>
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 px-5 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all border border-white/20 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5" />
                <span>Call to Book</span>
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 sm:p-8">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">Appointment Requested!</h3>
                  <p className="text-primary-300 mb-6">We'll confirm your appointment within 30 minutes via WhatsApp or call.</p>
                  <button
                    onClick={() => { reset(); setSubmitStatus('idle'); }}
                    className="px-6 py-3 bg-accent-500 text-white rounded-full font-medium hover:bg-accent-600 transition-colors"
                  >
                    Book Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-200 mb-2">
                      {t.appointment.form.name} <span className="text-accent-400">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" aria-hidden="true" />
                      <input
                        {...register('name', { required: 'Name is required' })}
                        id="name"
                        type="text"
                        className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border ${
                          errors.name ? 'border-red-500' : 'border-white/10 focus:border-accent-500'
                        } text-white placeholder:text-primary-400 focus:ring-2 focus:ring-accent-500/20 transition-colors`}
                        placeholder="Your full name"
                        aria-invalid={errors.name ? 'true' : 'false'}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-400" role="alert">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-200 mb-2">
                        {t.appointment.form.email} <span className="text-accent-400">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" aria-hidden="true" />
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
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border ${
                            errors.email ? 'border-red-500' : 'border-white/10 focus:border-accent-500'
                          } text-white placeholder:text-primary-400 focus:ring-2 focus:ring-accent-500/20 transition-colors`}
                          placeholder="your@email.com"
                          aria-invalid={errors.email ? 'true' : 'false'}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400" role="alert">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary-200 mb-2">
                        {t.appointment.form.phone} <span className="text-accent-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" aria-hidden="true" />
                        <input
                          {...register('phone', { required: 'Phone is required' })}
                          id="phone"
                          type="tel"
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border ${
                            errors.phone ? 'border-red-500' : 'border-white/10 focus:border-accent-500'
                          } text-white placeholder:text-primary-400 focus:ring-2 focus:ring-accent-500/20 transition-colors`}
                          placeholder="+91 98765 43210"
                          aria-invalid={errors.phone ? 'true' : 'false'}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-400" role="alert">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-primary-200 mb-2">
                      {t.appointment.form.service} <span className="text-accent-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        {...register('service', { required: 'Please select a service' })}
                        id="service"
                        className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-accent-500 text-white appearance-none focus:ring-2 focus:ring-accent-500/20 transition-colors"
                        style={{
                          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%239ca3af%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E")',
                          backgroundPosition: 'right 1rem center',
                          backgroundSize: '1.5rem',
                        }}
                      >
                        <option value="">{t.appointment.form.service}</option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {serviceTranslations[s]?.[locale] || s}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-400" role="alert">{errors.service.message}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-primary-200 mb-2">
                        {t.appointment.form.date} <span className="text-accent-400">*</span>
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" aria-hidden="true" />
                        <input
                          {...register('date', { required: 'Date is required' })}
                          id="date"
                          type="date"
                          min={minDate}
                          max={maxDate}
                          className={`w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border ${
                            errors.date ? 'border-red-500' : 'border-white/10 focus:border-accent-500'
                          } text-white focus:ring-2 focus:ring-accent-500/20 transition-colors`}
                          aria-invalid={errors.date ? 'true' : 'false'}
                        />
                      </div>
                      {errors.date && (
                        <p className="mt-1 text-sm text-red-400" role="alert">{errors.date.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-primary-200 mb-2">
                        {t.appointment.form.time} <span className="text-accent-400">*</span>
                      </label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-400" aria-hidden="true" />
                        <select
                          {...register('time', { required: 'Please select a time' })}
                          id="time"
                          className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-accent-500 text-white appearance-none focus:ring-2 focus:ring-accent-500/20 transition-colors"
                          style={{
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 24 24%27 stroke=%27%239ca3af%27%3E%3Cpath stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M19 9l-7 7-7-7%27/%3E%3C/svg%3E")',
                            backgroundPosition: 'right 1rem center',
                            backgroundSize: '1.5rem',
                          }}
                        >
                          <option value="">{t.appointment.form.time}</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                      {errors.time && (
                        <p className="mt-1 text-sm text-red-400" role="alert">{errors.time.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-200 mb-2">
                      {t.appointment.form.message}
                    </label>
                    <textarea
                      {...register('message')}
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-accent-500 text-white placeholder:text-primary-400 focus:ring-2 focus:ring-accent-500/20 transition-colors resize-none"
                      placeholder="Any specific concerns, preferred doctor, or additional notes..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent-500 text-white rounded-xl font-medium hover:bg-accent-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        {t.appointment.form.submitting}
                      </>
                    ) : (
                      <>
                        {t.appointment.form.submit}
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-sm text-primary-400">
                    By submitting, you agree to our privacy policy and consent to be contacted regarding your appointment.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}