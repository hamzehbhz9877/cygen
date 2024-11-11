import React, {useEffect, useRef} from 'react';
import {MdKeyboardArrowLeft} from "react-icons/md";
import Link from "next/link";
import {RiStore2Line} from "react-icons/ri";
import {useSuspenseQuery} from "@tanstack/react-query";
import {GetSiteSettingsQuery} from "@/services/Common";

type Props = { closeMenu:()=>void,setSubCategoryId: (id: number) => void }

const activeList = "category-dropdown__header-item--active"

const DropdownHeading = ({closeMenu, setSubCategoryId}: Props) => {

    const {data} = useSuspenseQuery(GetSiteSettingsQuery)

    const tabRef = useRef<HTMLLIElement | null>(null)

    const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>, id: number) => {
        if (document.querySelector(`.${activeList}`)) {
            document.querySelector(`.${activeList}`)?.classList.remove(activeList)
        }
        e.currentTarget.classList.add(activeList)
        setSubCategoryId(id)
    }

    useEffect(()=>{
        setSubCategoryId(data?.TopMenu.Categories[0].Id)
    },[])

    return (
        <div className="sub-menu level-0">
            <ul>
                {
                    data?.TopMenu.Categories?.map(({Name, Id,SubCategories,SeName}: any, index) => {
                            return <li key={index} className={`category-dropdown__header-item relative ${index===0 ? activeList : ''}`}
                                       ref={tabRef} onMouseEnter={(e) => handleMouseEnter(e, Id)}
                            >
                                <Link href={"/category/"+SeName} key={index} onClick={closeMenu}>
                                    <span className="flex items-center gap-[4px]">
                                        <RiStore2Line size={18} className="icon ml-[4px]"/>
                                    <span>{Name}</span>
                                    </span>
                                    {SubCategories?
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