export interface tagType {
    text: string,
    url: string,
}

export interface cardType {
    title: string, 
    desc: string, 
    kind: string, 
    tags: [tagType], 
    icon: string, 
    imgUrl: string,
    style: string,
}