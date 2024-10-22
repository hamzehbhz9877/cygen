
const RangeLogic = (inputLeft:any,thumbLeft:any,range:any,inputRight:any,thumbRight:any) => {
    const calcRangeLeft=()=>{
        function setLeftValue() {
            const _this:any = inputLeft.current,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.current.value) - 1);

            const percent = ((_this.value - min) / (max - min)) * 100;

            thumbLeft.current.style.left = percent + "%";
            range.current.style.left = percent + "%";
        }
        setLeftValue()
    }

    const calRangeRight=()=>{
        function setRightValue() {
            const _this:any = inputRight.current,
                min = parseInt(_this.min),
                max = parseInt(_this.max);

            _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.current.value) + 1);

            const percent = ((_this.value - min) / (max - min)) * 100;

            thumbRight.current.style.right = (100 - percent) + "%";
            range.current.style.right = (100 - percent) + "%";
        }
        setRightValue();
    }

    return {calcRangeLeft,calRangeRight}
};

export default RangeLogic;