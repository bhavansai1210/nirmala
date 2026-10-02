# Nirmala Business Group — Digital Experience Architecture

A production-quality digital presence for Nirmala Business Group in Rajamahendravaram (Rajahmundry), Andhra Pradesh, uniting Nirmala Jewellers, Mamidi Venkataraju Jewellers, and Nirmala Grand Function Hall into a cohesive, editorial luxury experience.

## User Review & Critical Decisions

> [!IMPORTANT]
> The design and technical directions below incorporate the user-confirmed specifications:

- **Confirmed Navigation Paradigm**: Seamless luxury long-scroll with dedicated page views (visitors can fluidly browse the complete story or switch to dedicated focused views for each business with sticky quick-nav).
- **Confirmed Interaction Model**: Interactive modal forms with direct WhatsApp pre-filled action and one-touch phone dispatch, ensuring swift local communication without friction.
- **Confirmed Visual Aesthetic**: Warm ambient lighting paired with South Indian temple jewellery craftsmanship, ivory canvases, deep charcoal contrast, and restrained muted gold accents.
- **Strict Anti-Fabrication Guarantee**: All addresses, phone numbers, and business entities use authentic provided data only; no fake awards, founding years, fabricated testimonials, or unverified amenities.
- **Configurable Hospitality Layer**: A dedicated configuration flag (`showAccommodation: true`) controls the accommodation inquiry section cleanly.

---

## 1. Overview & Core Concept

- **What It Does**: Presents a unified, elegant umbrella brand—**NIRMALA (Jewellers · Celebrations · Hospitality)**—connecting three operating establishments in Rajamahendravaram:
  1. **Nirmala Jewellers** (KVR Swamy Road / Nalla Mandu St)
  2. **Mamidi Venkataraju Jewellers** (Dowlaiswaram / Mangalavaripeta)
  3. **Nirmala Grand Function Hall** (Mangalavaripeta)
- **Target Audience / Persona**: Local and diaspora families, wedding planners, bridal shoppers, and event hosts seeking authentic craftsmanship, heritage trust, and grand event hospitality in the East Godavari region.
- **Key Value**: Replaces fragmented or missing local web presence with a design-agency-grade digital flagship that communicates **Trust, Craftsmanship, Celebration, and Local Presence** within seconds of landing.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **The Hero & Micro-Interaction**: Visitors land on an editorial split composition. Line-by-line typography reveals *"Crafted for celebrations. Built on trust."*, alongside an ambient gold-lit jewellery portrait and celebration overlay.
2. **The Horizontal Business Showcase (01 · 02 · 03)**: Interactive hover strips previewing each destination with animated gold hairline indicators.
3. **Nirmala Jewellers Exploration**: Warm ivory backdrop, large portrait visual, exact location details beside OK Stores, and category strip (Gold, Bridal, Traditional, Everyday, Celebration) with zoom micro-interactions.
4. **Mamidi Venkataraju Jewellers**: High-contrast deep charcoal contrast section representing Dowlaiswaram heritage, distinct typography weighting, and verified store directions.
5. **The Signature Transition (Jewellery → Celebrations)**: A seamless visual bridge where shimmering gold motifs dissolve into warm ambient celebration lighting and grand hall architecture.
6. **Nirmala Grand Function Hall**: Warm beige/deep brown palette, architectural masonry gallery, event categories (Weddings, Receptions, Family Celebrations, Social Gatherings), and guest stay module.
7. **Interactive Rajamahendravaram City Map**: Interactive hub where clicking either of the 3 venues highlights its exact landmark, pinpoints it on a stylized district map, and opens direct Google Maps directions.
8. **Direct Inquiry & Booking Modal**: Allows guests to select an event date, type of occasion, or jewellery consultation, generating a formatted WhatsApp message or direct telephone call to the exact venue desk.

### Visual Identity & Theme
- **Color Palette**:
  - `Ivory` (`#F7F3EC`) — Primary editorial background
  - `Warm White` (`#FCFAF6`) — Structural surfaces and card rests
  - `Charcoal` (`#191816`) — Text and high-contrast nightfall sections
  - `Deep Brown` (`#30261F`) — Celebrations and warm hospitality warmth
  - `Muted Gold` (`#B89B5E`) — Fine lines, accent marks, and active state highlights
  - `Soft Beige` (`#E8DED0`) — Subtle borders and hairline dividers
- **Typography**:
  - Display / Headings: `Cormorant Garamond` (Google WebFont) for timeless, high-fashion editorial presence.
  - Body / Subheadings: `Plus Jakarta Sans` / `Inter` with balanced measure (`65-75ch`) and optical letter-spacing.
- **Mobile Experience**:
  - Full-screen slide navigation with clean category breakdown.
  - Pinned quick-contact action drawer adhering to the 15% viewport limit with immediate Call, WhatsApp, and Directions buttons contextual to the active screen.

---

## 3. Key Product Decisions & Trade-Offs

- **Hybrid View State vs. Disjointed Routing**:
  - *Chosen Approach*: A reactive routing state that provides smooth in-page narrative scrolling while enabling dedicated full-screen views (Home, Nirmala Jewellers, Mamidi Jewellers, Nirmala Grand, About, Locations, Contact) with history support and canonical page headers.
  - *Why*: Gives users who want to read the continuous brand story an unbroken journey, while allowing visitors who search directly for "Nirmala Grand Function Hall" to land directly on the venue view.
