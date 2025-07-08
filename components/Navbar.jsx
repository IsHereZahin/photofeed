import Image from "next/image";
import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav className="py-4 md:py-6 border-b">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <Logo />

                <div className="flex gap-4 items-center">

                    <div className="relative">
                        <button className="flex items-center gap-2">
                            <Image
                                className="w-5 h-auto"
                                src="/assets/images/bd.png"
                                alt="Bangla"
                                width={20}
                                height={20}
                            />
                            Bangla
                        </button>

                        <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                            <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                                <Image
                                    className="w-5 h-auto"
                                    src="/assets/images/bd.png"
                                    alt="Bangla"
                                    width={20}
                                    height={20}
                                />
                                Bangla
                            </li>
                            <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100">
                                <Image
                                    className="w-5 h-auto"
                                    src="/assets/images/bd.png"
                                    alt="Bangla"
                                    width={20}
                                    height={20}
                                />
                                English
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}