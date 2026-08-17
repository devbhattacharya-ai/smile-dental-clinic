'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, CheckCircle, Star, Shield, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: '15+', label: t.about.experience, icon: Clock },
    { value: '5000+', label: t.about.patients, icon: Star },
    { value: '10000+', label: t.about.procedures, icon: CheckCircle },
    { value: '4.9/5', label: t.about.rating, icon: Shield },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236b9047%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-5 w-24 h-24 bg-primary-300/20 rounded-full blur-2xl animate-bounce delay-500" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span>Now Accepting New Patients</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight mb-6"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-neutral-600 mb-8 max-w-xl"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-12"
            >
              <Link
                href="#appointment"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#services"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-full font-medium border-2 border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 shadow-md"
              >
                {t.hero.ctaSecondary}
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-sm border border-neutral-100">
                    <stat.icon className="w-5 h-5 text-primary-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xl text-neutral-900">{stat.value}</p>
                    <p className="text-sm text-neutral-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl" />
                <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl border border-neutral-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-neutral-900 mb-2">Modern Dental Clinic</h3>
                    <p className="text-neutral-600">State-of-the-art facility in Kharghar</p>
                  </div>
                </div>

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-48 bg-white rounded-xl shadow-xl p-4 border border-neutral-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-100 flex items-center justify-center">
                      <Star className="w-5 h-5 text-accent-500" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">4.9/5 Rating</p>
                      <p className="text-sm text-neutral-500">Google Reviews</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-56 bg-white rounded-xl shadow-xl p-4 border border-neutral-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">Same Day</p>
                      <p className="text-sm text-neutral-500">Appointments Available</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute top-1/2 -right-6 w-44 bg-white rounded-xl shadow-xl p-4 border border-neutral-100 transform -translate-y-1/2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">Painless</p>
                      <p className="text-sm text-neutral-500">Treatment Guarantee</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}