export type iService = {
    title: string,
    description: string,
    link: string
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