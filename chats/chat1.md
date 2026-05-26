# TPBS Brand System

_Started 2026-05-26 03:45 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "PROMVIS"
Project is currently empty (no files)
Current date is now May 26, 2026
</system-info>

<default aesthetic>
If no references, art direction or design systems were provided, use this default professional modern, minimal aesthetic as a base. Declare your choice out loud so you stick to it. Guidance:
- Choose a type pairing from web-safe set or Google Fonts. Helvetica is a good choice. Avoid hard-to-read or overly stylized fonts. Use 1-3 fonts only.
- Foreground and background: choose a color tone (warm, cool, neutral, something in-between). Use subtly-toned whites and blacks; avoid saturations above 0.02 for whites.
- Accents: choose 0-2 additional accent colors using oklch. All accents should share same chroma and lightness; vary hue.
- NEVER write out an SVG yourself that's more complicated than a square, circle, diamond, etc.
- For imagery, never hand-draw SVGs; use subtly-striped SVG placeholders instead with monospace explainers for what should be dropped there (e.g. “product shot”)

CRITICAL: ignore default aesthetic entirely if given other aesthetic instructions like reference images, design systems or guidance, or if there are files in the project already.
</default aesthetic>

<pasted_text name="Pasted text (95 lines)">
# PROMVIS Landing Page — Design Prompt

**Use this prompt to brief Claude (or a designer) on the homepage at promvis.io.**

---

## The brief

Design a single-page, responsive marketing homepage for **PROMVIS** — the AI-native financial data platform for Vietnam's capital markets. The site must do three things in one scroll: make a sophisticated buyer (a head of research, CIO, or COO at a Vietnamese securities firm) understand what we are, *feel* that we are a different category of company than the incumbents, and want to talk to us.

This is not a SaaS template. This is the public face of a titan stepping into a market dominated by slow, pre-AI-era players. The page should feel cinematic, confident, and slightly defiant — Bloomberg Terminal meets Anthropic, not Stripe meets HubSpot.

## Who we are

PROMVIS stands for **"Prometheus Vision."** The name is load-bearing: like Prometheus stealing fire from the gods and giving it to humans, we use LLMs to surface insights from financial data that pre-AI systems could never efficiently structure or query. Surface this etymology on the page — it is the moat.

We are AI-native and AI-first. We were built in the AI era. The incumbents in our market (FiinGroup, WiGroup) were built before LLMs existed; their stacks, their schemas, and their org structures are dependencies they cannot shed. We have no such dependencies.

## What we believe

- For thirty years, the most valuable signals in Vietnam's market have lived in footnotes, narrative disclosures, sustainability reports, and regulatory filings — text-heavy data that traditional databases could not efficiently structure, store, or query.
- LLMs can now read what databases cannot.
- The market doesn't need another data feed. It needs an AI that *understands* the data.
- Our foundation is the public data of Vietnam's listed companies — refined into AI-ready form.

## Our products (treat as a product family, not a feature list)

**Oracle** — *Available now. Early access.*
The AI analyst on your desk. Ask anything about a listed Vietnamese company; Oracle answers like your sharpest in-house analyst, grounded in the foundation. Built for securities firms.

**Forge** — *Coming soon.*
Research-grade datasets that don't exist anywhere else, forged from raw corporate disclosures — starting with ESG and sustainability activity of public-listed companies. Built for research firms and institutional investors.

(Reserve visual space for a third "Coming…" placeholder card to signal a roadmap without naming products yet.)

## Early adopter (feature prominently)

**TPBank Securities (TPBS)** — Vietnam's first AI-native securities firm onboard with Oracle. Show the TPBS logo. Leave two or three placeholder logo slots so the section doesn't look thin.

## Visual & tone direction

