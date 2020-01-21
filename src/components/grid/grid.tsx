import { WithStyles, withStyles } from '@material-ui/core'
import { values } from 'lodash'
import * as React from 'react'

import { GridProps } from './grid-models'
import {
    alignContentClassName,
    alignItemsClassName,
    flexDirectionClassName,
    flexWrapClassName,
    generateGridStyles,
    globalContainerClassName,
    globalItemClassName,
    gridItemClassName,
    justifyContentClassName,
    spacingClassName,
} from './grid-styles'

class _Grid extends React.Component<GridProps & WithStyles<typeof gridStyles>>  {
    render() {
        const { container, item, children, className: classNameProp,
            xs, sm, md, lg, xl, spacing, justify,
            alignContent, alignItems, wrap, direction, classes, gridRef, ...other } = this.props

        if (container) {
            const classNames: string[] = [globalContainerClassName]
            if (classNameProp) classNames.push(classNameProp)
            if (spacing) classNames.push(classes[spacingClassName(spacing)])
            if (justify) classNames.push(classes[justifyContentClassName(justify)])
            if (alignContent) classNames.push(classes[alignContentClassName(alignContent)])
            if (alignItems) classNames.push(classes[alignItemsClassName(alignItems)])
            if (wrap) classNames.push(classes[flexWrapClassName(wrap)])
            if (direction) classNames.push(classes[flexDirectionClassName(direction)])
            return <div className={classNames.join(" ")} ref={gridRef} {...other}> {children} </div>
        } else if (item) {
            const classNames: string[] = [globalItemClassName]
            if (classNameProp) classNames.push(classNameProp)
            if (xs) classNames.push(classes[gridItemClassName(xs, "xs")])
            if (sm) classNames.push(classes[gridItemClassName(sm, "sm")])
            if (md) classNames.push(classes[gridItemClassName(md, "md")])
            if (lg) classNames.push(classes[gridItemClassName(lg, "lg")])
            if (xl) classNames.push(classes[gridItemClassName(xl, "xl")])
            return <div className={values(classNames).join(" ")} ref={gridRef} {...other}> {children} </div>
        } else {
            throw "grid should be either container or item"
        }
    }
}

const gridStyles = generateGridStyles()
export const Grid = withStyles(gridStyles)(_Grid)