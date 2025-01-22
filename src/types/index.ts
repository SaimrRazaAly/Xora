export interface NavLinkProp {
    title:string
}
export interface ButtonProp {
    icon?:string
    children?:string
    href?:string
    containerClassName?:string
    onClick?:()=>void
    markerFill?:string
}