# Smile Dental Clinic Website

A modern, responsive website for **Smile Dental Clinic** located in **Kharghar Sector 10, Navi Mumbai**, featuring Dr. Rajeshwar Bhattacharya.

## Features

- 🌐 **Bilingual Support** - English & Marathi with language toggle
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎨 **Modern Design** - Olive green & orange brand colors with clean aesthetics
- ⚡ **Fast Performance** - Built with Next.js 14, TypeScript, and Tailwind CSS
- 📅 **Online Appointment Booking** - Full booking form with date/time selection
- 📝 **Contact Form** - Enquiry form with validation
- 💬 **WhatsApp Integration** - Direct chat links throughout
- ⭐ **Patient Testimonials** - Carousel with real patient stories
- 🖼️ **Gallery Section** - Clinic facilities showcase
- 🦷 **Comprehensive Services** - 15+ dental services organized by category
- ♿ **Accessible** - WCAG 2.1 AA compliant

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Notifications**: React Hot Toast
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (with Devanagari support)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & Tailwind imports
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Home page composition
├── components/
│   ├── Header.tsx           # Navigation with language toggle
│   ├── Hero.tsx             # Hero section with stats
│   ├── About.tsx            # Doctor profile & credentials
│   ├── Services.tsx         # Services grid with categories
│   ├── Gallery.tsx          # Clinic facilities showcase
│   ├── Testimonials.tsx     # Patient reviews carousel
│   ├── Appointment.tsx      # Booking form (dark theme)
│   ├── Contact.tsx          # Contact info & enquiry form
│   └── Footer.tsx           # Footer with links & social
├── context/
│   └── LanguageContext.tsx  # i18n state management
└── lib/
    ├── i18n.ts              # Locale configuration
    └── translations/
        ├── en.ts            # English translations
        └── mr.ts            # Marathi translations
```

## Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:

```js
colors: {
  primary: { /* Olive green shades */ },
  accent: { /* Orange shades */ },
}
```

### Content

Update translations in:
- `src/lib/translations/en.ts` - English
- `src/lib/translations/mr.ts` - Marathi

### Images

Replace placeholder images in components with actual clinic photos:
- Hero section background
- About section doctor photo
- Gallery items
- Testimonial author photos

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm run start
```

## SEO Features

- Meta tags for all pages
- Open Graph & Twitter cards
- Structured data (JSON-LD) ready
- Sitemap.xml generation ready
- Robots.txt configured
- Semantic HTML5
- Fast Core Web Vitals

## Accessibility

- Semantic HTML structure
- ARIA labels & roles
- Focus management
- Color contrast compliance
- Keyboard navigation
- Screen reader support
- Reduced motion support

## License

Private project for Smile Dental Clinic.

## Contact

**Smile Dental Clinic**
Kharghar Sector 10, Navi Mumbai, Maharashtra 410210
📞 +91 98765 43210
📧 smiledental@kharghar.com