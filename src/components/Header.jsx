const Header = () => {
    return (
        <header className="flex justify-between py-8 px-8 shadow-lg">
            <h2 className="font-Nunito font-extrabold text-3xl">Where in the World?</h2>
            <button className="flex space-x-2">
                <svg viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 fill-none stroke-current stroke-1 mx-0">
                    <path xmlns="http://www.w3.org/2000/svg" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                <h5 className="font-Nunito font-semibold">Dark mode</h5>
            </button>
        </header>
    );
}

export default Header;