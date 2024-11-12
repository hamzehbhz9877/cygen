

type LicenseLogo= CapitalizeObjectKeys<{
    id: number,
    name: string,
    script: string,
    url: string,
    picture: CapitalizeObjectKeys<{
        id: number,
        imageUrl: string,
        fullSizeImageUrl: string,
        title: string,
        alternateText: string
    }>
}>[]