import React from 'react';
import {RiArrowLeftSFill} from "react-icons/ri";
import {RiCloseFill} from "react-icons/ri";
import {RiCheckLine} from "react-icons/ri";

const Specification = ({product}) => {

    console.log(product?.ProductSpecificationModel)
    return (
        <div className="specification">
            <div
                className=" woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content "
                role="tabpanel" aria-labelledby="tab-title-additional_information" id="tab-additional_information"
            >

                <h2 className="title">مشخصات</h2>

                <span className="title-desktop">{product.Name}</span>
                <table className="shop_attributes woocommerce-group-attributes-layout-2">

                    <tbody>
                    {product?.ProductSpecificationModel.Groups.map(d => {
                        if (d.Name)
                            return <tr key={d.Id}>
                                <th className="attribute_group_name"><RiArrowLeftSFill size={38}
                                                                                       className="text-dynamic-color-from me-[4px]"/>
                                    {d.Name}
                                </th>
                                <td>
                                    <table className="attribute_name_values">
                                        <tbody>

                                        {d.Attributes.map(attr => {
                                            return (
                                                <tr key={attr.Id}>
                                                    <td className="attribute_name">{attr.Name}</td>

                                                    <td className="attribute_value "><p>
                                                        {attr.Values.map((value) => {
                                                            return (
                                                                <div key={value.AttributeTypeId}>
                                                                    {value.ValueRaw}
                                                                    <br/>
                                                                </div>
                                                            )

                                                        })}
                                                    </p></td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                    })}

                    {/*<tr>*/}

                    {/*    <th className="attribute_group_name"><RiArrowLeftSFill size={38}*/}
                    {/*                                                           className="text-dynamic-color-from me-[4px]"/> مشخصات*/}
                    {/*        دوربین*/}
                    {/*        موبایل*/}
                    {/*    </th>*/}
                    {/*    <td>*/}
                    {/*        <table className="attribute_name_values">*/}
                    {/*            <tbody>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">بازه تصویر برداری</td>*/}
                    {/*                <td className="attribute_value "><p>بین 8 الی 16 مگا پیکسل</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">تعداد دوربین</td>*/}
                    {/*                <td className="attribute_value "><p>بیش از سه عدد</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">عکس برداری دوربین عقب</td>*/}
                    {/*                <td className="attribute_value "><p>12مگاپیکسل دوربین اولترا واید</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">عکس برداری دوربین جلو</td>*/}
                    {/*                <td className="attribute_value "><p>12مگاپیکسل دوربین واید</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">فیلم برداری دوربین جلو</td>*/}
                    {/*                <td className="attribute_value "><p>1080p/30fps<br/>4K/60fps</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">فیلم برداری دوربین عقب</td>*/}
                    {/*                <td className="attribute_value ">*/}
                    {/*                    <p>1080p/120fps<br/>1080p/30fps<br/>1080p/60fps<br/>۲۱۶۰p/24fps<br/>۲۱۶۰p/30fps<br/>۲۱۶۰p/60p*/}
                    {/*                    </p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            </tbody>*/}
                    {/*        </table>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}

                    {/*    <th className="attribute_group_name"><RiArrowLeftSFill size={38}*/}
                    {/*                                                           className="text-dynamic-color-from me-[4px]"/> مشخصات*/}
                    {/*        صفحه نمایش*/}
                    {/*        موبایل*/}
                    {/*    </th>*/}
                    {/*    <td>*/}
                    {/*        <table className="attribute_name_values">*/}
                    {/*            <tbody>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">جزئیات فناوری صفحه نمایش</td>*/}
                    {/*                <td className="attribute_value "><p>Super Retina XDR OLED</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">میزان روشنایی صفحه نمایش</td>*/}
                    {/*                <td className="attribute_value "><p>1200 نیت</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">رزولوشن صفحه نمایش</td>*/}
                    {/*                <td className="attribute_value "><p>1284 در 2778 پیکسل</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">اندازه صفحه نمایش</td>*/}
                    {/*                <td className="attribute_value "><p>6.7 اینچ</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">فناوری صفحه نمایش</td>*/}
                    {/*                <td className="attribute_value "><p>OLED</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            </tbody>*/}
                    {/*        </table>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}

                    {/*    <th className="attribute_group_name"><RiArrowLeftSFill size={38}*/}
                    {/*                                                           className="text-dynamic-color-from me-[4px]"/> مشخصات*/}
                    {/*        سخت افزاری*/}
                    {/*    </th>*/}
                    {/*    <td>*/}
                    {/*        <table className="attribute_name_values">*/}
                    {/*            <tbody>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">ظرفیت حافظه داخلی محصول</td>*/}
                    {/*                <td className="attribute_value "><p>512گیگ</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">نوع سیستم عامل محصول</td>*/}
                    {/*                <td className="attribute_value "><p>iOS</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">نوع پردازنده محصول</td>*/}
                    {/*                <td className="attribute_value "><p>Bionic</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">بلندگو محصول</td>*/}
                    {/*                <td className="attribute_value "><p>بلندگو پخش استریو</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">حسگر ها محصول</td>*/}
                    {/*                <td className="attribute_value "><p>ژیروسکوپ<br/>شتاب سنج<br/>فشار سنج<br/>قطب نما*/}
                    {/*                </p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">ظرفیت حافظه RAM</td>*/}
                    {/*                <td className="attribute_value "><p>6 گیگابایت رم</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">پشتیبانی از کارت حافظه خارجی</td>*/}
                    {/*                <td className="attribute_value false"><p><RiCloseFill size={18} color={"#fe4343"}/>*/}
                    {/*                </p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">پردازنده گرافیکی کالا</td>*/}
                    {/*                <td className="attribute_value "><p>Apple GPU</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">پردازنده کالا</td>*/}
                    {/*                <td className="attribute_value "><p>A۱۵ Bionic (۵ nm) Chipset</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">پشتیبانی از جک صدا 3.5 میلی متری</td>*/}
                    {/*                <td className="attribute_value true"><p><RiCheckLine size={18} color={"#00cb3b"}/>*/}
                    {/*                </p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            </tbody>*/}
                    {/*        </table>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}

                    {/*    <th className="attribute_group_name"><RiArrowLeftSFill size={38}*/}
                    {/*                                                           className="text-dynamic-color-from me-[4px]"/> مشخصات*/}
                    {/*        شبکه و*/}
                    {/*        ارتباط موبایل*/}
                    {/*    </th>*/}
                    {/*    <td>*/}
                    {/*        <table className="attribute_name_values">*/}
                    {/*            <tbody>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">نسخه بلوتوث کالا</td>*/}
                    {/*                <td className="attribute_value "><p>5.0</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">شبکه های ارتباطی</td>*/}
                    {/*                <td className="attribute_value "><p>2G3G4G5G</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">فناوری های ارتباطی</td>*/}
                    {/*                <td className="attribute_value "><p>EDGEGPRSNFCWi-Fiبلوتوث</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            </tbody>*/}
                    {/*        </table>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}

                    {/*    <th className="attribute_group_name"><RiArrowLeftSFill size={38}*/}
                    {/*                                                           className="text-dynamic-color-from me-[4px]"/> مشخصات*/}
                    {/*        باتری موبایل*/}
                    {/*    </th>*/}
                    {/*    <td>*/}
                    {/*        <table className="attribute_name_values">*/}
                    {/*            <tbody>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">بازه ظرفیت باتری</td>*/}
                    {/*                <td className="attribute_value "><p>بین 2 الی 4 هزار میلی آمپر ساعت</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">قابلیت های شارژ</td>*/}
                    {/*                <td className="attribute_value "><p>باتری لیتیوم یونی 3200 میلی آمپر ساعتشارژ سریع*/}
                    {/*                    وایرلس ۱۵ وات</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">درگاه شارژ</td>*/}
                    {/*                <td className="attribute_value "><p>لایتنینگ</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">ظرفیت باتری کالا</td>*/}
                    {/*                <td className="attribute_value "><p>باتری لیتیوم یونی 3200 میلی آمپر ساعت</p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            </tbody>*/}
                    {/*        </table>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    {/*<tr>*/}

                    {/*    <th className="attribute_group_name"><RiArrowLeftSFill size={38}*/}
                    {/*                                                           className="text-dynamic-color-from me-[4px]"/> مشخصات*/}
                    {/*        دیگر*/}
                    {/*    </th>*/}
                    {/*    <td>*/}
                    {/*        <table className="attribute_name_values">*/}
                    {/*            <tbody>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">انتخاب رنگ</td>*/}
                    {/*                <td className="attribute_value "><p><a*/}
                    {/*                    href="https://pars.parskalas.com/color-selector/%d8%a2%d8%a8%db%8c/"*/}
                    {/*                    rel="tags">آبی</a> <a*/}
                    {/*                    href="https://pars.parskalas.com/color-selector/%d8%a7%d8%b3%d8%aa%db%8c%d9%84/"*/}
                    {/*                    rel="tags">استیل</a> <a*/}
                    {/*                    href="https://pars.parskalas.com/color-selector/%d8%a8%d8%b1%d9%86%d8%b2/"*/}
                    {/*                    rel="tags">برنز</a> <a*/}
                    {/*                    href="https://pars.parskalas.com/color-selector/%d8%a8%d9%86%d9%81%d8%b4/"*/}
                    {/*                    rel="tags">بنفش</a> <a*/}
                    {/*                    href="https://pars.parskalas.com/color-selector/%d8%b3%d8%a8%d8%b2/"*/}
                    {/*                    rel="tags">سبز</a> <a*/}
                    {/*                    href="https://pars.parskalas.com/color-selector/%d8%b3%d8%b1%d9%85%d9%87-%d8%a7%db%8c%db%8c/"*/}
                    {/*                    rel="tags">سرمه ایی</a> <a*/}
                    {/*                    href="https://pars.parskalas.com/color-selector/%d8%b3%d9%81%db%8c%d8%af/"*/}
                    {/*                    rel="tags">سفید</a> <a*/}
                    {/*                    href="https://pars.parskalas.com/color-selector/%d8%b7%d9%84%d8%a7%db%8c%db%8c/"*/}
                    {/*                    rel="tags">طلایی</a> <a*/}
                    {/*                    href="https://pars.parskalas.com/color-selector/%d9%82%d8%b1%d9%85%d8%b2/"*/}
                    {/*                    rel="tags">قرمز</a> <a*/}
                    {/*                    href="https://pars.parskalas.com/color-selector/%d9%86%d8%a7%d8%b1%d9%86%d8%ac%db%8c/"*/}
                    {/*                    rel="tags">نارنجی</a> <a*/}
                    {/*                    href="https://pars.parskalas.com/color-selector/%d9%86%d9%82%d8%b1%d9%87-%d8%a7%db%8c/"*/}
                    {/*                    rel="tags">نقره ای</a></p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td className="attribute_name">گارانتی</td>*/}
                    {/*                <td className="attribute_value "><p><a*/}
                    {/*                    href="https://pars.parskalas.com/granti/%da%af%d8%a7%d8%b1%d8%a7%d9%86%d8%aa%db%8c-18-%d9%85%d8%a7%d9%87%d9%87-%d8%b4%d8%b1%da%a9%d8%aa%db%8c-%d9%85%d8%b9%d8%aa%d8%a8%d8%b1-%da%a9%d8%af-%d8%b1%db%8c%d8%ac%d8%b3%d8%aa%d8%b1%db%8c/"*/}
                    {/*                    rel="tags">گارانتی 18 ماهه شرکتی معتبر</a></p>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            </tbody>*/}
                    {/*        </table>*/}
                    {/*    </td>*/}
                    {/*</tr>*/}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Specification;