# Receipts of a Life

## WebRush 6-Hour Frontend Hackathon

**Author:** Sejal N Khimani  
**Repository:** SEJUNK/FE_New  
**Application:** Receipts of a Life

### Problem

The organizer supplied three fragmented datasets covering different parts of the same period:

- **Spotify listening history** — 149,860 source records
- **Daily household transactions** — 2,461 source records
- **Augmented India transactions / card activity** — 9,417 source records used by the application

Together, the supplied records represented **161,738 source records**.

The challenge is not simply to display those records. It is to make connections across different record types and help a user explore how fragmented digital traces can form a coherent timeline.

### Solution

**Receipts of a Life** is a frontend-only interactive archive that:

1. Normalizes the supplied records into a curated set of **5,531 fragments**.
2. Groups fragments into chapters across 2013–2024.
3. Finds connections between fragments using observable signals such as shared dates, nearby times, places, categories, subtitles and tags.
4. Surfaces recurring patterns and moments where multiple record types overlap.
5. Lets the user search, filter, inspect evidence and follow discovered threads.
6. Visualizes record density over time while allowing the three source layers to be compared independently.

The core transformation is:

**161,738 source records → 5,531 curated fragments → discovered threads → chapters + patterns**

The 5,531 figure refers to the application's curated fragment layer; it is not presented as another raw source-record count.

## What the experience contains

### Overture
The landing experience introduces the archive as a visual narrative rather than a conventional dashboard.

### Fragments and threads
Individual fragments can be opened as evidence. The thread view uses deterministic, data-backed connection signals to surface related records.

### Time and source layers
The timeline shows monthly record density from 2013–2024. Spotify, household and India/card activity can be toggled independently.

### Chapters
The archive is divided into six chronological chapters. Chapter text is based on measurable activity in the supplied data.

### Patterns
The patterns view highlights measurable distributions such as listening hour, weekday shape, spending categories, artist repetition and recurring places.

### Explore
Users can search the curated fragments, filter by type/chapter/late-night activity, inspect individual records and follow their connections.

## Data handling

All application data is processed in the browser.

No custom backend, application database, authentication service or server-side business logic is required by the application.

The curated dataset intentionally avoids exposing sensitive source identifiers such as full card numbers, customer IDs, dates of birth or precise personal address information. The interface focuses on useful analytical fields such as record type, date, category, city/place and amount where appropriate.

## Architecture

- **React 19**
- **TypeScript**
- **TanStack Start / TanStack Router**
- **Vite**
- **Tailwind CSS**
- **Lucide React**
- **Recharts / lightweight custom visualizations**
- Static curated JSON data processed client-side

### Performance approach

The application builds client-side indexes for frequently used relationships:

- record type
- year
- chapter
- day
- place
- subtitle/category
- tag
- searchable text

Thread discovery therefore uses targeted candidate sets instead of scanning all 5,531 fragments for every relationship.

Search is debounced and progressively renders the archive in batches rather than mounting every matching row at once.

## Accessibility and responsive design

The application includes:

- semantic main and navigation landmarks
- skip-to-content link
- keyboard-visible focus states
- aria-pressed state for interactive filters and source layers
- accessible labels for timeline controls
- mobile dialog semantics for fragment details
- focus management for the mobile evidence panel
- reduced-motion support
- responsive layouts for narrow and wide screens
- horizontally scrollable treatment for dense timeline data where necessary

The visual timelines are accompanied by textual labels and summaries so the information is not dependent only on color or hover interaction.

## Privacy-conscious presentation

The source datasets contain fields that are not necessary for the storytelling experience. The UI does not intentionally expose full sensitive identifiers. Aggregated and contextual representations are used where possible.

## Local development

Requirements:

- Node.js
- npm

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

## Submission notes

This repository contains the frontend implementation for the WebRush hackathon submission. The application is designed to run entirely in the browser using the organizer-provided datasets and a curated fragment layer.

No backend or persistent application database is required.