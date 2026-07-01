export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<AppBannerPromptResult>;
  prompt(): Promise<void>;
}

export interface AppBannerPromptResult {
  outcome: 'accepted' | 'dismissed';
  platform: string;
}

export interface Window {
  onbeforeinstallprompt: ((event: BeforeInstallPromptEvent) => void) | null;
  onappinstalled: ((event: Event) => void) | null;
}