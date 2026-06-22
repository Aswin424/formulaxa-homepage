export type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: "config" | "event", targetId: string, config?: AnalyticsParams) => void;
  }
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, {
    ...params,
    site: "formulaxa",
  });
}

export function trackWhatsappClick(source: string) {
  trackEvent("whatsapp_click", {
    source,
  });
}

export function trackContactClick(source: string) {
  trackEvent("contact_click", {
    source,
  });
}

export function trackPricingCtaClick(plan: string, billingMode: string) {
  trackEvent("pricing_cta_click", {
    plan,
    billing_mode: billingMode,
  });
}

export function trackNavigationClick(label: string, href: string) {
  trackEvent("navigation_click", {
    label,
    href,
  });
}

export function trackDownloadClick(platform: string, source: string) {
  trackEvent("download_click", {
    platform,
    source,
  });
}
