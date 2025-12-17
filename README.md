# Bold in Magenta - Manifest369 Landing Page

A beautiful Next.js website for the Manifest369 app - a manifestation tool designed to help users practice the 369 manifestation method.

## Features

- 🎨 Beautiful gradient design with bold magenta/pink color scheme
- 📱 Responsive layout showcasing the Manifest369 mobile app
- ✨ Multiple sections: Hero, Features, Gallery, Pricing, and Download
- 🎯 Built with Next.js 14, TypeScript, and Tailwind CSS
- 🚀 Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
bold-magenta/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main landing page component
│   └── globals.css      # Global styles and Tailwind imports
├── public/              # Static assets
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Visit [vercel.com](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy"

Your site will be live in minutes with automatic HTTPS and global CDN!

### Option 3: Deploy Button

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPOSITORY_URL)

## Environment Variables

No environment variables are required for this project. All images are loaded from Figma's CDN.

## Customization

### Colors

The main brand colors are defined in `tailwind.config.ts`:
- Main Pink: `#FF31D2`
- Light Pink: `#FFC9D6`

### Fonts

The project uses the following Google Fonts:
- Roboto (body text)
- Darker Grotesque (headings)
- Codystar (decorative text)
- Gloria Hallelujah (logo)

These are loaded in `app/globals.css`.

### Content

To update the content, edit the `app/page.tsx` file. The component is organized into clearly marked sections:
- Hero Section
- What You Get Section
- Info List Block
- Gallery Section
- Download Section
- Footer

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe code
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - UI library

## Performance

This website is optimized for performance with:
- Server-side rendering (SSR)
- Automatic code splitting
- Optimized image loading from CDN
- Minimal JavaScript bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Bold in Magenta and the Manifest369 app.

## Support

For questions or issues, please contact support through the app or website.

---

Built with ❤️ using Next.js and Figma
