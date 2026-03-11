# AGENTS.md

Guidelines for AI coding agents (Codex, Copilot, etc.) working in this repository.

---

## Project Overview

This repository contains the website for **Joel Zamar**, a boutique film and music production studio.

The goal of the site is to present a cinematic landing page with portfolio content and a contact path for potential clients.

The site should feel:

- cinematic
- minimal
- elegant
- dark themed

---

## Tech Stack

This project uses:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel for deployment

---

## Project Structure

/app  
Next.js pages using the App Router.

/components  
Reusable React components used across the site.

/public  
Images, icons, and static assets.

---

## Coding Standards

AI agents should follow these conventions:

- Use **TypeScript**
- Use **React functional components**
- Use **Tailwind CSS for styling**
- Avoid large monolithic components
- Prefer reusable components
- Maintain consistent spacing and typography

Component file names should use **PascalCase**.

Example:

Hero.tsx  
Navbar.tsx  
Portfolio.tsx  
Contact.tsx  

---

## Development Commands

Install dependencies

```
npm install
```

Run development server

```
npm run dev
```

Build production version

```
npm run build
```

---

## UI Guidelines

The site should maintain a cinematic production studio aesthetic:

- dark backgrounds
- large elegant typography
- generous spacing
- subtle hover animations
- minimal interface

---

## When Editing Code

Agents should:

- reuse existing components where possible
- keep components modular
- avoid unnecessary dependencies
- maintain consistent Tailwind styling
- ensure the site builds successfully with `npm run build`

---

## Deployment

The site automatically deploys through **Vercel** when code is pushed to the `main` branch.

Agents should ensure any changes compile successfully before committing.
