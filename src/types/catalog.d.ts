
type CapitalizeObjectKeys<T> = T extends Array<infer U>
    ? Array<CapitalizeObjectKeys<U>>
    : T extends object
        ? {
            [K in keyof T as Capitalize<string & K>]: Capitalize<T[K]>
        }
        : T

type catalog = CapitalizeObjectKeys<{
    id: number,
    name: string,
    description: string,
    metaKeywords: string,
    metaDescription: string,
    metaTitle: string,
    seName: string,
    pictureModel: {
        id: number,
        imageUrl: string,
        fullSizeImageUrl: string,
        title: string,
        alternateText: string
    },
    displayCategoryBreadcrumb: boolean,
    categoryBreadcrumb: [
        {
            id: number,
            name: string,
            seName: string,
            description: string,
            pictureModel: {
                id: number,
                imageUrl: string,
                fullSizeImageUrl: string,
                title: string,
                alternateText: string
            }
        }
    ],
    subCategories: [
        {
            id: number,
            name: string,
            seName: string,
            description: string,
            pictureModel: {
                id: number,
                imageUrl: string,
                fullSizeImageUrl: string,
                title: string,
                alternateText: string
            }
        }
    ],
    featuredProducts: [
        {
            id: number,
            name: string,
            shortDescription: string,
            fullDescription: string,
            seName: string,
            sku: string,
            markAsNew: boolean,
            productPrice: {
                oldPrice: string,
                oldPriceValue: number,
                price: string,
                priceValue: number,
                disableBuyButton: boolean,
                disableWishlistButton: boolean,
                disableAddToCompareListButton: boolean,
                forceRedirectionAfterAddingToCart: boolean
            },
            pictureModels: [
                {
                    id: number,
                    imageUrl: string,
                    fullSizeImageUrl: string,
                    title: string,
                    alternateText: string
                }
            ],
            productSpecificationModel: {
                groups: [
                    {
                        id: number,
                        name: string,
                        attributes: [
                            {
                                id: number,
                                name: string,
                                values: [
                                    {
                                        attributeTypeId: number,
                                        valueRaw: string,
                                        colorSquaresRgb: string
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            reviewOverviewModel: {
                productId: number,
                ratingSum: number,
                totalReviews: number,
                allowCustomerReviews: boolean,
                canAddNewReview: boolean,
                canCurrentCustomerLeaveReview: boolean
            }
        }
    ],
    catalogProductsModel: CapitalizeObjectKeys<{
        pageIndex: number,
        pageNumber: number,
        pageSize: number,
        totalItems: number,
        totalPages: number,
        firstItem: number,
        lastItem: number,
        hasPreviousPage: boolean,
        hasNextPage: boolean,
        noResultMessage: string,
        priceRangeFilter:CapitalizeObjectKeys< {
            enabled: boolean,
            selectedPriceRange: {
                from: number,
                to: number
            },
            availablePriceRange: {
                from: number,
                to: number
            }
        }>,
        specificationFilter: CapitalizeObjectKeys<{
            enabled: boolean,
            attributes: [
                {
                    id: number,
                    name: string,
                    values: [
                        {
                            id: number,
                            name: string,
                            colorSquaresRgb: string,
                            selected: boolean
                        }
                    ]
                }
            ]
        }>,
        manufacturerFilter:CapitalizeObjectKeys< {
            enabled: boolean,
            manufacturers: [
                {
                    disabled: boolean,
                    group: {
                        disabled: boolean,
                        name: string
                    },
                    selected: boolean,
                    text: string,
                    value: string
                }
            ]
        }>,
        allowProductSorting: boolean,
        availableSortOptions:CapitalizeObjectKeys< [
            {
                disabled: boolean,
                group: {
                    disabled: boolean,
                    name: string
                },
                selected: boolean,
                text: string,
                value: string
            }
        ]>,
        products:CapitalizeObjectKeys<[
            {
                id: number,
                name: string,
                shortDescription: string,
                fullDescription: string,
                seName: string,
                sku: string,
                markAsNew: boolean,
                productPrice: {
                    oldPrice: string,
                    oldPriceValue: number,
                    price: string,
                    priceValue: number,
                    disableBuyButton: boolean,
                    disableWishlistButton: boolean,
                    disableAddToCompareListButton: boolean,
                    forceRedirectionAfterAddingToCart: boolean
                },
                pictureModels: [
                    {
                        id: number,
                        imageUrl: string,
                        fullSizeImageUrl: string,
                        title: string,
                        alternateText: string
                    }
                ],
                productSpecificationModel: {
                    groups: [
                        {
                            id: number,
                            name: string,
                            attributes: [
                                {
                                    id: number,
                                    name: string,
                                    values: [
                                        {
                                            attributeTypeId: number,
                                            valueRaw: string,
                                            colorSquaresRgb: string
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                reviewOverviewModel: {
                    productId: number,
                    ratingSum: number,
                    totalReviews: number,
                    allowCustomerReviews: boolean,
                    canAddNewReview: boolean,
                    canCurrentCustomerLeaveReview: boolean
                }
            }
        ]>,
        orderBy: number
    }>,
    jsonLd: string
}>