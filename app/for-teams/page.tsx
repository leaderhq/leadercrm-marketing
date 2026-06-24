import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon, type MarketingIconName } from '../_marketing/icons';

const FEATURED_POSTS: {slug: string; title: string; excerpt: string; category: string}[] = [];
const APP_URL = 'https://crm.leaderhq.io';

export const metadata: Metadata = {
  title: 'For Teams — LeaderCRM',
  description:
    'One CRM for every rep. See what your whole downline is working on, coach the deals that need attention, and grow your team without losing visibility.',
  alternates: { canonical: '/for-teams' },
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

export default function ForTeamsPage() {
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
        <Includes />
        <Pricing />
        <BlogSection />
        <FinalCta />
      </main>
      <SiteFooter productSuffix="CRM" columns={CRM_FOOTER_COLUMNS} />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: '#06163E' }}
    >
      <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
            For Sales Teams
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
            One CRM. Every rep.
            <br />
            One view of everything.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            LeaderCRM gives every member of your organization a personal pipeline
            — and gives leadership real-time visibility into every contact they
            manage in the field.
          </p>
          <div className="mt-8">
            <Link
              href="/pricing"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-md shadow-black/30 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See team pricing &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const TEAM_FEATURES = [
  'Full CRM for every rep in your organization',
  'Custom pipeline stages that match how your team sells',
  'Team activity feed — see who each rep is working',
  'Downline CRM view — coach the deals that need attention',
  'Call logging and notes visible to the whole team',
  'LeaderLeads sync — every card scan flows into the rep\'s pipeline',
  'LeaderSend integration for email follow-up from the contact record',
  'Onboarding in minutes per rep — no training required',
];

const TEAM_FITS: { icon: MarketingIconName; title: string; body: string }[] = [
  {
    icon: 'handshake',
    title: 'MLM / Direct Sales Organizations',
    body: 'Put your whole downline on LeaderCRM. Every rep manages their own pipeline, you see all of it from a single downline view. Coach the reps who need it based on data, not gut feeling.',
  },
  {
    icon: 'home',
    title: 'Summer Sales & D2D Companies',
    body: '200 reps on the doors. Real-time pipeline data without self-reporting. Manager visibility into field activity without a weekly call or spreadsheet.',
  },
  {
    icon: 'tent',
    title: 'Conference & Trade Show Teams',
    body: 'Every rep at your booth has their own pipeline. LeaderLeads feeds contacts automatically. Coaching flags alert you when a contact goes cold. You leave the show knowing who owns which follow-up.',
  },
];

function Includes() {
  return (
    <section className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            What the Executive plan includes
          </h2>
          <ul className="mt-6 space-y-3 text-base text-zinc-700">
            {TEAM_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <span
                  className="mt-0.5 shrink-0 text-brand-green text-base font-bold"
                  aria-hidden
                >
                  &#10003;
                </span>
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={120}>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Built for these teams
          </h2>
          <div className="mt-6 space-y-4">
            {TEAM_FITS.map((t) => (
              <div
                key={t.title}
                className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <MarketingIcon name={t.icon} size={24} />
                </div>
                <h3 className="mt-3 text-base font-bold text-brand-navy">
                  {t.title}
                </h3>
                <p className="mt-2 leading-relaxed text-zinc-600">{t.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

interface Plan {
  name: string;
  price: string;
  cadence: string;
  note?: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    note: 'Up to 250 contacts',
    features: [
      'Contact management',
      'Basic pipeline (3 stages)',
      'Follow-up reminders',
      'LeaderLeads sync',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Growth',
    price: '$22',
    cadence: '/mo',
    note: 'Unlimited contacts',
    features: [
      'Everything in Starter',
      'Custom pipeline stages',
      'Team activity feed',
      'Call logging & notes',
      'LeaderSend integration',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Executive',
    price: '$45',
    cadence: '/mo',
    note: 'For serious leaders',
    features: [
      'Everything in Growth',
      'Downline CRM view',
      'Coaching flags & alerts',
      'Advanced reporting',
      'Priority support',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
];

function Pricing() {
  return (
    <section
      className="border-y border-zinc-100"
      style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
    >
      <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Team pricing that scales.
          </h2>
        </FadeIn>
        <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-3">
          {PLANS.map((plan, i) => (
            <FadeIn
              key={plan.name}
              delay={i * 80}
              className={`flex flex-col rounded-2xl border bg-white p-6 ${
                plan.highlighted
                  ? 'border-brand-green/40 shadow-md ring-1 ring-brand-green/20'
                  : 'border-zinc-100 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-brand-navy">{plan.name}</h3>
                {plan.highlighted && (
                  <span className="rounded-full bg-brand-green px-2.5 py-0.5 text-xs font-semibold text-white">
                    Best for teams
                  </span>
                )}
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-brand-navy">
                  {plan.price}
                </span>
                <span className="text-sm text-zinc-400">{plan.cadence}</span>
              </div>
              {plan.note && (
                <p className="mt-1 text-xs text-zinc-500">{plan.note}</p>
              )}
              <ul className="mt-5 flex-1 space-y-2.5 text-sm text-zinc-600">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-brand-green" aria-hidden>&#10003;</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`${APP_URL}/signup`}
                className={`mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.highlighted
                    ? 'bg-brand-green text-white hover:brightness-110 focus-visible:outline-brand-navy'
                    : 'bg-brand-navy text-white hover:brightness-125 focus-visible:outline-brand-green'
                }`}
              >
                {plan.cta}
              </a>
            </FadeIn>
          ))}
        </div>
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
    <section style={{ background: '#06163E' }}>
      <div className="mx-auto max-w-[1100px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Your team can be up and running today.
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Give every rep a CRM that actually gets used.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
            Start on the Starter plan free. Upgrade to Executive when your team needs the downline view.
          </p>
          <a
            href={`${APP_URL}/signup`}
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get Started Free
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
