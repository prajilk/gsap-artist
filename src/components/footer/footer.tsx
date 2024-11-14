import { cn } from "@/utils/cn";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect } from "react";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    useLayoutEffect(() => {
        const word1 = SplitType.create(".footer_slideup_text_1");
        const word2 = SplitType.create(".footer_slideup_text_2");

        const tl = gsap.timeline({});

        // Both word1 and word2 animations start at the same time
        tl.fromTo(
            word1.chars,
            { opacity: 0, translateY: "100%" },
            {
                translateY: "0%",
                opacity: 1,
                stagger: -0.05, // Stagger backwards for word1
            },
            "-=0.1"
        )
            .fromTo(
                word2.chars,
                { opacity: 0, translateY: "100%" },
                {
                    translateY: "0%",
                    opacity: 1,
                    stagger: 0.05, // Stagger forwards for word2
                },
                "<"
            )
            .to(
                ".art_overlay",
                {
                    opacity: 1,
                },
                "<"
            );
    }, []);
    return (
        <div className="min-h-screen pt-[20vw] px-[5vw] pb-10">
            <div className="grid grid-cols-3">
                <ul className="uppercase text-[1.3vw] grid grid-cols-3 cursor-pointer">
                    <li>Home</li>
                    <li>Painting</li>
                    <li>Contact</li>
                    <li>Ai studio</li>
                    <li>Pictures</li>
                </ul>
                <div>
                    <div className="w-[10vw] mx-auto">
                        <Image
                            src={"/logo.png"}
                            alt="Logo"
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
                <div className="space-y-3">
                    <span className="uppercase text-[1.3vw]">
                        Contact with me
                    </span>
                    <input
                        type="email"
                        placeholder="Enter your e-mail"
                        className="bg-transparent outline-none border-b border-b-white text-[1.5vw]"
                    />
                </div>
            </div>
            <div className="mt-[10vw] overflow-hidden space-y-10">
                <h3
                    className="text-[8.5vw] whitespace-nowrap text-center leading-none"
                    style={{ fontFamily: "SaolDisplay" }}
                >
                    JEHAN&apos;S ARTWORKS
                </h3>

                <p className="text-center">
                    <span className="text-white/65">Developed with</span> ❤️‍🔥{" "}
                    <Link
                        href={"https://prajilk.vercel.app"}
                        target="_blank"
                        className="text-white font-semibold cursor-pointer"
                    >
                        Prajil
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;
