import React, {useEffect} from 'react';

const Logic = () => {
    const handleFilter = () => {
        document.querySelector('#filter-sidebar-mobile').classList.toggle("open")
        document.querySelector("body").style.overflow = "hidden"
    }

    const handleSort = () => {
        document.querySelector('.sort__mobile').classList.toggle("open")
    }
    useEffect(() => {
        const element:any = document.querySelector('.box-filter-shop')
        const rect = element.getBoundingClientRect();


        window.addEventListener("scroll", () => {
            if (window.scrollY > rect.y) {
                element.classList.add("fixed-top")
            } else {
                element.classList.remove("fixed-top")
            }
        })
        return ()=>{
            window.removeEventListener("scroll", () => {
                if (window.scrollY > rect.y) {
                    element.classList.add("fixed-top")
                } else {
                    element.classList.remove("fixed-top")
                }
            })
        }
    }, [])

    return {handleFilter,handleSort}
};

export default Logic;