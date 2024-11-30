function Hero() {
    return (
        <main className="relative flex w-full h-[640px] bg-cover bg-center bg-[url('/ghouse.jpg')]">
            {/* Transparent Overlay */}
            <div className="absolute inset-0 bg-white bg-opacity-80"></div>

            {/* Content Section */}
            <div className="relative w-1/2 mt-20 ml-12">
                <h1 className="mt-6 text-7xl text-blue-900 font-bold">Governor Sindh</h1>
                <h1 className="text-5xl text-blue-900">Kamran Khan Tessori</h1>
                <h1 className="text-5xl text-cyan-500 font-bold mt-6">
                    Certified Cloud <br/>
                    Applied Generative AI <br/>
                    Engineer (GenEng)
                </h1>
                <h2 className="text-2xl text-blue-900 font-bold mt-4">Earn up to $5,000 / month</h2>
                <h2 className="text-2xl text-blue-900 font-bold mt-4">Now admissions are open in <br /> Hyderabad</h2>
                <button className=" w-44 h-14 p-4 mt-4 text-1xl text-white font-bold rounded bg-blue-900">APPLY NOW</button>
                <h3></h3>
            </div>

            {/* Image Section */}
            <div className="relative w-1/2">
                <img src="/governor.png" alt="Governor Image" className="w-full h-[640px] ml-44 mt-4" />
            </div>
        </main>
        
    );
}

export default Hero;
