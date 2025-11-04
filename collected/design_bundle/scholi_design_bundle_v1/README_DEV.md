
Scholi Design Bundle v1.0 - Developer Handoff

Folders:
- scholi.fig                 -> Figma file (flat frames)
- scholi_figma_export.json   -> JSON export summary
- design-tokens.json         -> tokens for colors/typography
- mockups/light, mockups/dark -> PNG mockups (1920x1080)
- branding/                  -> logos, icons, manifest
- scholi_design_system.pdf   -> A4 PDF design summary
- scholi_installation_plan.pdf -> A4 installation steps for non-technical users

How to use tokens in Tailwind:
- Map design-tokens.json colors to tailwind config:
  theme.extend.colors.primary = tokens.colors.light.primary

Integrating assets in React:
- Place SVG logos in /src/assets/icons
- Use favicon.ico in public folder
- App icons for mobile in respective native project folders

Backend integration:
- Use the NestJS + Prisma API endpoints provided earlier
- Configure AUTH: store JWT in localStorage under 'sc_token' and send Authorization header

