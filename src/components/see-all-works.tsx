import { cn } from "@/utils/cn";

const SeeAllWorks = ({
    className,
    value = "See all works",
    arrowColor = "stroke-white",
    borderColor = "after:bg-white",
}: {
    className?: string;
    value?: string;
    arrowColor?: string;
    borderColor?: string;
}) => {
    return (
        <div
            className={cn(
                "flex w-fit items-center gap-2 cursor-pointer text-white",
                className
            )}
        >
            <span
                className={cn(
                    "uppercase relative after:absolute after:w-1/4 after:h-[1px] after:bottom-0 after:left-0",
                    borderColor
                )}
            >
                {value}
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
            >
                <path d="M2 1L16 1V14" className={arrowColor} strokeWidth="1" />
                <path d="M16 1L1 16" className={arrowColor} strokeWidth="1" />
            </svg>
        </div>
    );
};

export default SeeAllWorks;
