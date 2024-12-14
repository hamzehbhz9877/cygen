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
                   Price,
                   PriceValue,
                   OldPriceValue,
                   DisableAddToCompareListButton,
                   DisableWishlistButton,
                   DisableBuyButton
               }: Props) => {

        const discount = (OldPriceValue - PriceValue) / OldPriceValue;


        return (
            <div className="index-prices-pro w-full mt-0 md:mt-4">
                <div className="price_onsale_ar">
                    {DisableBuyButton ? <div className="flex items-center justify-end gap-[10px] pb-[40px] ">
                            <div className=" h-[1px] w-[30px] sm:w-full bg-gray-400"></div>
                            <p className=" text-[12px] sm:text-[14px] font-semiBold leading-normal sm:leading-[25px] text-gray-600">ناموجود</p>
                            <div className=" h-[1px] w-[30px] sm:w-[60px] bg-gray-400"></div>
                        </div> :
                        OldPrice ? <>
                            <del><span className="index-discount-pro">٪<p>{Math.round(discount * 100)}</p></span><span
                                className="woocommerce-Price-amount amount price_sale"><bdi><bdi>{OldPrice?.split(" ")[0]}&nbsp;
                                {/*<span*/}
                                {/*    className="woocommerce-Price-currencySymbol">{OldPrice?.split(" ")[1]}</span>*/}
                                </bdi></bdi></span>
                            </del>
                            <ins><span className="woocommerce-Price-amount amount price_sale"><bdi>{Price?.split(" ")[0]}&nbsp;
                                <span
                                    className="woocommerce-Price-currencySymbol">{Price?.split(" ")[1]}</span></bdi></span>
                            </ins>
                        </> : PriceValue ? <ins><span className="woocommerce-Price-amount amount price_sale"><bdi>{Price?.split(" ")[0]}&nbsp;
                                <span className="woocommerce-Price-currencySymbol">{Price?.split(" ")[1]}</span></bdi></span>
                            </ins>
                            : <span className="flex justify-end text-sm">{Price}</span>
                    }
                </div>
            </div>
        )
            ;
    }
;

export default Price;