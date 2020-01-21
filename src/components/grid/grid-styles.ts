import { CSSProperties } from '@material-ui/styles'

import { BREAK_POINTS, Breakpoint, breakpointMinWidthMap, mediaQueryStr } from '../../../src/styles/styles'
import {
    GRID_SIZES,
    GridContentAlignment,
    gridContentAlignmentOptions,
    GridDirection,
    gridDirectionOptions,
    GridItemsAlignment,
    gridItemsAlignmentOptions,
    GridJustification,
    gridJustificationOptions,
    GridSize,
    gridSpacingOptions,
    GridWrap,
    gridWrapOptions,
} from './grid-models'

export const globalItemClassName = "grid-item"
export const globalContainerClassName = "grid-container"
export const defaultContianerStyles: CSSProperties = {
    "width": "100%",
    "display": "flex",
    "flexWrap": "wrap",
    "boxSizing": "border-box"
}

export const defaultItemStyles: CSSProperties = {
    "margin": "0",
    "boxSizing": "border-box"
}

export const itemStyles: CSSProperties = {
    "flexGrow": 0,
    "maxWidth": "16.666667%",
    "flexBasis": "16.666667%"
}

export const flexDirectionClassName = (opt: GridDirection) => `direction-xs-${opt}`
export const getFlexDirectionStyles = (): Record<string, CSSProperties> => {
    return gridDirectionOptions.reduce<Record<string, CSSProperties>>((rMap, opt) => {
        return {
            ...rMap, [flexDirectionClassName(opt)]: { flexDirection: opt }
        }
    }, {})
}

export const flexWrapClassName = (opt: GridWrap) => `wrap-xs-${opt}`
export const getFlexWrapStyles = (): Record<string, CSSProperties> => {
    return gridWrapOptions.reduce<Record<string, CSSProperties>>((rMap, opt) => {
        return {
            ...rMap, [flexWrapClassName(opt)]: { flexWrap: opt }
        }
    }, {})
}

export const alignItemsClassName = (opt: GridItemsAlignment) => `align-items-xs-${opt}`
export const getAlignItemsStyles = (): Record<string, CSSProperties> => {
    return gridItemsAlignmentOptions.reduce<Record<string, CSSProperties>>((rMap, opt) => {
        return {
            ...rMap, [alignItemsClassName(opt)]: { alignItems: opt }
        }
    }, {})
}
export const alignContentClassName = (opt: GridContentAlignment) => `align-content-xs-${opt}`
export const getAlignContentStyles = (): Record<string, CSSProperties> => {
    return gridContentAlignmentOptions.reduce<Record<string, CSSProperties>>((rMap, opt) => {
        return {
            ...rMap, [alignContentClassName(opt)]: { alignContent: opt }
        }
    }, {})
}

export const justifyContentClassName = (opt: GridJustification) => `justify-content-xs-${opt}`
export const getJustifyContentStyles = (): Record<string, CSSProperties> => {
    return gridJustificationOptions.reduce<Record<string, CSSProperties>>((rMap, opt) => {
        return {
            ...rMap, [justifyContentClassName(opt)]: { justifyContent: opt }
        }
    }, {})
}

export const spacingClassName = (gutter: number) => `spacing-xs-${gutter}`
export const getSpacingStyles = (): Record<string, CSSProperties> => {
    return gridSpacingOptions.reduce<Record<string, CSSProperties>>((rMap, g) => {
        const className = spacingClassName(g)
        const gStyles = {
            [className]: {
                "width": `calc(100% + ${g}px)`,
                "margin": `-${g / 2}px`,
                ["&>." + globalItemClassName]: {
                    "padding": `${g / 2}px`
                }
            }
        }
        return { ...rMap, ...gStyles }
    }, {})
}

export const gridItemClassName = (gridSize: GridSize, breakpoint: Breakpoint) => `grid-${breakpoint}-${gridSize}`
export const getGridItemStyles = (): Record<string, CSSProperties> => {
    return BREAK_POINTS.reduce<Record<string, CSSProperties>>((bMap, breakpoint) => {
        let map = GRID_SIZES.reduce<Record<string, CSSProperties>>((rMap, size) => {
            if (typeof size === "number") {
                const percentage = (size / 12) * 100
                return {
                    ...rMap, [gridItemClassName(size, breakpoint)]: {
                        "flexGrow": 0,
                        "maxWidth": `${percentage}%`,
                        "flexBasis": `${percentage}%`
                    }
                }
            } else if (size === "auto") {
                return {
                    ...rMap, [gridItemClassName(size, breakpoint)]: {
                        "flexGrow": 0,
                        "maxWidth": "none",
                        "flexBasis": "auto"
                    }
                }
            } else {
                return {
                    ...rMap, [gridItemClassName(size, breakpoint)]: {
                        "flexGrow": 1,
                        "maxWidth": "none",
                        "flexBasis": "auto"
                    }
                }
            }
        }, {})
        const minWidth = breakpointMinWidthMap[breakpoint]
        if (minWidth) {
            map = { [mediaQueryStr(minWidth)]: map }
        }
        return { ...bMap, ...map }
    }, {})
}

export const generateGridStyles = (): Record<string, CSSProperties> => {
    const directionStyles = getFlexDirectionStyles()
    const wrapStyles = getFlexWrapStyles()
    const alignItemsStyles = getAlignItemsStyles()
    const alignContentStyles = getAlignContentStyles()
    const justifyContentStyles = getJustifyContentStyles()
    const spacingStyles = getSpacingStyles()
    const gridItemStyles = getGridItemStyles()
    return {
        "@global": {
            ["." + globalContainerClassName]: { ...defaultContianerStyles },
            ["." + globalItemClassName]: defaultItemStyles,
        },
        zeroMinWidth: {
            minWidth: 0
        },
        ...directionStyles,
        ...wrapStyles,
        ...alignItemsStyles,
        ...alignContentStyles,
        ...justifyContentStyles,
        ...spacingStyles,
        ...gridItemStyles
    }
}