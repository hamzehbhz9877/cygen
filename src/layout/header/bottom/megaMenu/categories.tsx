import React, {useRef} from 'react';
import {headerCategory} from "@/api/megamenu";
import {MdKeyboardArrowLeft} from "react-icons/md";
import Link from "next/link";

type Props = { setSubCategoryId: (id: number) => void, headerCategory: typeof headerCategory }

const activeList = "category-dropdown__header-item--active"

const DropdownHeading = ({headerCategory, setSubCategoryId}: Props) => {

    const tabRef = useRef<HTMLLIElement | null>(null)

    const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>, id: number) => {
        if (document.querySelector(`.${activeList}`)) {
            document.querySelector(`.${activeList}`)?.classList.remove(activeList)
        }
        e.currentTarget.classList.add(activeList)
        setSubCategoryId(id)
    }

    return (
        <div className="sub-menu level-0">
            <ul>
                {
                    headerCategory?.map(({tab, icon, id, active,subCategory}: typeof headerCategory[0], index) => {

                            const Icon = icon
                            return <li key={index} className={`category-dropdown__header-item relative
         ${active ? activeList : ''}`}
                                       ref={tabRef} onMouseEnter={(e) => handleMouseEnter(e, id)}
                            >
                                <Link href={"/"}>
                                    <span className="flex items-center gap-[4px]">
                                        <Icon size={18} className="icon ml-[4px]"/>
                                    <span>{tab}</span>
                                    </span>
                                    {subCategory?
                                    <MdKeyboardArrowLeft  width={20} height={16} color={'rgba(82,82,82,.45)'}
                                    />:""}
                                </Link>
                            </li>
                        }
                    )
                }
            </ul>
        </div>

    );
};

export default DropdownHeading;