import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AIArt = () => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const parallaxImageRef = useRef<HTMLImageElement | null>(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: "top top",
                end: "bottom+=200% top",
                scrub: true,
                pin: true,
            },
        });

        tl.to(
            parallaxImageRef.current,
            {
                ease: "none",
                yPercent: -50,
            },
            0
        );
    }, []);

    return (
        <div style={{ fontFamily: "SaolDisplay" }}>
            <div className="h-[30vw]">
                <div ref={wrapperRef} className="absolute right-0">
                    <div className="pe-[max(4.688vw,90px)] pt-[9vw] relative -z-10">
                        <h1 className="w-fit ms-auto text-[max(9.896vw,40px)]">
                            AI STUDIO
                        </h1>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex relative -z-10">
                    <div className="w-[25vw] relative aspect-[1/1.2] inline-block self-start">
                        <Image src="/1-1.webp" alt="" className="w-full" fill />
                    </div>
                    <div className="w-[max(17.708vw,200px)] relative inline-block ms-auto self-start mt-72">
                        <Image
                            src={"/3-1.webp"}
                            alt="Art female"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>
                    <div className="relative inline-block ms-auto mt-80">
                        <Image
                            src={"/4-1.webp"}
                            alt="Art female"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </div>
                </div>
                <div
                    className="w-[22vw] relative mx-auto -mt-10"
                    ref={parallaxImageRef}
                >
                    <Image
                        src={"/2-1.webp"}
                        alt="Art female"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default AIArt;
