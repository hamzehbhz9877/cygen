import React from 'react';


type Props = {
    OldPrice: string | null,
    OldPriceValue: number | null,
    Price: string,
    PriceValue: number,
    DisableBuyButton: boolean,
    DisableWishlistButton: boolean,
    DisableAddToCompareListButton: boolean,
    ForceRedirectionAfterAddingToCart: boolean
}
const Price = ({
                   OldPrice,
                   Price='514٬000٬000 ریال',
                   PriceValue,
                   OldPriceValue,
                   DisableAddToCompareListButton,
                   DisableWishlistButton,
                   DisableBuyButton
               }: Props) => {

    return (
        <div className="index-prices-pro">
            <div className="price_onsale_ar">
                {
                    OldPrice ? <>
                        <del><span className="index-discount-pro">٪<p>4</p></span><span
                            className="woocommerce-Price-amount amount price_sale"><bdi><bdi>{OldPrice?.split(" ")[0]} &nbsp;
                            <span
                                className="woocommerce-Price-currencySymbol">{OldPrice?.split(" ")[1]}</span></bdi></bdi></span>
                        </del>
                        <ins><span className="woocommerce-Price-amount amount price_sale"><bdi>{Price?.split(" ")[1]} &nbsp;
                            <span className="woocommerce-Price-currencySymbol">{Price?.split(" ")[1]}</span></bdi></span>
                        </ins>
                    </> : <ins><span className="woocommerce-Price-amount amount price_sale"><bdi>{'514٬000٬000 ریال'?.split(" ")[0]}&nbsp;
                        <span className="woocommerce-Price-currencySymbol">{'514٬000٬000 ریال'?.split(" ")[1]}</span></bdi></span>
                    </ins>
                }

            </div>
        </div>
    );
};

export default Price;