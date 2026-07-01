interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<AppBannerPromptResult>;
  prompt(): Promise<void>;
}

interface AppBannerPromptResult {
  outcome: 'accepted' | 'dismissed';
  platform: string;
}

interface Window {
  onbeforeinstallprompt: ((event: BeforeInstallPromptEvent) => void) | null;
  onappinstalled: ((event: Event) => void) | null;
}