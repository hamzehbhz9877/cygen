import React from 'react';
import {ModalBody, ModalHeader} from "@/components/modal";
import {FaAngleLeft} from "react-icons/fa6";

const InfoModal = ({closeModal}:any) => {
    return (
        <>
            <ModalHeader>
                <div className="relative flex h-[52px] md:h-[72px] w-full items-center justify-between px-4 transition-all"><p
                    className="text-lg font-medium leading-8">توضیحات</p>
                    <div className="text-lg font-medium cursor-pointer gap-1.5 font-semiBold leading-6 flex items-center" onClick={closeModal}>
                        <span className={"text-[17px]"}>بازگشت</span>
                        <FaAngleLeft size={22} />
                    </div>
                    <span className="absolute inset-x-4 bottom-0 border-b border-primary-tint-5"></span></div>
            </ModalHeader>
            <ModalBody>

                        <section className="py-2 px-4">
                            <div className="break-words py-3">
                                <div className="d-flex ai-center grow-1">
                                    <p className="grow-1 text-h5 color-900">آیفون 13 پرو مکس تا دندان مسلح</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-body-1 color-800">گوشی‌های هوشمند خانواده آیفون 13 در قالب چهار گوشی
                                    هوشمند
                                    آیفون 13 پرو مکس، آیفون 13 پرو، آیفون 13‌ و آیفون 13 مینی معرفی شدند. پرچمداران جدید
                                    اپل این
                                    بار قدرتمند‌تر از همیشه پا به عرصه رقابت گذاشته اند تا در رقابتی بسیار جذاب، عملکردی
                                    بهتر به
                                    نسبت پرچمداران اندرویدی به نمایش بگذارد. از جمله اصلی‌ترین تغییرات در نظر گرفته شده
                                    برای این
                                    گوشی های هوشمند در مقایسه با پرچمداران خانواده آیفون 12 می‌توانیم به سنسور‌های
                                    دوربین
                                    قدرتمند‌تر، پردازنده فوق العاده با عملکرد بهتر و خیره کننده به نسبت نسل قبلی، تنوع
                                    رنگی
                                    بالا، صفحه نمایش به‌مراتب با‌کیفیت‌تراشاره کنیم. در این بررسی به‌سراغ آیفون 13 پرو
                                    مکس به
                                    عنوان گل سرسبد گوشی های هوشمند این خانواده رفته ایم تا ببینیم چه مشخصاتی را با خودش
                                    به همراه
                                    داشته و به نسبت آیفون 12 پرو مکس چه تغییرات در مشخصات فنی در نظر گرفته شده دارد.</p>
                            </div>
                            <div className="d-flex jc-center ai-center mb-4">
                                <div className="radius w-full"><img decoding="async"
                                                                    className="w-100 d-inline-block lazyloaded"
                                                                    src="https://dkstatics-public.digikala.com/digikala-reviews/da5acaedb196ca8fdeb97bd4bb5de9cbe30f369b_1631699871.jpg?x-oss-process=image/quality,q_70"
                                                                    alt="" width="944"
                                                                    data-src="https://dkstatics-public.digikala.com/digikala-reviews/da5acaedb196ca8fdeb97bd4bb5de9cbe30f369b_1631699871.jpg?x-oss-process=image/quality,q_70"/>
                                </div>
                            </div>
                        </section>
            </ModalBody>
        </>

);
};

export default InfoModal;