- **Centralized Business Configuration (`businesses.ts` & `images.ts`)**:
  - *Chosen Approach*: Single source of truth containing verified phone numbers (`+91 79979 94411`, `+91 883 242 7444`), exact street addresses, coordinate hints, and placeholder image fallbacks.
  - *Why*: Guarantees zero duplication, eliminates drift, and ensures the store owner can easily update phone numbers or swap image URLs in one file.
- **Curated Asset System with Graceful Fallbacks**:
  - *Chosen Approach*: Parallel high-fidelity image asset generation representing South Indian gold temple craftsmanship, bride ornaments, and ambient function hall grandeur, paired with zero-broken-image CSS fallback containers.
  - *Why*: Eliminates dependencies on brittle external stock photography links while delivering bespoke brand imagery.

---

## 4. Technical Architecture & Data Strategy

### System & Component Architecture

```
┌────────────────────────────────────────────────────────────────────────┐
│                          index.html Entry                              │
│         Cormorant Garamond & Jakarta Sans · SEO & JSON-LD Meta         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                             App.tsx                                    │
│       Current View State · Scroll Tracker · Inquiry Modal Manager      │
├───────────────────────────────────┬────────────────────────────────────┤
│                                   │                                    │
│   ┌───────────────────────────────┴────────────────────────────────┐   │
│   │                         Navbar.tsx                             │   │
│   │  Single-line Brand "NIRMALA" · 4 Nav Links · "Visit Us" CTA    │   │
│   │  Scroll-aware compacting & blur background transition          │   │
│   └───────────────────────────────┬────────────────────────────────┘   │
│                                   │                                    │
│   ┌───────────────────────────────▼────────────────────────────────┐   │
│   │                 Active View / Long-Scroll Route                │   │
│   ├────────────────────────────────────────────────────────────────┤   │
│   │ • Hero.tsx (Split editorial · Micro-interaction reveals)       │   │
│   │ • StoryIntro.tsx (Three destinations, one local connection)    │   │
│   │ • BusinessNavStrip.tsx (01 / 02 / 03 interactive hover strip)  │   │
│   │ • NirmalaJewellersSection.tsx (Ivory · 60/40 layout · Details) │   │
│   │ • JewelleryCategoryStrip.tsx (Gold, Bridal, Traditional, etc.) │   │
│   │ • MamidiJewellersSection.tsx (Deep Charcoal · Dowlaiswaram)    │   │
│   │ • VisualTransition.tsx (Gold texture -> Warm light transition) │   │
│   │ • FunctionHallSection.tsx (Deep Brown · Kambham Choultry St)   │   │
│   │ • HallMasonryGallery.tsx (Curated architectural views)         │   │
│   │ • CelebrationsGrid.tsx (Weddings, Receptions, Gatherings)      │   │
│   │ • HospitalitySection.tsx (Configurable stay module)            │   │
│   │ • RajahmundryMapSection.tsx (Interactive 3-point district map) │   │
│   │ • AboutSection.tsx (Verified authentic family heritage prose)  │   │
│   │ • ContactSection.tsx (Direct contact blocks per business)      │   │
│   └───────────────────────────────┬────────────────────────────────┘   │
│                                   │                                    │
│   ┌───────────────────────────────▼────────────────────────────────┐   │
│   │                         Footer.tsx                             │   │
│   │  Large "NIRMALA" wordmark · Categorized columns · Copyright    │   │
│   └───────────────────────────────┬────────────────────────────────┘   │
│                                   │                                    │
│   ┌───────────────────────────────▼────────────────────────────────┐   │
│   │            InquiryModal.tsx & MobileStickyBar.tsx              │   │
│   │  WhatsApp dispatch generator · Direct phone call · Directions  │   │
│   └────────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────┘
```

### Data Models & State Contracts

```typescript
// Single source of truth for business data
export interface BusinessRecord {
  id: 'nirmala-jewellers' | 'mamidi-jewellers' | 'nirmala-grand';
  name: string;
  umbrellaSubtitle: string;
  category: 'Jewellery' | 'Celebrations';
  locationArea: string;
  address: string;
  phone: string;
  displayPhone: string;
  mapsUrl: string;
  landmarks: string;
  showAccommodation?: boolean;
}

// Configurable image dictionary
export interface BrandImageSet {
  heroJewellery: string;
  heroCelebration: string;
  nirmalaJewellers: string;
  mamidiJewellers: string;
  functionHallExterior: string;
  functionHallInterior: string;
  jewelleryCategories: Array<{ title: string; image: string; tag: string }>;
  gallery: Array<{ title: string; category: string; image: string }>;
}
```

### Interactive State Transitions
- **View Switching & Deep Linking**: Clicking any business title in navbar or hero scrolls seamlessly to that anchor or switches into its focused dedicated page mode with zero jumpiness.
- **Inquiry Modal Flow**: User chooses an intent (e.g. *Function Hall Date Availability* or *Bridal Jewellery Consultation*). Filling in Name and Occasion immediately enables pre-formatted WhatsApp chat dispatch directly to `+918832427444` or `+917997994411`, with one-tap phone fallback.
- **District Map Pinning**: Selecting either *KVR Swamy Road*, *Dowlaiswaram*, or *Mangalavaripeta* smoothly pans the map view, illuminates the corresponding card, and updates travel directions.