- **Mood**: dark, premium, energetic, cinematic. A titan in motion, not a startup begging for attention.
- **Motifs**: subtle fire and light — embers, a sweep of amber/gold light across dark, a single Promethean spark. Use restraint; one strong visual idea, not five.
- **Typography**: confident serif headlines (gravitas, intellect) paired with a clean modern sans-serif body.
- **Color palette**: deep charcoal or near-black background, off-white text, single accent in Promethean amber/orange (firelight). Avoid generic fintech blue and avoid Bloomberg orange — find a more refined warm tone.
- **What NOT to use**: rising stock arrows, candlestick charts, stock-photo executives, globes with connecting lines, generic "AI brain" graphics, gradient blobs.

## Page structure

1. **Hero**
   Headline (suggested, iterate freely): *"Prometheus stole fire for humans. We're bringing AI insight to Vietnam's markets."*
   Subline: *"AI-native financial intelligence, built for the post-LLM era."*
   Primary CTA: **Talk to the Oracle →**
   Secondary CTA: **Read our manifesto**

2. **Manifesto** (two or three short paragraphs)
   Articulate the belief: the data was always there, the schemas of the pre-AI era couldn't hold it, LLMs change the equation, and PROMVIS is the company built from day one to exploit that change.

3. **The Foundation**
   A clean visual showing the flow: *raw public disclosures → PROMVIS foundation → product family*. Not a generic data-pipeline diagram; something visually distinctive that signals refinement, like ore into something molten and useful.

4. **Product family** (three cards in a row)
   - **Oracle** — *Available · Early Access* — short description — CTA: Request access
   - **Forge** — *Coming soon* — short description — CTA: Get notified
   - **More in the forge…** — ghost card, signals roadmap

5. **Trusted by**
   "Trusted by Vietnam's most forward-looking institutions." TPBS logo prominent, with 2–3 empty slots for future logos.

6. **Why now / Why us** (three short pillars, no long copy)
   - **Built AI-First** — no legacy stack to defend
   - **Vietnam-Native** — built in Vietnam, for Vietnam's capital markets
   - **Foundation-Driven** — every product sits on the same refined data layer

7. **Footer**
   PROMVIS · Prometheus Vision · Made in Vietnam · contact email · minimal links.

## Must include

- The Prometheus etymology, surfaced explicitly somewhere on the page (likely in or just after the hero).
- TPBS as the named early adopter.
- Oracle (Available) + Forge (Coming) presented as a product family, not features.
- A felt sense that this is a new-era company, not another fintech vendor.

## Must NOT include

- Pricing.
- Feature lists or spec tables. Sell the story, not the specs.
- Generic SaaS testimonial cards with stock-photo headshots.
- "Learn more" and "Get started" CTAs. Use language that fits the brand — "Talk to the Oracle," "Request access," "Get notified."

## Deliverables

A high-fidelity homepage mockup (desktop and mobile), final copy for every section, and a brief style note covering the chosen typography pairing and the exact accent color used for the Promethean amber.

</pasted_text>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Hi-fi design">
Create a high-fidelity, polished design. Follow the instructions about design in your system prompt, particularly the 'How to do design work' section. Use the design_canvas starter component, or make a full-bleed prototype and offer options via Tweaks.
</attached-skill>

<attached-skill name="Interactive prototype">
Create a fully interactive prototype with realistic state management and transitions. Use React useState/useEffect for dynamic behavior. Include hover states, click interactions, form validation, animated transitions, and multi-step navigation flows. It should feel like a real working app, not a static mockup.
</attached-skill>


<system-reminder>Auto-injected reminder (ignore if not relevant): do not recreate copyrighted or branded UI unless the user's email domain matches that company. Create original designs instead.</system-reminder>

## Assistant

_[tool: questions_v2]_

## User

Questions answered:
- scope: Desktop + a mobile companion view
- variations: One direction + Tweaks panel (accent color, hero treatment, density)
- hero_motif: Decide for me
- foundation_viz: Explore a few options
- serif: Decide for me
- sans: Decide for me
- amber: 0
- background: Decide for me
- logos: Typographic 'TPBS' wordmark placeholder, monochrome
- tweaks: Decide for me
- copy: Iterate freely — sharpen, shorten, intensify

