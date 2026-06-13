// Google Analytics 4 event tracking utility
// Usage: import { trackEvent } from '@/lib/analytics' and call trackEvent('event_name', { param: 'value' })

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export function pageview(url: string) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
}

interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

export function trackEvent(action: string, params?: EventParams) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, params);
}

// Predefined events for FormulaxA
export const AnalyticsEvents = {
  // CTA clicks
  clickStartFree: () => trackEvent("click_start_free"),
  clickJoinWaitlist: () => trackEvent("click_join_waitlist"),
  clickWatchDemo: () => trackEvent("click_watch_demo"),
  clickViewLive: (project: string) => trackEvent("click_view_live", { project }),

  // Navigation
  navClick: (section: string) => trackEvent("nav_click", { section }),

  // Scroll depth
  scrollDepth: (depth: string) => trackEvent("scroll_depth", { depth }),

  // Form submissions
  submitContact: () => trackEvent("submit_contact_form"),
  submitWaitlist: (email: string) => trackEvent("submit_waitlist", { email }),

  // Product interest
  viewPricing: () => trackEvent("view_pricing"),
  viewProduct: (product: string) => trackEvent("view_product", { product }),
} as const;
