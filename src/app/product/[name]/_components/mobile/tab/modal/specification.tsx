import React from 'react';
import {ModalBody, ModalHeader} from "@/components/modal";
import {FaAngleLeft} from "react-icons/fa6";
import {RiArrowLeftSFill} from "react-icons/ri";

const SpecificationModal = ({closeModal,product}:any) => {
    return (
        <>
            <ModalHeader>
                <div className="relative flex h-[52px] md:h-[72px] w-full items-center justify-between px-4 transition-all"><p
                    className="text-lg font-medium leading-8">مشخصات</p>
                    <div className="text-lg font-medium cursor-pointer gap-1.5 font-semiBold leading-6 flex items-center" onClick={closeModal}>
                        <span className={"text-[17px]"}>بازگشت</span>
                        <FaAngleLeft size={22} />
                    </div>
                    <span className="absolute inset-x-4 bottom-0 border-b border-primary-tint-5"></span></div>
            </ModalHeader>
            <ModalBody>
                <section className="py-2 px-4 specification">
                    <table className="shop_attributes woocommerce-group-attributes-layout-2">

                        <tbody>
                        {product?.ProductSpecificationModel.Groups.map(d => {
                            if (d.Name)
                                return <tr className={"attributes"} key={d.Id}>
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
                                                                    <>
                                                                        {value.ValueRaw}
                                                                        <br/>
                                                                    </>
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
                        <tr>
                            <th className="attribute_group_name"><RiArrowLeftSFill size={38}
                                                                                   className="text-dynamic-color-from me-[4px]"/>
                                سایر مشخصات
                            </th>
                            <td>
                                <table className="attribute_name_values">
                                    <tbody>

                                    {product?.ProductSpecificationModel.Groups[0].Attributes.map(attr => {
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
                        </tbody>
                    </table>
                </section>
            </ModalBody>
        </>

    );
};

export default SpecificationModal;