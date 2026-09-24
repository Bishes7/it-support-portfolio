# Bishes Adhikari — IT Support Portfolio

Personal portfolio site for IT Support / Service Desk roles in Tasmania. Built with Next.js 16 and Tailwind CSS v4.

## Editing content

All text lives in [`app/data.ts`](app/data.ts): profile, skills, experience, solved tickets, labs, certifications.

- Resume: replace `public/Bishes-Adhikari-Resume.pdf` (keep the same name).
- Photo: replace `public/bishes.jpg` and `app/opengraph-image.jpg` (the LinkedIn share preview).
- Lab screenshots: `public/labs/`, referenced from `featuredLab` in `app/data.ts`.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying

Import the GitHub repo into [Vercel](https://vercel.com/new). No settings needed.
If you add a custom domain, set the `NEXT_PUBLIC_SITE_URL` environment variable to it (e.g. `https://bishes.dev`).
