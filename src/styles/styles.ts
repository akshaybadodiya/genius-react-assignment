import { CSSProperties } from '@material-ui/styles'

import * as commonAnimations from './common-animation'

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl"
export const BREAK_POINTS: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"]
export const breakpointMinWidthMap: { [x in Breakpoint]: number } = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
}

const fontFamily = (family: string): CSSProperties => {
    return { fontFamily: family }
}
export const proximaRegular = fontFamily("'ProximaNova-Regular', sans-serif")
export const proximaRegularCondensed = fontFamily("'ProximaNova-RegularCondensed', sans-serif")
export const avenirBold = fontFamily("'AvenirNextCondensed-Bold', sans-serif")
export const robotoRegular = fontFamily("'Roboto-Regular', sans-serif")

export const mediaQueryStr = (minWidth: number, maxWidth?: number): string => {
    if (maxWidth) {
        return `@media only screen and (max-width: ${maxWidth}px) and (min-width: ${minWidth}px)`
    }
    return `@media only screen and (min-width: ${minWidth}px)`
}

export const smAndDown = () => mediaQueryStr(0, breakpointMinWidthMap["sm"])
export const smAndUp = () => mediaQueryStr(breakpointMinWidthMap["sm"])
export const mdAndUp = () => mediaQueryStr(breakpointMinWidthMap["md"])
export const lgAndUp = () => mediaQueryStr(breakpointMinWidthMap["lg"])
export const xlAndUp = () => mediaQueryStr(breakpointMinWidthMap["xl"])

//If required
// export const smToMd = () => mediaQueryStr(breakpointMinWidthMap["sm"], breakpointMinWidthMap["md"])


export const pxStr = (arr: (number | string)[]): string => {
    return arr.map(s => typeof s == "number" ? `${s}px` : s).join(" ")
}

type AnimationType = keyof typeof commonAnimations
export const includeAnimation = (type: AnimationType) => {
    return {
        [`@keyframes ${type}`]: {
            ...commonAnimations[type]
        }
    }
}