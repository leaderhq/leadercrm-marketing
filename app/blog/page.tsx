import type { Metadata } from 'next';
import Link from 'next/link';
import { SuiteBar, SiteNav, SiteFooter } from '@leader/marketing-ui';

const APP_URL = 'https://crm.leaderhq.io';

export const metadata: Metadata = {
  title: 'Blog — LeaderCRM',
  description: 'Insights, guides, and best practices for field leaders who want to manage more contacts and close more deals.',
};

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
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security & GDPR', href: '/security' },
    ],
  },
];

export default function BlogPage() {
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
        <section style={{ background: '#06163E' }}>
          <div className="mx-auto max-w-[720px] px-4 py-24 text-center sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-green">
              Coming soon
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl">
              The LeaderCRM Blog
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-300">
              Insights, guides, and follow-up strategies for field leaders who
              want to manage more contacts and close more deals. Check back soon.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-brand-green px-6 text-base font-semibold text-white shadow-md shadow-brand-green/25 transition hover:brightness-110"
            >
              &larr; Back to LeaderCRM
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter productSuffix="CRM" columns={FOOTER_COLUMNS} />
    </div>
  );
}