## Assistant

_[tool: update_todos]_

_[tool: copy_starter_component]_

_[tool: copy_starter_component]_

_[tool: copy_starter_component]_

I'll commit to the direction now and get building.

**Design system I'm committing to:**
- **Type:** Instrument Serif (display, sharp/editorial) + Be Vietnam Pro (sans body — bonus: built in Vietnam, full diacritic support, ties to the brand story) + JetBrains Mono (technical accents)
- **Palette:** warm charcoal background (slight brown undertone), warm off-white text, single Promethean amber `#e8a04a` (≈ `oklch(0.74 0.13 70)`)
- **Hero motif:** type-led massive serif with a low horizon sweep of amber + single ember spark (restrained, one strong idea)
- **Foundation viz:** I'll build 3 variants and let the user cycle via Tweaks
- **Layout:** design_canvas with two artboards — Desktop (1440-wide) and Mobile (390 in iOS frame) side by side
- **Tweaks:** accent hue, hero motif, foundation viz variant, density, background tone

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: read_file]_

_[tool: write_file]_

Now I'll build. I'll write a custom tall mobile frame (the iOS device frame caps height, but I want the full scroll mockup visible). Single content component, density variants for mobile vs desktop.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: show_html]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Built **PROMVIS Landing.html** — a single-direction hi-fi homepage on a design canvas with desktop + mobile artboards, plus a Tweaks panel.

**Design system committed to**
- **Type:** Instrument Serif (display) + Be Vietnam Pro (body — bonus story tie-in) + JetBrains Mono (technical accents)
- **Palette:** warm charcoal `oklch(0.16 0.008 50)` background, off-white text, single Promethean amber `#e8a04a`
- **Motif:** restrained horizon sweep + single Promethean spark at the hero, picked up again in the etymology callout, CTA strip, and the live-status pill on Oracle

**Page sections** (in scroll order)
Nav → Hero → Etymology (PROM·VIS surfaced explicitly) → Manifesto → The Foundation → Product family (Oracle live · Forge soon · "In the forge" ghost) → Trusted by (TPBS prominent, 3 ghost slots) → Why us (Built AI-First / Vietnam-Native / Foundation-Driven) → CTA → Footer

**Tweaks panel controls**
- Accent (5 amber tones)
- Hero motif (horizon · embers · type-only)
- Foundation viz (Ore → Molten · Columns · Line of light) — also shown side-by-side in a variant gallery section below the landing
- Density (compact · regular · editorial)
- Background tone (warm · black · cool · ink)
- Show/hide mobile companion

**Notes & next steps**
- TPBS is a typographic wordmark placeholder, as requested — drop in the real asset when you have it.
- Stats in the foundation strip (1,600+ companies, 14 yrs history) are placeholders; tell me the real numbers.
- Foundation v0.4 / "last updated 2026.05" in the footer is filler — swap or remove.
- Want me to push further on any single section (a bigger Oracle product showcase with a real query demo, an animated "fire-traveling" foundation viz, a mobile-only nav drawer)?

## User

I changed my mind. The story about Prometheus are not popular in Vietnam. I will only share that secret in direct conversation or a blog hidden somewhere on the website. Revise the page to hide that hidden inception brand story

## Assistant

_[tool: str_replace_edit]_

Pulling the Prometheus story off the public page. Hero gets a new headline, the etymology callout comes out entirely, footer loses "Prometheus Vision." I'll tuck a small "Origin" link in the footer pointing nowhere — that's where the hidden blog can live later.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

The Prometheus story is now off the public page:

- **Hero headline** rewritten: *"Read what databases couldn't. Built for Vietnam's markets."* Subline reframed around AI-native + post-LLM era — no mention of fire or Prometheus.
- **Etymology callout removed** entirely from the page flow.
- **Hero stat rail** now surfaces TPBS instead of the PROM·VIS gloss.
- **CTA strip** headline changed to *"Put the foundation on your desk."*
- **Footer tagline** stripped of "Prometheus Vision." Copyright row no longer carries it either.
- **Footer easter egg:** a quiet, lowercase-faded "ORIGIN" link in the copyright row pointing to `/origin` — that's where the hidden blog can live.
- **Tweaks label** "Promethean amber" → "Accent" (was visible in the Tweaks panel).

