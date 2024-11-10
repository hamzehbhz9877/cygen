type dynamicLinksType =CapitalizeObjectKeys< {
    id: number,
    name: string,
    url: string,
    position: number,
    openInNewPage: boolean,
    icon: string,
    displayOrder: number,
    parentId: number
}[]>