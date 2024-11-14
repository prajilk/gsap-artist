"use client";

import Lenis from "lenis";
import { useEffect } from "react";

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis(); // initialize Lenis

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }); // if in nextjs, completely ommit the 2nd argument of useEffect i.e. []

    return <>{children}</>; // make sure you don't pass plain children, it has to be html
};
export default LenisProvider;
