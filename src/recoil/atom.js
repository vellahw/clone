import { atom } from "recoil";

export const whiteNav = atom({
    key: "whiteNav",
    default: 1
})

export const navOpen = atom({
    key: "navOpen",
    default: false
})

export const isScroll = atom({
    key: "isScroll",
    default: 0
})