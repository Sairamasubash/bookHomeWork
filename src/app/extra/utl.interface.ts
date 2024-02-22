export interface iOne {
    kind: string
    totalItems: number
    items: iTwo[]
}

export interface iTwo {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: iThree
    saleInfo: iEight
    accessInfo: iFourteen
    searchInfo: iSeventeen
}

export interface iThree {
    title: string
    subtitle: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: iFour[]
    readingModes: iFive
    pageCount: number
    printType: string
    categories: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: iSix
    imageLinks: iSeven
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}

export interface iFour {
    type: string
    identifier: string
}

export interface iFive {
    text: boolean
    image: boolean
}

export interface iSix {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
}

export interface iSeven {
    smallThumbnail: string
    thumbnail: string
}

export interface iEight {
    country: string
    saleability: string
    isEbook: boolean
    listPrice: iNine
    retailPrice: iTen
    buyLink: string
    offers: iEleven[]
}

export interface iNine {
    amount: number
    currencyCode: string
}

export interface iTen {
    amount: number
    currencyCode: string
}

export interface iEleven {
    finskyOfferType: number
    listPrice: iTwelve
    retailPrice: iThirteen
    giftable: boolean
}

export interface iTwelve 
{
    amountInMicros: number
    currencyCode: string
}

export interface iThirteen 
{
    amountInMicros: number
    currencyCode: string
}

export interface iFourteen 
{
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: iFifteen
    pdf: iSixteen
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
}

export interface iFifteen 
{
    isAvailable: boolean
}

export interface iSixteen 
{
    isAvailable: boolean
}

export interface iSeventeen 
{
    textSnippet: string
}
