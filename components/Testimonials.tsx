'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: { en: 'Priya Sharma', mr: 'प्रिया शर्मा' },
    location: { en: 'Kharghar Sector 10', mr: 'खारघर सेक्टर १०' },
    rating: 5,
    text: {
      en: 'Dr. Rajeshwar is incredibly gentle and thorough. My root canal treatment was completely painless! The clinic is modern, clean, and the staff is very friendly. Highly recommended for anyone in Kharghar.',
      mr: 'डॉ. राजेश्वर अतिशय कोमल आणि गूढ आहे. माझं रूट कॅनल उपचार पूर्णपणे पीडारहित होते! क्लिनिक आधुनिक, स्वच्छ आहे आणि स्टाफ खूप मैत्रीपूर्ण आहे. खारघरातील सर्वांसाठी अत्यधिक शिफारस.',
    },
    treatment: { en: 'Root Canal Treatment', mr: 'रूट कॅनल उपचार' },
  },
  {
    id: 2,
    name: { en: 'Amit Patel', mr: 'अमित पटेल' },
    location: { en: 'Kharghar Sector 12', mr: 'खारघर सेक्टर १२' },
    rating: 5,
    text: {
      en: 'Best dental clinic in Navi Mumbai! Got my teeth whitening done and the results are amazing. Dr. Bhattacharya explained everything clearly and made me feel comfortable throughout. Will definitely return for regular checkups.',
      mr: 'नवी मुंबईमध्ये सर्वोत्तम दंत क्लिनिक! माझे दंत धुवून काढणे झाले आणि परिणाम चांगले आले. डॉ. भट्टाचार्याने सर्वकाही स्पष्टपणे सांगितले आणि मला सगळ्यावेळ सुखद वाटले. निःसंशय पुन्हा नियमित तपासणीसाठी येईन.',
    },
    treatment: { en: 'Teeth Whitening', mr: 'दंत धुवून काढणे' },
  },
  {
    id: 3,
    name: { en: 'Sneha Deshmukh', mr: 'स्नेहा देशमुख' },
    location: { en: 'Panvel', mr: 'पनवेल' },
    rating: 5,
    text: {
      en: 'Took my 5-year-old for her first dental visit. Dr. Rajeshwar was so patient and kid-friendly! The pediatric corner kept her entertained. She didn\'t cry at all and now says she wants to be a dentist. Amazing experience!',
      mr: 'माझी ५ वर्षीय मुलीला पहिल्यांदा दंत तपासणीसाठी घेऊन गेलो. डॉ. राजेश्वर खूप धैर्यशील आणि बाल-हितैषी आहेत! बाल कोपरााने तिला मनोरंजन केले. ती एकदाही रडली नाही आणि अजून ती डॉक्टर बनायचा म्हणते. चमत्कारिक अनुभव!',
    },
    treatment: { en: 'Pediatric Check-up', mr: 'बाल तपासणी' },
  },
  {
    id: 4,
    name: { en: 'Rajesh Kumar', mr: 'राजेश कुमार' },
    location: { en: 'Kharghar Sector 8', mr: 'खारघर सेक्टर ८' },
    rating: 5,
    text: {
      en: 'Had dental implants done here after researching many clinics. The digital planning and precision was impressive. 3 months post-surgery and everything feels completely natural. Worth every penny for the quality of care.',
      mr: 'अनेक क्लिनिक्सचे संशोधन करून यथे दंत इम्प्लॅंट्स केले. डिजिटल नियोजन आणि सुचूचता प्रभावी होते. ३ महिन्यांनंतर सर्वकाही पूर्णपणे नैसर्गिक वाटते. काळजीत गुणवत्तेसाठी पैसा वसूल.',
    },
    treatment: { en: 'Dental Implants', mr: 'दंत इम्प्लॅंट्स' },
  },
  {
    id: 5,
    name: { en: 'Kavya Nair', mr: 'काव्या नायर' },
    location: { en: 'CBD Belapur', mr: 'सीबीडी बेलापूर' },
    rating: 5,
    text: {
      en: 'Got veneers for my front teeth and my smile is transformed! The digital smile design let me preview the results before starting. Dr. Bhattacharya\'s artistic eye and technical skill are exceptional. So happy with my new smile!',
      mr: 'माझ्या अगोदर दंतांसाठी व्हिनिअर्स घेतले आणि माझं हास्य रूपांतरित झालं! डिजिटल स्माइल डिझाइनमुळे सुरुवातीच्या आधी परिणाम पहायला मिळाले. डॉ. भट्टाचार्यांचे कलात्मक दृष्टी आणि तांत्रिक कौशल अपूर्व आहे. माझं नवीन हास्यबद्दल खूप आनंद!',
    },
    treatment: { en: 'Veneers & Smile Design', mr: 'व्हिनिअर्स आणि स्माइल डिझाइन' },
  },
  {
    id: 6,
    name: { en: 'Vikram Singh', mr: 'विक्रम सिंह' },
    location: { en: 'Kharghar Sector 10', mr: 'खारघर सेक्टर १०' },
    rating: 5,
    text: {
      en: 'Emergency extraction on a Sunday - they accommodated me immediately! The procedure was quick and painless. Post-op care instructions were clear and follow-up was excellent. True professionals who care about patients.',
      mr: 'रविवारला आपत्कालीन दंत निघालणे - त्यांनी मला त्वरित स्विकारले! प्रक्रिया द्रुत आणि पीडारहित होती. शल्यक्रियानंतरची काळजी स्पष्ट होती आणि फॉलो-अप चांगले होते. रुग्णांची काळजी घेणारे खरे व्यावसायिक.',
    },
    treatment: { en: 'Emergency Extraction', mr: 'आपत्कालीन दंत निघालणे' },
  },
];

