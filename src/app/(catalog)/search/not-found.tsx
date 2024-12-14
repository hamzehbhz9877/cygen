import React from 'react';

const NotFound = () => {
    return (
        <div className="w-full flex flex-col items-center justify-between px-5 pt-5 pb-3">
            <div className="h-auto mb-5 styles_NotFound__image__LRvmi"><img
                className="w-full inline-block" src="https://www.digikala.com/statics/img/svg/plp/not-found.svg" alt="نتیجه‌ای یافت نشد"
                title=""/></div>
            <div
                className="flex flex-col rounded-medium py-4 border border-[#e0e0e2] px-5 w-full max-w-[480px]">
                <div className="sm:text-[12px] lg:text-[15px] leading-[2.15] lg:leading-[2.25] font-bold text-neutral-700 flex items-center">
                    <div className="flex ml-4">
                            <svg aria-hidden="true" data-icon="exclamation-circle" fill={"#ef5350"}
                                 focusable="false" height="1.5em" viewBox="64 64 896 896"
                                 width="1.5em">
                                <path
                                    d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                                <path
                                    d="M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
                            </svg>
                    </div>
                    کالایی با این مشخصات پیدا نکردیم
                </div>
                <div className="text-[11px] lg:text-[12px] leading-[2.17] text-neutral-500 mr-9">پیشنهاد می‌کنیم فیلترها
                    را تغییر دهید
                </div>
            </div>
        </div>
    );
};

export default NotFound;