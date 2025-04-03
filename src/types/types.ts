export interface tagType {
    text: string,
    url: string,
}

export interface copyType {
    label?: string,
    text: string,
}
export interface cardType {
    title: string, 
    desc?: string, 
    kind: string, 
    tags?: tagType[], 
    icon: string, 
    imgUrl?: string,
    code?: copyType[],
    style: string,
}

export interface ReactionButtonType {
    style?: string, 
    text: string
}