# Product

## Register

brand

## Users

Two audiences land here, in roughly equal measure:

- **Recruiters and hiring managers** — scanning fast. Want the resume, work history, a credible project list, and quick proof of seniority. They open the site, decide in seconds, and either read on or close the tab.
- **Engineering peers and potential collaborators** — opening the site after a tweet, GitHub link, or HN post. Want technical writing, source code, dev-tooling cues like `/uses`, and a sense of how the person thinks.

Both groups are technically literate, time-pressed, and skeptical of polished-but-empty portfolios. They reward restraint and punish anything that feels templated.

## Product Purpose

Leonardo's personal site. A canonical place to read his work, see what he's shipped, and decide whether to hire, hire-into-team, or follow him. The site itself is a craft signal: visitors should leave with "this person sweats the details" without anyone saying it out loud.

Success: a recruiter forwards the resume page within 60 seconds. An engineer bookmarks the blog. A founder sends a cold DM about a project.

## Brand Personality

Three words: **precise, restrained, considered.**

Voice in copy is plain, direct, first person. No marketing language, no exclamation points, no em dashes. The site speaks the way a senior engineer writes a clear PR description — short sentences, concrete details, no filler.

The emotional target is **quiet confidence**. Within five seconds of arriving, a visitor should feel: someone who knows exactly what they're doing chose every detail on this page. Nothing is loud, nothing is decorative for its own sake, and yet nothing is generic either.

## Anti-references

Explicitly NOT this site:

- **Generic dev-bro portfolio.** No "Hi, I'm Leonardo 👋" hero. No purple-to-blue gradient name. No spinning avatar. No row of brand-colored social icons. No "Welcome to my portfolio" intro paragraph.
- **SaaS template aesthetic.** No cards-in-cards. No gradient mesh backgrounds. No Inter for everything. No rounded-square icon tile above every heading. No purple primary button.
- **Brittany Chiang clone.** No mint-on-navy single-page resume scroll. No giant left-column sticky bio with right-column timeline. The pattern is recognizable on sight; visitors will assume the rest is also copied.
- **Neon / brutalist / deliberately-ugly.** No oversized accent colors, no terminal-green-on-black, no shock-value typography. Restraint over edge.

Reference direction for the right feel: rauno.me, linear.app marketing pages, vercel.com, paco.me, leerob.io. Not for visual copying — for the register of confidence and craft.

## Design Principles

1. **The site is a work sample.** Every detail is on the record. If a section wouldn't survive a code review of its own design, rewrite it.
2. **Restraint scales further than embellishment.** Adding a color, a divider, or a motion always costs more than removing one. Ask whether removing the element would harm the page before adding anything new.
3. **One axis of emphasis per surface.** A page leans on type, or layout, or color — never all three at once. Pick the axis, commit, let the rest stay quiet.
4. **Show, don't claim.** No "expert in X" copy. Demonstrate seniority via the craft of the page, the writing on the blog, the precision of the resume, and the working links to shipped products.
5. **Read like a person wrote it.** First person, present tense, specific. Plain sentences beat clever ones. No corporate voice ever leaks in.

## Accessibility & Inclusion

Target: **WCAG 2.2 AA across the site.**

- Body text contrast ≥ 4.5:1 against background. Secondary metadata text may sit at 4.5:1 only when it is genuinely secondary (timestamps, tag chips), not for content the visitor must read.
- Visible focus rings on every interactive element. Not the default browser ring on dark surfaces — a custom ring that hits ≥3:1 against the page background.
- Full keyboard navigability. Skip-to-content link is already present and must stay.
- Respect `prefers-reduced-motion`: disable scroll-driven transitions, scale animations, and the reading-progress bar when set.
- Semantic HTML for landmarks (`header`, `nav`, `main`, `article`). No `div`-only structure.
- All decorative images marked `aria-hidden`; all meaningful images carry alt text.
