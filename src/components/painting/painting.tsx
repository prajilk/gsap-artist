import gsap from "gsap";
import SeeAllWorks from "../see-all-works";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Painting = () => {
    const paintingWrapperRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: paintingWrapperRef.current,
                start: "top top",
                end: "bottom+=500% top",
                scrub: true,
                pin: true,
                markers: true,
            },
        });

        tl.to(
            ".paint_parallax",
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
                <div ref={paintingWrapperRef}>
                    <h1
                        className="uppercase text-[10vw] leading-none text-center"
                        style={{ fontFamily: "SaolDisplay" }}
                    >
                        Painting
                    </h1>
                    <SeeAllWorks className="mx-auto mt-4 cursor-pointer" />
                </div>
            </div>
            <div className="relative w-full h-[200vh]">
                <div className="w-[25vw] absolute left-0 top-0">
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
                <div className="w-[25vw] absolute right-0 top-[20vw]">
                    <Image
                        src={"/pain-img-2.jpg"}
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
                <div className="paint_parallax w-[35vw] absolute bottom-[10vw] right-[20vw]">
                    <Image
                        src={"/pain-img-3.jpg"}
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
                <div className="paint_parallax w-[30vw] absolute bottom-0 left-[7vw]">
                    <Image
                        src={"/pain-img-4.jpg"}
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

export default Painting;
