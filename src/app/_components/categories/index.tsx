import React from 'react';


import "./index.scss"
import Image from "next/image";
import Link from "next/link";

const Categories = ({data}: any) => {
    return (
        <section className="categories container my-[30px]">
            <h3>دسته بندی های پیشنهادی</h3>
            <div className="categories__items">
                {data.map(({SeName, Name, PictureModel}, i) => (
                    <div className="categories__item" key={i}>
                        <Link href={`/category/${SeName}`}><Image decoding="async" width={200} height={200}
                                                                  src={PictureModel.ImageUrl}
                                                                  title={PictureModel.Title}
                                                                  alt={PictureModel.AlternateText}/>
                            <span className="title-item">{Name}</span>
                        </Link>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;