export type iService = {
    id: string,
    title: string,
    description: string,
    summary: string,
    link: string,
    imagePath:string
}

export type iProduct = {
    id: string,
    banner?: string,
    bannerPath?: string,
    benefit: Array<string>,
    details: string,
    product: string,
    summary: string
}
export type iHeroItem = {
    subTitle: string,
    title: string,
    link: string,
    buttonText: string,
}

