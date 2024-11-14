import gsap from "gsap";
import SeeAllWorks from "../see-all-works";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Pictures = () => {
    const pictureWrapperRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: pictureWrapperRef.current,
                start: "top-=50% top",
                end: "bottom+=500% top",
                scrub: true,
                pin: true,
                markers: true,
            },
        });

        tl.to(
            ".pictures_parallax",
            {
                ease: "none",
                yPercent: -50,
            },
            0
        );
    }, []);

    return (
        <div>
            <div className="h-[30vw] relative z-10">
                <div ref={pictureWrapperRef}>
                    <h1
                        className="uppercase ms-[5vw] text-[10vw] leading-none text-left"
                        style={{ fontFamily: "SaolDisplay" }}
                    >
                        Pictures
                    </h1>
                    <SeeAllWorks className="ms-[5vw] mt-4 cursor-pointer" />
                </div>
            </div>
            <div className="relative w-full h-[200vh]">
                <div className="w-[25vw] absolute right-[25vw] top-0">
                    <Image
                        src={"/3-3.webp"}
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
                <div className="w-[25vw] absolute left-0 top-[20vw]">
                    <Image
                        src={"/2-1.avif"}
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
                <div className="pictures_parallax w-[30vw] absolute bottom-[20vw] right-[5vw]">
                    <Image
                        src={"/2-3.jpg"}
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
                <div className="pictures_parallax w-[30vw] absolute bottom-0 left-[30vw]">
                    <Image
                        src={"/2-3.webp"}
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

export default Pictures;