export default function Testimonials() {
  const { t, locale } = useLanguage();
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-neutral-50">
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
            {t.testimonials.subtitle}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-lg text-neutral-600">
            Real stories from our happy patients in Kharghar and Navi Mumbai
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list" aria-label="Patient testimonials">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100 hover:shadow-xl transition-all duration-300 relative"
                role="listitem"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary-200 absolute top-6 right-6" aria-hidden="true" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-accent-400 fill-current' : 'text-neutral-300'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-neutral-600 leading-relaxed mb-6 relative z-10">
                  &ldquo;{testimonial.text[locale]}&rdquo;
                </blockquote>

                {/* Patient Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-heading font-bold text-lg">
                      {testimonial.name[locale].charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-neutral-900">
                      {testimonial.name[locale]}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-neutral-500">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{testimonial.location[locale]}</span>
                    </div>
                  </div>
                </div>

                {/* Treatment Badge */}
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">
                    <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    {testimonial.treatment[locale]}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-all shadow-sm"
              aria-label="Previous testimonials"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center gap-2" aria-label="Carousel indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={index === currentIndex ? 'true' : 'false'}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-primary-50 hover:border-primary-200 hover:text-primary-600 transition-all shadow-sm"
              aria-label="Next testimonials"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Google Reviews Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-6 bg-white rounded-2xl shadow-lg border border-neutral-100">
            <div className="flex items-center gap-1">
              <Star className="w-6 h-6 text-accent-400 fill-current" aria-hidden="true" />
              <Star className="w-6 h-6 text-accent-400 fill-current" aria-hidden="true" />
              <Star className="w-6 h-6 text-accent-400 fill-current" aria-hidden="true" />
              <Star className="w-6 h-6 text-accent-400 fill-current" aria-hidden="true" />
              <Star className="w-6 h-6 text-accent-400 fill-current" aria-hidden="true" />
            </div>
            <div className="border-l border-neutral-200 px-6">
              <p className="font-heading text-3xl font-bold text-neutral-900">4.9</p>
              <p className="text-sm text-neutral-500">Google Rating</p>
            </div>
            <div className="border-l border-neutral-200 px-6">
              <p className="font-heading text-3xl font-bold text-neutral-900">200+</p>
              <p className="text-sm text-neutral-500">Reviews</p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              View on Google
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}