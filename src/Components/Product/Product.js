import React from 'react';

const Product = (p) => {
    // const{albumId, thumbnailUrl, title, url} = p;
    // const title = p.title;
    // console.log(p.p.title);
    return (
        <div className="max-w-lg max-h-96 p-4 shadow-md m-3">
            <img className="w-4/5 h-72 m-auto" src={p.p.image} alt="pic" />
            <div className="bg-gray-200 h-12 mt-5 rounded">
                <h2 className="m-b-5 text-center ">{p.p.title}</h2>
            </div>
        </div>
    );
};

export default Product;