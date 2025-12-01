import { useEffect, useRef } from "react";
import Hls from "hls.js";
import { GradientFillButton } from "./GradientFillButton";
import { Badge } from "./Badge";
import { FadeInUp } from "./FadeInUp";
export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsUrl = "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/b809e5e84610dff4fc77f6fd5ad4795c/manifest/video.m3u8";
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Check for native HLS support (Safari)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl;
    } else if (Hls.isSupported()) {
      // Use hls.js for other browsers
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      return () => {
        hls.destroy();
      };
    }
  }, []);
  return <section className="relative flex flex-col items-center justify-start py-16 px-8 text-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-[1]">
        <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30" />
      </div>
      
      {/* Circle Gradient Background */}
      <div className="absolute left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] z-[2]" style={{
      top: '30%',
      backgroundImage: 'url(/circle_bg.png)',
      backgroundSize: 'contain',
      backgroundPosition: 'center bottom',
      backgroundRepeat: 'no-repeat'
    }} />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Badge */}
        <FadeInUp delay={0} className="mb-12">
          <Badge label="New" text="Black Friday: Biggest Promo of The Year!" showArrow />
        </FadeInUp>

        {/* Main Heading */}
        <FadeInUp delay={0.2} className="text-violet-100 font-semibold mb-6">
          <h1 className="text-[4.99rem] leading-tight">Full course for Landing</h1>
          <h2 className="text-[4.99rem] leading-tight">page design with AI</h2>
        </FadeInUp>

        {/* Subheading */}
        <FadeInUp delay={0.4}>
          <p className="text-muted-foreground max-w-2xl mb-8 text-lg">Learn how to Build Beautiful websites with AI plus get Access to the Full AI Web Design System</p>
        </FadeInUp>

        {/* Buttons */}
        <FadeInUp delay={0.6}>
          <GradientFillButton href="/contact">
            Start Learning for free
          </GradientFillButton>
        </FadeInUp>
      </div>
    </section>;
};