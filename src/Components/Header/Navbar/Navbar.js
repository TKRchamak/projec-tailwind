import React from 'react';

const Navbar = () => {
    return (
        <div className="container w-50 m-auto p-3">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="logo text-5xl">Name</h1>
                </div>
                <div className="">
                    <ul className="flex justify-between items-center gap-x-4">
                        <li><a className="text-gray-500 hover:text-black" href="/#">Home</a></li>
                        <li><a className="text-gray-500 hover:text-black" href="/#">Blog</a></li>
                        <li><a className="text-gray-500 hover:text-black" href="/#">Products</a></li>
                        <li><a className="text-gray-500 hover:text-black" href="/#">Guideline</a></li>
                        <li><a className="text-gray-500 hover:text-black" href="/#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;