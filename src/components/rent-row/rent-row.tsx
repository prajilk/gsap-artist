import Image from "next/image";
import SeeAllWorks from "../see-all-works";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const RentRow = () => {
    useLayoutEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".rent__row",
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
            },
        });
        tl.to("body", {
            backgroundColor: "#fff",
            duration: 0.5,
        });
    }, []);
    return (
        <div className="rent__row grid grid-cols-2 p-10 gap-10 mt-32 pb-40">
            <div>
                <div className="w-full">
                    <Image
                        src={"/rent-row.jpg"}
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
            <div className="py-10 space-y-[5vw]">
                <h1
                    className="text-[4.5vw] leading-none text-[#434343]"
                    style={{
                        fontFamily: "SaolDisplay",
                    }}
                >
                    Rent Jehan Legac&apos;s art and transform your interiors
                </h1>
                <p className="text-[1.3vw] uppercase leading-tight text-[#484847]">
                    Jehan Legac offers an exclusive collection of artworks
                    available for rent, perfect for hotels and renovation
                    professionals looking to add a touch of elegance and
                    distinction to any space.
                </p>
                <SeeAllWorks
                    value="rent now"
                    className="text-[#484847]"
                    borderColor="after:bg-[#484847]"
                    arrowColor="stroke-[#484847]"
                />
            </div>
        </div>
    );
};

export default RentRow;
