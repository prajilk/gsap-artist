import Logo from "../svgs/logo";

const Navbar = ({ onClick }: { onClick: () => void }) => {
    return (
        <div className="flex justify-between items-center w-full py-10 text-white fixed top-0 z-[999] px-10">
            <Logo />
            <button onClick={onClick} className="space-y-1.5 group">
                <div className="w-6 h-0.5 group-hover:translate-x-1.5 duration-300 transition-transform -translate-x-1 bg-white"></div>
                <div className="w-6 h-0.5 translate-x-0 bg-white"></div>
                <div className="w-6 h-0.5 group-hover:translate-x-1.5 duration-300 transition-transform -translate-x-1 bg-white"></div>
            </button>
        </div>
    );
};

export default Navbar;