The visual identity (amber spark, ember motif, "ore into something molten and useful" framing in the Foundation section) all reads as industrial/refining now, not mythological. Oracle and Forge stay as named — they were locked product names in the brief.

## User

Review all copy writing and search for confirmation online, especially details about years, numbers etc.. For example "For thirty years, the most valuable signals in Vietnam's market" . Go online and search for the number of years Vietnam has stock market

## Assistant

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: web_search]_

_[tool: web_search]_

Found several factual issues. Key ones:

1. **"For thirty years"** — Vietnam's stock market opened **July 28, 2000** (HOSE first trading session). That's ~25 years, not 30. On July 20, 2000, the Ho Chi Minh City Stock Exchange Trading Centre was established, with first trading on July 28th with only two listed stocks.
2. **"1,600+ listed companies"** — overstated for "listed." As of December 2024, a total of 393 companies were listed on the HOSE. The HNX hosts 329 companies as of March 2025. So HOSE+HNX is ~720; ~1,600 only works if you include UPCoM public companies. I'll relabel.
3. **"14 yrs disclosure history"** — arbitrary; 25 yrs matches the market's life.
4. **"LIBOR+250"** in a sample query — LIBOR was phased out in 2023; Vietnam uses SOFR references now.
5. **"SBV circular 06/2024"** — fake number on a real regulator. Generalize.

Fixing now.

_[tool: str_replace_edit]_

_[tool: done]_

Fact-checked and corrected. Here's what I changed and why:

**Manifesto** — "For thirty years" → "For a quarter century." The Ho Chi Minh City Stock Exchange Trading Centre opened on July 20, 2000, with first trading on July 28, 2000 with only two listed stocks. As of 2026 that's 25 years, not 30.

**Foundation stat strip** — completely rebuilt to be defensible:
- "1,600+ listed companies covered" → **"~1,600 public companies indexed · HOSE · HNX · UPCoM"**. As of December 2024, 393 companies were listed on the HOSE, and the HNX hosts 329 companies as of March 2025 — ~720 listed. UPCoM adds another ~900+ public companies. ~1,600 only works if you label it "public companies" and credit all three venues.
- "14 yrs disclosure history" → **"25 yrs · Since the market opened, 2000"** — anchored to the same fact as the manifesto.
- "∞ LLM-readable" → **"VN · Native disclosure language · Vietnamese + English filings"** — replaces a vague claim with a real differentiator that reinforces "Vietnam-Native."
- "100% Public source, fully cited" — kept, added "Never LLM-guessed" footnote.

**Sample queries** in the Foundation viz:
- "LIBOR+250" → **"SOFR+250"** (LIBOR was phased out for new contracts in 2023; SOFR is the current USD reference).
- "SBV circular 06/2024" → **"SBV circular on capital adequacy"** (was a fake circular number on a real regulator).

**Footer** — stripped the placeholder "v 0.4 · last updated 2026.05" to "EARLY ACCESS · 2026."

**Left untouched** (still placeholder, flagging for you):
- TPBS as "Vietnam's first AI-native securities firm" — direct from the brief, your claim to make.
- FiinGroup/WiGroup named in the manifesto — direct from the brief; both predate the LLM era so the claim holds.
- Hanoi/Ba Đình address — placeholder; replace with your real office.
- `founders@promvis.io` — placeholder email.

## User

remove names of competitors, find common nouns to refer to them as old schooled incumbents
correct email is oracle@promvis.io

## Assistant

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: done]_

Done.

