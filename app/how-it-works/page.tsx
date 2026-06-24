import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';

const APP_URL = 'https://crm.leaderhq.io';

export const metadata: Metadata = {
  title: 'How It Works — LeaderCRM',
  description:
    'From new lead to closed contact in four steps. LeaderCRM connects directly to LeaderLeads so contacts flow in automatically — no import, no data entry, no manual work.',
  alternates: { canonical: '/how-it-works' },
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

const LINK_CLASS = 'text-brand-green font-semibold hover:underline';

const STEPS: { n: number; title: string; body: React.ReactNode }[] = [
  {
    n: 1,
    title: 'Contacts flow in automatically from LeaderLeads',
    body: (
      <>
        Every card scan and lead captured in{' '}
        <a href="https://leaderleads.io" className={LINK_CLASS}>
          LeaderLeads
        </a>{' '}
        flows directly into your LeaderCRM pipeline. No CSV import, no copy-paste, no manual
        data entry. Your CRM is always current — the moment they scan your card,
        they appear in your pipeline.
      </>
    ),
  },
  {
    n: 2,
    title: 'Or import a CSV in seconds',
    body: 'Already have a contact list? Upload a CSV and your existing leads land in your pipeline instantly. LeaderCRM maps the fields automatically — name, phone, email, notes — and you are ready to work.',
  },
  {
    n: 3,
    title: 'Work your pipeline from your phone or desktop',
    body: 'Move contacts through stages, log call notes, and set follow-up reminders — all from one screen. Stages match how field leaders actually sell: New Lead, Engaged, Presented, Follow Up, Closed. No custom admin required.',
  },
  {
    n: 4,
    title: 'Follow up with everyone. Never let a contact go cold.',
    body: 'LeaderCRM surfaces who needs a touchpoint today. Set a reminder once and walk away. Every morning you open the app to a clear action list — who to call, who to text, who to close. No prospect falls through the cracks.',
  },
];

const FAQS = [
  {
    q: 'Does LeaderCRM work without LeaderLeads?',
    a: "Yes. You can import contacts via CSV or add them manually. But the fastest way to fill your pipeline is with LeaderLeads — every card scan becomes a CRM contact automatically. If you're in the Leader ecosystem, the two products are wired together.",
  },
  {
    q: 'Can I track my whole downline from one view?',
    a: "Yes — on the Executive plan. The Downline CRM view shows what every member of your team is working on, which contacts need attention, and who's at risk of going cold. You coach from the overview and drill in when needed.",
  },
  {
    q: 'How does the follow-up reminder system work?',
    a: "Open any contact, set a reminder — date, time, and a note. LeaderCRM surfaces that contact on the day you set. You get a notification, open the app, see the context you logged, and make the call. It is not a complex drip sequence. It is a simple, reliable nudge that makes sure you follow up.",
  },
  {
    q: 'Does it integrate with other tools?',
    a: "LeaderCRM is built to live inside the Leader Suite — LeaderSend for email follow-up, LeaderCal for booking calls, LeaderLeads for lead capture. For external tools, you can export contacts at any time. Full Zapier integration is on the roadmap.",
  },
];

export default function HowItWorksPage() {
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
        <Steps />
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
          <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-green">
            Simple by design
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
            New lead to closed contact
            <br />
            in four steps.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Contacts flow in from LeaderLeads automatically. You work your
            pipeline, set reminders, and follow up with everyone — no admin
            required.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
      <ol className="space-y-10">
        {STEPS.map((step, i) => (
          <FadeIn as="li" key={step.n} delay={i * 60}>
            <div className="flex gap-5 sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green text-lg font-bold text-white shadow-md shadow-brand-green/30">
                {step.n}
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-navy sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600">{step.body}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </ol>
    </section>
  );
}

function Faqs() {
  return (
    <section
      className="border-y border-zinc-100"
      style={{ background: 'color-mix(in srgb, #06163E 4%, #fff)' }}
    >
      <div className="mx-auto max-w-[720px] px-4 py-20 sm:px-6 sm:py-24">
        <FadeIn>
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
            Questions we hear every time
          </h2>
        </FadeIn>
        <dl className="mt-12 space-y-6">
          {FAQS.map((faq, i) => (
            <FadeIn
              key={faq.q}
              delay={i * 60}
              className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
            >
              <dt className="text-base font-bold text-brand-navy">{faq.q}</dt>
              <dd className="mt-2 leading-relaxed text-zinc-600">{faq.a}</dd>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section style={{ background: '#06163E' }}>
      <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 sm:py-24">
        <FadeIn>
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-green">
            Ready to see it in action?
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start free. Import your contacts. Go.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-zinc-300">
            No onboarding call. No credit card. Starter plan is free forever.
            Your next follow-up is two minutes away.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`${APP_URL}/signup`}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-7 text-base font-semibold text-white shadow-lg shadow-black/20 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get Started Free
            </a>
            <Link
              href="/pricing"
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/30 px-5 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See Pricing &rarr;
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
