# Rodo Lens - Portfolio Website

A modern, animated portfolio website for **Rodo Lens**, a digital content creation business by Divine Agbanibi.

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **Framer Motion** for smooth, professional animations
- **Lenis** for buttery-smooth scrolling
- **Tailwind CSS** for styling
- **Fully Responsive** design (mobile & desktop)
- **Interactive Components** with hover effects and 3D transforms
- **Modal System** for viewing work samples
- **Auto-scrolling Testimonials** carousel
- **Horizontal Parallax Scrolling** services section
- **Animated Statistics** counter

## 📦 Tech Stack

- **Framework:** Next.js 15.5.9
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Modules
- **Animations:** Framer Motion 11.15.0
- **Smooth Scroll:** @studio-freight/lenis 1.0.42
- **Fonts:** Google Fonts (Changa One + Open Sans)

## 🏃‍♂️ Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## 📁 Project Structure

```
rodo-lens/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Header & Footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   └── works/             # Works page
├── components/            # Reusable React components
│   ├── CTAButton/
│   ├── FAQAccordion/
│   ├── Footer/
│   ├── HamburgerMenu/
│   ├── Header/
│   ├── Modal/
│   ├── Services/
│   ├── Testimonials/
│   └── WorkCard/
├── data/                  # Mock data & TypeScript interfaces
│   ├── works.ts
│   ├── testimonials.ts
│   └── faqs.ts
├── hooks/                 # Custom React hooks
│   └── useLenis.ts
└── public/               # Static assets
    ├── images/
    └── videos/
```

## 🎨 Design System

### Colors
- Background: `#000000`
- Text: `#ffffff`
- Accent: `#eb5e28`
- Muted: `#ffffffbf`

### Typography
- **Titles:** Changa One (bold, uppercase)
- **Body:** Open Sans

### Components
- **CTA Buttons:** Hover animation with left-to-right background fill
- **Work Cards:** 3D transform on hover, click to open modal
- **Navigation:** Slide-in hamburger menu with staggered link animations

## 📄 Pages

### Home (`/`)
- Hero section with animated title
- Professional section with scrolling work cards
- Horizontal parallax services section
- Auto-scrolling testimonials carousel

### About Me (`/about`)
- Personal introduction
- Animated statistics counter
- Sample works showcase with sticky title
- CTA to works page

### Works (`/works`)
- Grid of all portfolio items (12 works)
- Responsive layout (3 columns desktop, 2 columns mobile)
- Link to Instagram for more

## 🎭 Animations

- **Page Load:** Sequential header element animations
- **Hero:** Scale-in text with fade effect
- **Work Cards:** Mouse-following 3D transforms
- **Services:** Horizontal parallax scrolling (desktop)
- **Stats:** Counting animation from 0
- **Testimonials:** Auto-scroll with manual controls on hover
- **FAQ:** Smooth expand/collapse accordion
- **Buttons:** Left-to-right background fill on hover

## 📱 Responsive Design

- **Desktop:** Multi-column grids, horizontal scrolling, sticky elements
- **Mobile:** Stacked sections, simplified layouts, touch-friendly
- **Breakpoints:** Optimized for tablets and all screen sizes

## 🔧 Customization

### Update Content

1. **Work Items:** Edit `data/works.ts`
2. **Testimonials:** Edit `data/testimonials.ts`
3. **FAQs:** Edit `data/faqs.ts`

### Replace Placeholder Media

Replace files in:
- `public/images/` - Portfolio images
- `public/videos/` - Portfolio videos

### Update Social Links

Edit links in:
- `components/HamburgerMenu/HamburgerMenu.tsx`
- `components/Footer/Footer.tsx`

## 📝 License

MIT

## 👤 Author

**Divine Agbanibi** - Rodo Lens

---

Built with ❤️ using Next.js, Framer Motion, and Lenis