- **Manifesto:** "The incumbents — FiinGroup, WiGroup —" → **"The pre-LLM incumbents who still define this market"** (common-noun, no names).
- **Email:** all three instances of `founders@promvis.io` swapped to `oracle@promvis.io`, and the CTA-strip button is now a real `mailto:` link.

## User

the app for clients to try Oracle is at oracle.promvis.io . But this is invite only, we created account for customer and share with them, they can only login if they have invitation. How should we handle this flow from our landing page? We still need to gather the email of new people who want to access the product

## Assistant

_[tool: write_file]_

Good question — two distinct visitors land here, and they need different doors. Let me show you what I'd do, then build it.

**The flow**

```
                                     ┌───────────────────────────────┐
                                     │  visitor lands on promvis.io  │
                                     └───────────────┬───────────────┘
                                                     │
                                ┌────────────────────┴────────────────────┐
                                │                                         │
                  ┌─────────────▼─────────────┐         ┌─────────────────▼─────────────────┐
                  │  Already invited          │         │  New prospect                     │
                  │  (has account)            │         │  (wants access)                   │
                  └─────────────┬─────────────┘         └─────────────────┬─────────────────┘
                                │                                         │
                  Quiet "Sign in →" link in nav            Primary CTAs open access-request
                  +  small "already invited?" line          modal: email + firm + role + why
                  below hero CTAs                           → success: "we onboard a handful
                                │                            of firms each month, by hand"
                                ▼                                         │
                       oracle.promvis.io  (login)                         ▼
                                                          email captured → your team triages
                                                          → you create the account on
                                                          oracle.promvis.io and email them
```

**Three concrete things to add**
1. **Nav:** quiet "Sign in →" link routing to `oracle.promvis.io`
2. **Hero / Forge / CTA-strip buttons** open an **Access Request modal** (email, firm, role, short "why"), with curated success state that sets expectations ("we onboard a handful of firms each month")
3. **Below every primary CTA:** tiny "Already invited? Sign in at oracle.promvis.io →" link so existing customers never get stuck filling out the form by mistake

Building it now.Now wire it in — Nav gets a "Sign in" link, CTAs open the modal, hero gets the "already invited?" line.

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: grep]_

_[tool: str_replace_edit]_

_[tool: done]_

_[tool: fork_verifier_agent]_

Wired up. Here's the flow:

**For existing invitees (they have an account)**
- Quiet `SIGN IN ↗` link in the nav (mobile + desktop), routing straight to `oracle.promvis.io`
- A small `ALREADY INVITED? Sign in at oracle.promvis.io →` line directly under the hero CTAs, under the CTA-strip, and inside the access modal itself — so they never get stuck on the form by accident

**For new prospects (they need to leave their email)**
- Every primary "Talk to the Oracle" / "Request access" / "Get notified" button now opens an **Access Request modal** instead of jumping to `#contact`
- Form fields: Name, Work email (validated), Firm, Role (Head of Research / CIO / PM / Analyst / COO / Other), and an optional 1–2 line "Why Oracle, why now?"
- Forge cards open the same modal in a "Forge waitlist" variant (different copy, "Dataset of interest" instead of "why")
- Submit → animated 900ms "Sending…" → success state with:
  - Curated expectation-set: *"Oracle is curated. We onboard a handful of firms each month, by hand. Expect a note from oracle@promvis.io within three business days."*
  - A monospace receipt panel showing `REF / FIRM / PRODUCT / REPLY-BY`
  - The "already invited?" escape hatch again

**Mock submit** — currently fakes the send with a setTimeout. When you have a real endpoint (Formspree, your own API, Notion, etc.), the wire-up point is the `submit` handler in `access-modal.jsx` — that's the one place to swap.

**Open question:** how should the form behave if someone enters an email that's already invited (an existing customer who fills the form by mistake)? Two options — (a) just thank them and route to `oracle.promvis.io`, or (b) detect it server-side and email them their existing login. Worth deciding before backend wiring.

## User

Verifier agent check completed

## Assistant

Verifier confirmed the access modal flow works end-to-end. Ready for the next move.

