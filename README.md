# Astro Codix Corporate Website

## Project Overview
Premium, modern, and production-ready corporate website for **Astro Codix**, an enterprise technology solutions company specializing in Odoo ERP, Custom Software, and Digital Transformation.

## Technology Stack
- **Framework**: Astro Framework (Static Site Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Output)
- **Languages**: English (Default) & Arabic (RTL Support)

## Features
- Premium enterprise design with Deep Navy (#0A0F1E), Indigo (#6366F1), and Gold (#FBBF24)
- Responsive layouts for desktop, tablet, and mobile
- SEO-optimized with Sitemap.xml, Robots.txt, and Open Graph metadata
- Language switcher with RTL support for Arabic
- WhatsApp contact integration (USA, Egypt, Kuwait)
- Professional contact form (ready for Formspree integration)
- GitHub Actions deployment workflow
- Custom domain configuration (astrocodix.com)

## Pages
1. [Home](/) - Premium hero, services overview, products, industries, approach
2. [About Us](/about) - Company profile, mission, and vision
3. [Services](/services) - Comprehensive service overview
4. [Odoo ERP Solutions](/odoo) - Implementation, customization, migration
5. [Custom Software Development](/software) - Enterprise systems, automation
6. [Web & Mobile Applications](/apps) - Portals, SaaS, mobile solutions
7. [Digital Transformation](/transformation) - Automation, optimization, strategy
8. [Industries](/industries) - Manufacturing, Retail, Jewelry, Construction, Fashion, Healthcare, Finance, Education
9. [Our Products](/products) - Astro ERP & Astro Gold
   - [Astro ERP](/products/astro-erp) - Proprietary enterprise ERP
   - [Astro Gold](/products/astro-gold) - Jewelry & gold management
10. [Contact Us](/contact) - Professional form & WhatsApp integration

## Local Installation
1. Clone the repository
   ```bash
   git clone https://github.com/astrocodix/webpg.git
   cd webpg
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Access the site
   - Local: http://localhost:4321
   - Preview: https://{port}-{sandboxId}.e2b.app

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build production static site (dist/)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Production Build
Run `npm run build` to generate the static site in the `dist/` directory. The output is fully compatible with GitHub Pages.

## GitHub Repository Setup
1. Ensure the repository is named `astrocodix/webpg`
2. Push changes to the `main` branch (GitHub Actions will trigger)
3. The workflow in `.github/workflows/deploy.yml` will build and deploy

## GitHub Pages Activation
1. Go to Repository Settings > Pages
2. Select "GitHub Actions" as the source
3. Select the `main` branch and `/dist` folder
4. Ensure the CNAME file (`public/CNAME`) contains `astrocodix.com`
5. GitHub Pages will automatically activate after the first deployment

## Custom Domain Configuration
1. Add the CNAME file (`public/CNAME`) with `astrocodix.com`
2. In GitHub Pages settings, set the custom domain to `astrocodix.com`
3. GitHub will provide DNS records (A records and CNAME)

## DNS Records Required
- **A Records**: Point to GitHub Pages IP addresses (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
- **CNAME Record**: `www.astrocodix.com` -> `astrocodix.github.io`
- **TXT Record**: Verification record provided by GitHub

## HTTPS Activation
1. GitHub Pages automatically provides HTTPS via Let's Encrypt
2. Activation typically takes 10-15 minutes after domain configuration
3. Ensure DNS propagation is complete

## Arabic Language Support
- Language switcher in navigation
- RTL layout support (`dir="rtl"`)
- Arabic typography and translation ready
- SEO metadata for Arabic version

## WhatsApp Integration
- Floating WhatsApp button (USA: +1 757 957 7502)
- Country-specific WhatsApp links in contact section
- Prefilled professional messages for each service

## Contact Form Configuration
- Form structure ready for Formspree or similar service
- Fields: Full Name, Business Email, Company Name, Country, Required Service, Project Details
- Validation and success/error states implemented
- Configuration instructions in contact page

## SEO & Performance
- Unique page titles and meta descriptions
- Open Graph metadata and Twitter cards
- Canonical URLs and structured data
- Optimized images and assets
- Lazy loading and responsive navigation
- Mobile-first design and accessibility

## Final Quality Assurance
- Build complete website: `npm run build`
- Test all pages and navigation
- Test desktop, tablet, and mobile layouts
- Test language switching and RTL
- Test WhatsApp links and contact form
- Verify production build in `dist/`
- Verify GitHub Actions configuration
- Verify SEO files (Sitemap.xml, Robots.txt)

## Remaining Configuration
- Connect Formspree or similar service to contact form
- Configure DNS records for custom domain
- Activate GitHub Pages in repository settings
- Provide company credentials for backend integration (if needed)

## License
MIT License
