"use client";

import { type AnchorHTMLAttributes, type ReactNode } from "react";
import { type AnalyticsParams, trackEvent } from "@/lib/analytics";

type TrackedAnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName: string;
  eventParams?: AnalyticsParams;
};

export function TrackedAnchor({ children, eventName, eventParams, onClick, ...props }: TrackedAnchorProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        trackEvent(eventName, eventParams);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
