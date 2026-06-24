import type { Metadata } from 'next';
import { SuiteBar, SiteNav, SiteFooter, FadeIn } from '@leader/marketing-ui';
import { MarketingIcon } from '@/app/_marketing/icons';

const APP_URL = 'https://crm.leaderhq.io';

export const metadata: Metadata = {
  title: 'About — LeaderCRM',
  description:
    'LeaderCRM is part of the Leader Suite — built by the people who lived the problem of losing prospects at every follow-up gap in the field.',
  alternates: { canonical: '/about' },
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

const VALUES = [
  {
    icon: 'handshake',
    title: 'Relationships over records',
    body: "A contact list is infrastructure. A relationship is the point. Everything we build in LeaderCRM is designed to make real human follow-up more durable and more likely — not to replace it with automation.",
  },
  {
    icon: 'bolt',
    title: 'Simple by default',
    body: "If it requires an onboarding consultant, it won't get used. Every feature in LeaderCRM has to work for a field leader who's tired, moving fast, and managing their team from a phone.",
  },
  {
    icon: 'users',
    title: 'Built for the Leader Suite',
    body: 'LeaderCRM is not a standalone CRM. It is the relationship layer inside the Leader Suite — wired to LeaderLeads, LeaderSend, and LeaderCal so your whole workflow lives in one ecosystem.',
  },
] as const;

export default function AboutPage() {
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
        {/* Hero */}
        <section
          className="text-white"
          style={{ background: '#06163E' }}
        >
          <div className="mx-auto max-w-[820px] px-4 py-24 sm:px-6">
            <FadeIn>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                We built this because
                <br />
                we lived the problem.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300 sm:text-xl">
                LeaderCRM is part of the Leader Suite — a set of tools built for
                the people who lead, sell, and build in the real world. The CRM
                that fits how field leaders actually work, not how enterprise
                software vendors think they should.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              The story behind the product
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-zinc-600">
              Network marketing, direct sales, and field-based business
              development share one problem: the follow-up gap. You have a great
              conversation. You capture the lead. And then you open your CRM and
              face a tool built for inside sales teams with SDR quotas and
              Salesforce admins — not for someone managing a downline from their
              phone between school pickups.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderCRM was built to close that gap. Not with a complex pipeline
              that requires a three-day training. Not with a monthly subscription
              that costs more than your average prospect is worth. With a focused,
              fast CRM that knows what field leaders actually need: contacts,
              follow-ups, and team visibility — in that order.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              We&apos;re part of the Leader Suite — a growing ecosystem of tools
              for leaders, sales professionals, and the organizations they build.
              LeaderCRM is the relationship layer. The rest of the suite handles
              what comes before and after.
            </p>
            <div className="mt-10">
              <a
                href="https://leaderhq.io"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
              >
                Explore the Leader Suite — LeaderHQ &rarr;
              </a>
            </div>
          </FadeIn>
        </section>

        {/* Values */}
        <section
          className="border-y border-zinc-100"
          style={{ background: 'color-mix(in srgb, #06163E 4%, #fff)' }}
        >
          <div className="mx-auto max-w-[1100px] px-4 py-20 sm:px-6 sm:py-24">
            <FadeIn>
              <h2 className="text-center text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
                What we stand for
              </h2>
            </FadeIn>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {VALUES.map((v, i) => (
                <FadeIn
                  key={v.title}
                  delay={i * 80}
                  className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                    <MarketingIcon name={v.icon} size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-navy">
                    {v.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-zinc-600">{v.body}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Suite CTA */}
        <section className="mx-auto max-w-[560px] px-4 py-20 text-center sm:px-6 sm:py-24">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Part of the Leader Suite
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              LeaderCRM is one product in a growing suite of tools for leaders,
              sales professionals, and the organizations they build. Visit
              LeaderHQ to see what else we&apos;re building.
            </p>
            <a
              href="https://leaderhq.io"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-navy px-6 text-base font-semibold text-white shadow-md transition hover:brightness-125 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green"
            >
              Explore the Leader Suite — LeaderHQ
            </a>
          </FadeIn>
        </section>
      </main>
      <SiteFooter
        productSuffix="CRM"
        columns={CRM_FOOTER_COLUMNS}
      />
    </div>
  );
}
