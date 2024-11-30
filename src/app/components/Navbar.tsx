function Navbar() {
    return (
        <nav className="relative flex justify-around items-center bg-blue-900 h-20 w-full text-white">
            {/* Logo Section */}
            <div className="absolute -bottom-14 left-12 z-10">
                <img src="/logo.png" alt="Logo" width={90} height={113} />
            </div>

            {/* Title Section */}
            <div className="ml-12 pl-12"><h3 className="text-2xl">Tuition Free Education Program on Latest Technologies</h3></div>

            {/* Navigation Links */}
            <ul className="flex justify-between space-x-8">
                <li>Home</li>
                <li>Apply</li>
                <li>Jobs</li>
                <li>Result</li>
                <li>Courses</li>
            </ul>
        </nav>
    );
}

export default Navbar;
