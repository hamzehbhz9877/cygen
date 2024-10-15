import {useEffect} from "react";

const UseScrollDetection = (up: any, down: any) => {
    useEffect(()=>{
        var lastScrollTop = 0;

        window.addEventListener("scroll", function(){
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                down()
            } else if (st < lastScrollTop) {
                up()
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, false);
    },[])
};

export default UseScrollDetection;