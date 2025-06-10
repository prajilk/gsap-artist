import { RefObject, useLayoutEffect, useRef } from "react";
import SplitText from "./split-text";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroSectionTextReveal } from "@/utils/gsap-utils";
import Hls from "hls.js";

gsap.registerPlugin(ScrollTrigger);

export default function Hero({
    contentRef,
    heroHead1Ref,
    heroHead2Ref,
    heroHead3Ref,
}: {
    contentRef: RefObject<HTMLDivElement>;
    heroHead1Ref: RefObject<HTMLDivElement>;
    heroHead2Ref: RefObject<HTMLDivElement>;
    heroHead3Ref: RefObject<HTMLDivElement>;
}) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useLayoutEffect(() => {
        // Text reveal animation
        heroSectionTextReveal(heroHead1Ref, heroHead2Ref, heroHead3Ref);
    }, []);

    useLayoutEffect(() => {
        const video = videoRef.current;
        const videoSrc = process.env.NEXT_PUBLIC_VIDEO_URL || "";

        if (!videoSrc || !video) return;

        // First check for native browser HLS support
        if (video.canPlayType("application/vnd.apple.mpegurl")) {
            video.src = videoSrc;
            // If no native HLS support, check if HLS.js is supported
        } else if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(video);
        }
    }, []);

    return (
        <div
            ref={contentRef}
            className="w-full"
            style={{
                transform: "translateY(100vh)",
            }}
        >
            <div className="relative w-full h-ful">
                <video
                    // src={"/hero-video.mp4"} // Video is available inside public folder
                    // src={process.env.NEXT_PUBLIC_VIDEO_URL || ""}
                    ref={videoRef}
                    muted
                    loop
                    autoPlay
                    className="w-full h-screen object-cover object-[0%_30%]"
                ></video>
                <div className="w-full h-full bg-black/30 top-0 left-0 absolute"></div>
                <div className="absolute top-1/2 -translate-y-1/2 pt-20 w-full px-10">
                    <div
                        className="split_text_wrapper flex justify-between overflow-hidden"
                        style={{ fontFamily: "SaolDisplay" }}
                    >
                        <h1 ref={heroHead1Ref}>
                            <SplitText text="VISIONARY" />
                        </h1>
                        <h1 ref={heroHead2Ref}>
                            <SplitText text="ARTIST" />
                        </h1>
                    </div>
                    <div
                        className="text-right overflow-hidden"
                        ref={heroHead3Ref}
                        style={{ fontFamily: "SaolDisplay" }}
                    >
                        <SplitText text="JEHAN LEGAC" />
                    </div>
                    <div className="text-base text-right">
                        <p className="hero-para max-w-xs uppercase ms-[16.458vw] pt-24">
                            A visionary artist, both photographer and painter,
                            harnesses the power of AI to enhance his
                            surrealistic art.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
