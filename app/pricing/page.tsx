import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const APP_URL = 'https://crm.leaderhq.io';

export const metadata: Metadata = {
  title: 'Pricing — LeaderCRM',
  description:
    'Start free with 250 contacts. Upgrade to Growth or Executive when your team scales. Simple pricing, no surprises, no per-seat gotchas.',
  alternates: { canonical: '/pricing' },
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

interface Plan {
  name: string;
  price: string;
  cadence: string;
  note: string;
  desc: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  ctaStyle: 'outline' | 'green' | 'dark';
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever',
    note: 'Up to 250 contacts',
    desc: 'Everything you need to manage your pipeline and follow up like a pro.',
    features: [
      'Contact management',
      'Basic pipeline (3 stages)',
      'Follow-up reminders',
      'LeaderLeads sync',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'outline',
  },
  {
    name: 'Growth',
    price: '$22',
    cadence: '/mo',
    note: 'Unlimited contacts',
    desc: 'For serious field leaders who need unlimited contacts and team visibility.',
    features: [
      'Everything in Starter',
      'Custom pipeline stages',
      'Team activity feed',
      'Call logging & notes',
      'LeaderSend integration',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
    ctaStyle: 'green',
  },
  {
    name: 'Executive',
    price: '$45',
    cadence: '/mo',
    note: 'For serious leaders',
    desc: 'Full downline visibility and coaching tools for leaders managing a team.',
    features: [
      'Everything in Growth',
      'Downline CRM view',
      'Coaching flags & alerts',
      'Advanced reporting',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'dark',
  },
];

const FAQS = [
  {
    q: 'Is the Starter plan actually free forever?',
    a: 'Yes. No credit card required. No trial that expires. Up to 250 contacts with full pipeline and follow-up reminders is free permanently. We built it this way because every field leader deserves a CRM that works before they decide to invest.',
  },
  {
    q: 'What happens when I hit 250 contacts on Starter?',
    a: 'You can upgrade to Growth at any time to unlock unlimited contacts. You will not lose any data — your existing contacts and pipeline history carry over to the paid plan seamlessly.',
  },
  {
    q: 'What is the Downline CRM view on Executive?',
    a: 'The Downline CRM view shows every contact your team members are working across their individual pipelines. You see who needs coaching, which contacts have gone stale, and where your team is spending their follow-up time — all from one dashboard.',
  },
  {
    q: 'Can I switch plans at any time?',
    a: 'Yes. Upgrade from Starter to Growth or Executive instantly. Downgrade or cancel at the end of your billing period. No lock-in, no penalty, no minimum commitment.',
  },
  {
    q: 'Does LeaderCRM work without the rest of the Leader Suite?',
    a: 'Yes — you can use LeaderCRM as a standalone CRM. But it is designed to work best inside the Leader Suite. LeaderLeads feeds contacts automatically, LeaderSend handles email follow-up, and LeaderCal books calls. The suite makes each product more powerful.',
  },
];

export default function PricingPage() {
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
        <PlansGrid />
        <Faqs />
        <CtaBand />
      </main>
      <SiteFooter productSuffix="CRM" columns={CRM_FOOTER_COLUMNS} />
    </div>
  );
}

function Hero() {
  return (
    <section
      className="text-white"
      style={{ background: '#06163E' }}
    >
      <div className="mx-auto max-w-[720px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            Simple pricing.
            <br />
            No surprises.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Start free. Upgrade when your team grows. No per-contact fees, no
            onboarding costs, no hidden charges.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function PlansGrid() {
  return (
    <section
      className="border-y border-zinc-100"
      style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
    >
      <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
        <div className="grid items-stretch gap-5 sm:grid-cols-3">
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
              {plan.highlighted && (
                <span className="self-start rounded-full bg-brand-green px-2.5 py-0.5 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="mt-3 text-lg font-bold text-brand-navy">
                {plan.name}
              </h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-brand-navy">
                  {plan.price}
                </span>
                {plan.cadence && (
                  <span className="text-sm text-zinc-400">{plan.cadence}</span>
                )}
              </div>
              <p className="mt-1 text-xs text-zinc-500">{plan.note}</p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {plan.desc}
              </p>
              <hr className="my-5 border-zinc-100" />
              <ul className="flex-1 space-y-2.5 text-sm text-zinc-600">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-brand-green" aria-hidden>
                      &#10003;
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={`${APP_URL}/signup`}
                className={`mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.ctaStyle === 'green'
                    ? 'bg-brand-green text-white hover:brightness-110 focus-visible:outline-brand-navy'
                    : plan.ctaStyle === 'dark'
                      ? 'bg-brand-navy text-white hover:brightness-125 focus-visible:outline-brand-green'
                      : 'border border-brand-navy/20 bg-white text-brand-navy hover:bg-zinc-50 focus-visible:outline-brand-green'
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

function Faqs() {
  return (
    <section className="mx-auto max-w-[720px] px-4 py-20 sm:px-6 sm:py-24">
      <FadeIn>
        <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
          Pricing questions, answered.
        </h2>
      </FadeIn>
      <dl className="mt-12 space-y-6">
        {FAQS.map((faq, i) => (
          <FadeIn
            key={faq.q}
            delay={i * 50}
            className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
          >
            <dt className="text-base font-bold text-brand-navy">{faq.q}</dt>
            <dd className="mt-2 leading-relaxed text-zinc-600">{faq.a}</dd>
          </FadeIn>
        ))}
      </dl>
    </section>
  );
}

function CtaBand() {
  return (
    <section style={{ background: '#06163E' }}>
      <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Ready to work your pipeline?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start free. Upgrade when you&apos;re ready.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
            No credit card. No time limit. Starter is free forever. Your next
            follow-up is two minutes away.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started Free
            </a>
            <Link
              href="/how-it-works"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See How It Works &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
