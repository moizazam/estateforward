# ESTATEforward — Website Development Preview

A responsive Next.js/TypeScript frontend based on the provided ESTATEforward requirements and **the original user-supplied logo** (`public/estateforward-original-logo.png`, cropped from the uploaded reference without redrawing).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. For production build, run `npm run build` then `npm start`.

## Included

- Home page, property catalogue, property detail pages, About, Services, Projects, Agents, Insights, Careers, FAQ, Contact, Privacy and Submit Property.
- Responsive navigation, property cards, category navigation, hero, search, filtering, sorting and mobile layouts.
- Contact and property submission forms that store **only in the browser's localStorage**, with a clearly labeled local demo dashboard at `/dashboard`.
- Original logo extracted from user-provided image; brown/cream/gold theme.

## Not production-ready / remaining development

**This is a frontend MVP, not a deployed full-stack real estate system.** It has no server database, authentication, verified listings, media upload, actual email/WhatsApp sending, admin authorization, agent permissions, CRM, financial ledger, audit logging or payments. All six property listings are clearly labeled illustrative/demo, not real inventory. Unsplash images are visual placeholders and require licensing/approval before production. Forms store locally only and should not be used for sensitive information.

### Proposed backend work

1. PostgreSQL schema: properties, locations, users, roles, agents, media, enquiries, submissions, transactions, ledger, audit events, editorial content.
2. Auth with MFA for privileged users, role-based authorization and secure session handling.
3. Protected media upload and moderation; signed storage URLs.
4. Submission verification, draft/review/approve/publish workflows.
5. Secure lead management and assigned agent follow-ups.
6. Internal CRM, buyer/seller records, transaction history and reconciled ledger after finance rule sign-off.
7. CMS for projects, legal articles, news, FAQs and maps.
8. Consent/privacy notices, anti-spam, backups, monitoring and production QA.

## Required business confirmations

Official brand assets/hex codes; final contact and social links; inventory and project names; exact location taxonomy; who can submit and approve; privacy policy; financial definitions; agent roles; whether charity is informational or transactional.
