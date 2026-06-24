import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const FEATURED_POSTS: {slug: string; title: string; excerpt: string; category: string}[] = [];
const APP_URL = 'https://crm.leaderhq.io';

export const metadata: Metadata = {
  title: 'For Conferences & Events — LeaderCRM',
  description:
    'Work the room and actually follow up with everyone. LeaderCRM keeps every conference contact organized, reminds you who to call, and syncs with LeaderLeads automatically.',
  alternates: { canonical: '/for-conferences' },
};

const CRM_NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how' },
  { label: 'Pricing', href: '/#pricing' },
];

const CRM_FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'How It Works', href: '/#how' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'System Status', href: 'https://leaderhq.io/status', external: true },
    ],
  },
  {
    heading: 'Leader Suite',
    links: [
      { label: 'LeaderHQ', href: 'https://leaderhq.io', external: true },
      { label: 'LeaderLeads', href: 'https://leaderleads.io', external: true },
      { label: 'LeaderSend', href: 'https://leadersend.io', external: true },
      { label: 'LeaderCal', href: 'https://leadercal.io', external: true },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security & GDPR', href: '/security' },
    ],
  },
];

const STATS: { num: string; label: string }[] = [
  { num: '40', label: 'avg conversations at a 2-day conference' },
  { num: '24h', label: 'warm window before follow-up goes cold' },
  { num: '100%', label: 'of LeaderLeads contacts auto-synced to CRM' },
  { num: '$0', label: 'to get started on the Starter plan' },
];

const FIX_ITEMS: { text: string }[] = [
  { text: 'Every LeaderLeads card scan enters your CRM pipeline automatically — timestamped and organized' },
  { text: 'Follow-up reminders surface who to call Monday morning before the warm window closes' },
  { text: 'Log a call note from the conference floor — it shows up on every device instantly' },
  { text: 'Sunday night triage takes 15 minutes instead of two hours because the work is already done' },
  { text: 'Your contact list is complete and actionable. No one slips through the gap.' },
];

export default function ForConferencesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl={APP_URL} />
      <SiteNav
        productSuffix="CRM"
        links={CRM_NAV_LINKS}
        ctaLabel="Get Started Free"
        ctaHref={`${APP_URL}/signup`}
        loginHref={`${APP_URL}/login`}
      />
      <main className="flex-1">
        <Hero />
        <ProblemFixSection />
        <FollowUpBand />
        <BlogSection />
        <FinalCta />
      </main>
      <SiteFooter productSuffix="CRM" columns={CRM_FOOTER_COLUMNS} />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
        style={{
          background:
            'radial-gradient(80% 520px at 50% -10%, color-mix(in srgb, #06163E 9%, transparent), transparent)',
        }}
      />
      <div className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <FadeIn>
          <span className="inline-flex items-center rounded-full bg-brand-navy px-3 py-1 text-xs font-semibold text-white">
            For Conferences &amp; Events
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-navy sm:text-5xl lg:text-[3.4rem]">
            Work the room.
            <br />
            Follow up with everyone.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
            You meet 40 people over two days. Most attendees follow up with
            four. Here&apos;s the CRM that makes 40 follow-ups manageable — and
            makes sure every one of them gets a response.
          </p>
          <ul className="mt-7 space-y-3 text-base text-zinc-700">
            {[
              { text: 'LeaderLeads contacts flow into your pipeline automatically.' },
              { text: 'Follow-up reminders surface the right person at the right time.' },
              { text: 'Log notes on the conference floor — visible everywhere instantly.' },
              { text: 'Monday morning you have an action list, not a mess to reconstruct.' },
            ].map((item) => (
              <li key={item.text} className="flex items-start gap-2">
                <span className="text-brand-green" aria-hidden>&#10003;</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <a
            href={`${APP_URL}/signup`}
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
          >
            Get Started Free
          </a>
        </FadeIn>
        <FadeIn delay={120}>
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-zinc-100 bg-white p-6 text-center shadow-sm"
              >
                <div className="text-4xl font-extrabold text-brand-navy">
                  {s.num}
                </div>
                <div className="mt-2 text-sm leading-snug text-zinc-600">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ProblemFixSection() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            The conference
            <br />
            follow-up problem.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-zinc-600">
            Sunday night on the flight home: exhausted, 12 first names saved
            imperfectly in your phone, a stack of paper cards from people you
            can&apos;t quite picture, and no system for turning any of it into a
            Monday morning conversation.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            The warm window closes in 24 to 48 hours. By Wednesday you&apos;re
            a stranger. By Friday they&apos;ve moved on entirely.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600">
            Most CRMs make this worse — they require manual data entry from a
            desktop, not a follow-up workflow you can run from your phone while
            still at the venue.
          </p>
        </FadeIn>
        <FadeIn delay={120}>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            The LeaderCRM fix.
          </h2>
          <ul className="mt-5 space-y-3 text-base text-zinc-700">
            {FIX_ITEMS.map((item) => (
              <li key={item.text} className="flex items-start gap-2">
                <span className="text-brand-green" aria-hidden>&#10003;</span>
                <span className="leading-relaxed">{item.text}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

function FollowUpBand() {
  return (
    <section style={{ background: '#06163E' }}>
      <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Never lose a warm lead
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your CRM tells you who to call next.
            <br />
            Every single day.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-zinc-300">
            Set a follow-up reminder once and walk away. LeaderCRM surfaces the
            right contact at the right time — so you never open a blank screen
            wondering who to reach out to.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started Free
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-6 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              How it works &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function BlogSection() {
  if (FEATURED_POSTS.length === 0) return null;
  return (
    <section className="border-t border-zinc-100 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h3 className="text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl">From the blog</h3>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md"
            >
              <span className="self-start rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-brand-green">{post.category.replace('-', ' ')}</span>
              <h4 className="mt-3 text-lg font-bold leading-snug text-brand-navy">{post.title}</h4>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">{post.excerpt}</p>
              <span className="mt-4 text-sm font-semibold text-brand-green">Read more &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section
      className="border-t border-zinc-100"
      style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
    >
      <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Your next conference is your best follow-up test.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
            Show up with a system. Leave with a list. Start LeaderCRM free and
            attend one event — you&apos;ll see the difference immediately.
          </p>
          <a
            href={`${APP_URL}/signup`}
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
          >
            Get Started Free
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
