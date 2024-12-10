import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function HeaderComponent() {
    return (
        <div className="container mx-auto max-w-[1354px]">
            <div className="flex h-[100px] items-center justify-between bg-white px-4">
                <div className="flex items-center">
                    <Link
                        to="/"
                        className="text-3xl font-bold text-[#34D399] transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    >
                        MyClothingStore
                    </Link>
                </div>
                <div>
                    <Navbar />
                </div>
            </div>
        </div>
    );
}

