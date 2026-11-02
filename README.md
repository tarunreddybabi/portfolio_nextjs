# Tarun Reddy Babireddy — Portfolio

Premium, responsive personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Resume-derived content

The portfolio content is based only on the uploaded resume. The resume lists LinkedIn and Git, but does not include their actual URLs, so no guessed social URLs were added.

## Stack

- Next.js 16.4.3
- React 19.2.0
- TypeScript
- Tailwind CSS 4.3
- Framer Motion 14.9
- Lucide React

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

## Resume

The original uploaded resume is included at `public/resume/Tarun-Reddy-Babireddy-Resume.pdf` and is wired to the Download Resume CTA.

## Contact form

The contact form performs client-side required-field validation and opens the visitor's default email client using a pre-filled `mailto:` message. This keeps the project backend-free while remaining functional.
