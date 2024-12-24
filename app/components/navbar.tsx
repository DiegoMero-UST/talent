import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="h-[12vh] flex items-center justify-between p-5 bg-[#4bb9b4]">
            <Image
                src='/logo.png'
                alt="Logo"
                width={100}
                height={100}
            />
            <Image
                src='/burguer-menu2.svg'
                alt="Burger Menu"
                width={50}
                height={50}
            />
        </nav>
    );
}