import type { JSX } from 'react';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn, TypewriterHeadline } from '@leader/marketing-ui';
import { CrmPipelineMock } from './_marketing/mocks';
import { MarketingIcon, type MarketingIconName } from './_marketing/icons';

const SITE_URL = 'https://leadercrm.io';
const APP_URL = 'https://crm.leaderhq.io';

const CRM_PHRASES = [
  'field leaders.',
  'network marketing.',
  'your whole team.',
  'your downline.',
  'top producers.',
] as const;

const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how' },
  { label: 'Pricing', href: '/#pricing' },
];

const FOOTER_COLUMNS = [
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
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
];

interface Feature {
  title: string;
  body: string;
  icon: MarketingIconName;
}

const FEATURES: Feature[] = [
  {
    title: 'Contacts that come to you.',
    body: 'LeaderLeads feeds your CRM automatically. Every card scan, every new lead — already in your pipeline.',
    icon: 'users',
  },
  {
    title: 'Pipeline built for your process.',
    body: 'Move contacts from New Lead to Closed in one click. Stages that match how field leaders actually sell.',
    icon: 'trending-up',
  },
  {
    title: 'Follow-up that never forgets.',
    body: 'Set a reminder once and walk away. LeaderCRM surfaces who needs a call before they go cold.',
    icon: 'bell',
  },
  {
    title: 'Team activity at a glance.',
    body: 'See what your whole downline is working on. Coach the deals that need attention before they stall.',
    icon: 'users',
  },
  {
    title: 'Notes that stick.',
    body: 'Log a call note on mobile. See it everywhere instantly. No lost context, no duplicate data entry.',
    icon: 'clipboard',
  },
  {
    title: 'Wired into the Leader Suite.',
    body: 'Send a follow-up via LeaderSend, book a call in LeaderCal — all without leaving your contact record.',
    icon: 'link',
  },
];

interface Step {
  n: number;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    n: 1,
    title: 'Contacts flow in automatically.',
    body: 'LeaderLeads syncs every card scan and signup directly into your CRM. Or import a CSV in seconds.',
  },
  {
    n: 2,
    title: 'Work your pipeline.',
    body: 'Move contacts through stages, log notes, set reminders — all from your phone or desktop.',
  },
  {
    n: 3,
    title: 'Close more with follow-up.',
    body: 'LeaderCRM tells you who is due for a touchpoint today. No prospect falls through the cracks.',
  },
];

interface Plan {
  name: string;
  price: string;
  cadence: string;
  note: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '$0',
    cadence: '/mo',
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
    highlighted: true,
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
    cta: 'Start Free Trial',
  },
];

export default function HomePage(): JSX.Element {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <SuiteBar appUrl={APP_URL} />
      <SiteNav
        productSuffix="CRM"
        links={NAV_LINKS}
        ctaLabel="Get Started Free"
        ctaHref={`${APP_URL}/signup`}
        loginHref={`${APP_URL}/login`}
      />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden
            style={{ background: 'radial-gradient(80% 520px at 50% -10%, color-mix(in srgb, #06163E 9%, transparent), transparent)' }}
          />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-8 md:px-6 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-12">
            <FadeIn>
              <TypewriterHeadline
                staticPrefix="CRM built for"
                phrases={CRM_PHRASES}
                className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]"
              />
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-zinc-600">
                LeaderCRM gives network marketing leaders a simple way to manage contacts, track their pipeline, and follow up with every prospect — without the complexity of traditional CRMs.
              </p>
              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <a
                  href={`${APP_URL}/signup`}
                  className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:w-auto"
                >
                  Get Started Free
                </a>
                <a
                  href="#how"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-xl px-4 text-base font-semibold text-brand-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-5 text-sm text-zinc-500">
                Free forever on the Starter plan.{' '}
                <strong className="font-semibold text-zinc-700">No credit card required.</strong>
              </p>
            </FadeIn>
            <FadeIn delay={120} className="flex justify-center lg:justify-end">
              <CrmPipelineMock />
            </FadeIn>
          </div>
        </section>

        {/* Trust band */}
        <FadeIn as="section" className="border-y border-zinc-100 bg-zinc-50 py-5">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-zinc-400">
              Trusted by field leaders across the Leader ecosystem
            </p>
          </div>
        </FadeIn>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 md:px-6 md:py-24">
          <FadeIn>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Built for network marketing</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                A CRM that works the way you do.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
                No onboarding consultant. No data migration nightmare. Just a fast, focused CRM that fits inside the Leader Suite — and gets out of your way.
              </p>
            </div>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FadeIn
                key={f.title}
                delay={i * 80}
                className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                  <MarketingIcon name={f.icon} size={24} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-navy">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-zinc-600">{f.body}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="scroll-mt-24 border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
        >
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
            <FadeIn>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">How it works</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  Up and running in minutes.
                </h2>
              </div>
            </FadeIn>
            <div className="mt-12 grid gap-10 md:grid-cols-3">
              {STEPS.map((s, i) => (
                <FadeIn key={s.n} delay={i * 80}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/10 text-lg font-extrabold text-brand-green">
                    {s.n}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">{s.body}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="scroll-mt-24 border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #5CAC23 6%, #fff)' }}
        >
          <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-24">
            <FadeIn>
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                  Simple pricing. No surprises.
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-600">
                  Start free. Upgrade when your team grows.
                </p>
              </div>
            </FadeIn>
            <div className="mt-12 grid items-stretch gap-5 sm:grid-cols-3">
              {PLANS.map((plan, i) => (
                <FadeIn
                  key={plan.name}
                  delay={i * 80}
                  className={`flex flex-col rounded-2xl border bg-white p-6 ${plan.highlighted ? 'border-brand-green/40 shadow-md ring-1 ring-brand-green/20' : 'border-zinc-100 shadow-sm'}`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-brand-navy">{plan.name}</h3>
                    {plan.highlighted && (
                      <span className="rounded-full bg-brand-green px-2.5 py-0.5 text-xs font-semibold text-white">
                        Most popular
                      </span>
                    )}
                  </div>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-brand-navy">{plan.price}</span>
                    {plan.cadence && <span className="text-sm text-zinc-400">{plan.cadence}</span>}
                  </div>
                  <p className="mt-1 text-xs text-zinc-500">{plan.note}</p>
                  <ul className="mt-5 flex-1 space-y-2.5 text-sm text-zinc-600">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-brand-green" aria-hidden>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`${APP_URL}/signup`}
                    className={`mt-6 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 text-sm font-semibold transition ${plan.highlighted ? 'bg-brand-green text-white hover:brightness-110' : 'bg-brand-navy text-white hover:brightness-125'}`}
                  >
                    {plan.cta}
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{ background: 'linear-gradient(160deg, #06163E, #030b22)' }}>
          <div className="mx-auto max-w-6xl px-4 py-20 text-center md:px-6 md:py-24">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
                Ready to work your pipeline?
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Every contact deserves a follow-up.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
                Set up in minutes. Import your leads. LeaderCRM tells you exactly who to call next — every single day.
              </p>
              <a
                href={`${APP_URL}/signup`}
                className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110"
              >
                Get Started Free
              </a>
            </FadeIn>
          </div>
        </section>
      </main>

      <SiteFooter productSuffix="CRM" columns={FOOTER_COLUMNS} />
    </div>
  );
}
