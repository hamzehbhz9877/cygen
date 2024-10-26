const formatter = new Intl.NumberFormat("fa-IR", {
    useGrouping: true,
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function toEnglishDigits(num: any) {
    const id = {
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',
    }
    return num ? num.toString().replace(/[^0-9.]/g, function (w:any) {
        // @ts-ignore
        return id[w]  || w
    }) : null
}

export {formatter,toEnglishDigits}