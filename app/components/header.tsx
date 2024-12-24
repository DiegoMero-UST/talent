export default function Header() {
    return (
        <section className="flex flex-col items-center p-5 h-[88vh] justify-center gap-10">
            <h1 className="font-bold text-5xl text-center italic">Hire the Best, ANYWHERE</h1>
            <p className="text-justify text-2xl">
                Anywhere connects businesses with top-tier global talent, enabling companies to scale efficiently and effectively.
                Whether you need skilled virtual assistants, strategic growth consultants, or specialized support, we’re here to help you build a team that
                drives your success anywhere in the world.
            </p>
            <button className="text-3xl bg-[#0A8D94] text-white rounded-3xl p-5">Book discovery call</button>
        </section>
    );
}