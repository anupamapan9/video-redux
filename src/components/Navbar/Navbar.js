import React from 'react';
import Search from './Search';
import LogoImg from '../../assets/lws.svg'
import SearchImg from '../../assets/search.svg'
const Navbar = () => {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
                <a href="/">
                    <img className="h-10" src={LogoImg} alt="Learn with Sumit" />
                </a>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
                    {/* <!-- search --> */}
                    <Search />
                    <img className="inline h-4 cursor-pointer" src={SearchImg} alt="Search" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;