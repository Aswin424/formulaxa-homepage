"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft, Smartphone } from "lucide-react";
import { trackDownloadClick } from "@/lib/analytics";

const APK_PATH = "/assets/formulaxa.apk";
const APK_FILENAME = "FormulaXA.apk";

export default function DownloadPage() {
 const downloadRef = useRef<HTMLAnchorElement>(null);
 const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

 useEffect(() => {
 const handleBeforeInstallPrompt = (e: any) => {
 e.preventDefault();
 setDeferredPrompt(e);
 };
 window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
 return () => {
 window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
 };
 }, []);

 const handleAndroidDownload = () => {
 if (deferredPrompt) {
 trackDownloadClick("android", "download_page");
 deferredPrompt.prompt();
 deferredPrompt.userChoice.then((choice: any) => {
 if (choice.outcome === 'accepted') {
 console.log('User accepted the install prompt');
 }
 setDeferredPrompt(null);
 });
 } else {
 // Fallback: still allow APK download if PWA not supported
 if (downloadRef.current) {
 downloadRef.current.click();
 }
 }
 };

 return (
 <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-carbon-950 px-4 py-24 text-white">
 {/* Hidden download anchor */}
 <a
 ref={downloadRef}
 href={APK_PATH}
 download={APK_FILENAME}
 className="hidden"
 aria-hidden="true"
 />

 {/* Background glow */}
 <div className="pointer-events-none absolute inset-0 mesh-gradient opacity-60" />

 {/* Back to home */}
 <Link
 href="/"
 className="absolute left-4 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-xl transition hover:bg-white/[0.1] hover:text-white sm:left-8 sm:top-6"
 >
 <ArrowLeft className="h-4 w-4" />
 Back to Home
 </Link>

 <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center text-center">
 {/* Logo */}
 <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:mb-10">
 <Image
 src="/assets/formulaxa-nav-mark.png"
 alt="FormulaXA"
 width={56}
 height={56}
 className="h-14 w-14 rounded-xl object-contain"
 priority
 />
 </div>

 <h1 className="text-balance text-4xl font-semibold leading-tight tracking-normal sm:text-5xl">
 Get FormulaXA
 </h1>
 <p className="mt-4 max-w-md text-base leading-7 text-white/60 sm:text-lg">
 Your fitness operating system, now in your pocket. Choose your platform below.
 </p>

 {/* Platform cards */}
 <div className="mt-10 flex w-full flex-col gap-4 sm:mt-12 sm:gap-5">
 {/* Android */}
 <button
 type="button"
 onClick={handleAndroidDownload}
 className="group flex w-full cursor-pointer items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-left shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-green-400/40 hover:bg-white/[0.08] sm:p-6"
 >
 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-500/15 sm:h-16 sm:w-16">
 <svg viewBox="0 0 24 24" className="h-7 w-7 text-green-400 sm:h-8 sm:w-8" fill="currentColor">
 <path d="M17.523 15.341c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm-11.046 0c-.5 0-.91.41-.91.91s.41.91.91.91.91-.41.91-.91-.41-.91-.91-.91zm11.405-6.02l1.97-3.41a.41.41 0 00-.15-.56.41.41 0 00-.56.15l-2 3.46a12.25 12.25 0 00-9.94 0l-2-3.46a.41.41 0 00-.56-.15.41.41 0 00-.15.56l1.97 3.41C2.83 11.08.5 14.57.5 18.5h23c0-3.93-2.33-7.42-5.62-9.18zM7 16.25c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
 </svg>
 </div>
 <div className="flex-1">
 <div className="flex items-center gap-2">
 <h2 className="text-lg font-semibold text-white sm:text-xl">Android</h2>
 <span className="rounded-full bg-green-500/15 px-2.5 py-0.5 text-xs font-medium text-green-400">
 Available
 </span>
 </div>
 <p className="mt-1 text-sm text-white/50">
 Install FormulaxA on your home screen
 </p>
 </div>
 <ArrowDownToLine className="h-5 w-5 shrink-0 text-white/30 transition group-hover:text-green-400" />
 </button>

 {/* iOS */}
 <div className="group flex items-center gap-5 rounded-2xl border border-white/6 bg-white/[0.03] p-5 text-left sm:p-6">
 <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 sm:h-16 sm:w-16">
 <svg viewBox="0 0 24 24" className="h-7 w-7 text-white/40 sm:h-8 sm:w-8" fill="currentColor">
 <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
 </svg>
 </div>
 <div className="flex-1">
 <div className="flex items-center gap-2">
 <h2 className="text-lg font-semibold text-white/40 sm:text-xl">iOS</h2>
 <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white/40">
 Coming Soon
 </span>
 </div>
 <p className="mt-1 text-sm text-white/30">
 Tap Share → Add to Home Screen
 </p>
 </div>
 <Smartphone className="h-5 w-5 shrink-0 text-white/15" />
 </div>
 </div>

 {/* Footer note */}
 <p className="mt-10 max-w-sm text-xs leading-5 text-white/30 sm:mt-12">
 The FormulaXA mobile app syncs with your web dashboard. Manage clients, track progress, and run your fitness business from anywhere.
 </p>
 </div>
 </main>
 );
}
