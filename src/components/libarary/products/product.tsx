import React from 'react';


import "./product.scss"

const ProductSlider = () => {
    return (
        <article className="slide">
                <a href="https://pars.parskalas.com/product/13promax-phone/">
                    <div className="thumb-pro">
                        <img loading="lazy" width="300" height="300"
                             src="https://pars.parskalas.com/wp-content/uploads/2022/07/iphone-13-pro-max-300x300.png"
                             className="center wp-post-image" alt="" decoding="async"
                             srcSet="https://pars.parskalas.com/wp-content/uploads/2022/07/iphone-13-pro-max-300x300.png 300w, https://pars.parskalas.com/wp-content/uploads/2022/07/iphone-13-pro-max-100x100.png 100w, https://pars.parskalas.com/wp-content/uploads/2022/07/iphone-13-pro-max-600x600.png 600w, https://pars.parskalas.com/wp-content/uploads/2022/07/iphone-13-pro-max-150x150.png 150w, https://pars.parskalas.com/wp-content/uploads/2022/07/iphone-13-pro-max-768x768.png 768w, https://pars.parskalas.com/wp-content/uploads/2022/07/iphone-13-pro-max-460x460.png 460w, https://pars.parskalas.com/wp-content/uploads/2022/07/iphone-13-pro-max.png 800w"
                             sizes="(max-width: 300px) 100vw, 300px"/></div>

                    <div className="index-title-pro">
                        <h2>گوشی موبایل اپل مدل iPhone 13 Pro Max A2644 دو سیم‌ کارت...</h2>
                    </div>
                    <div className="index-prices-pro border-dashed-gradient">

                        <div className="price_onsale_ar text-left">

                            <del><span className="index-discount-pro">٪<p>10</p></span><span
                                className="woocommerce-Price-amount amount price_sale"><bdi><bdi>52,450,000&nbsp;</bdi></bdi></span></del>
                            <ins><span className="woocommerce-Price-amount amount price_sale"><bdi>47,390,000&nbsp;<span
                                className="woocommerce-Price-currencySymbol">تومان</span></bdi></span></ins>
                        </div>
                    </div>
                </a>
        </article>
    );
};

export default ProductSlider;