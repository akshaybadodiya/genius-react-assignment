import { createStyles, WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'

import { proximaRegularCondensed, smAndUp, mdAndUp, lgAndUp, proximaRegular } from './../styles/styles'
import { zoomIn } from '../styles/common-animation';

const topOffset = 12
const sectionContainerStyles = createStyles({
    // Section Styles
    '@global': {
        "@keyframes zoomIn": {
            ...zoomIn
        },
    },

    sectionContainer: {
        "borderBottom": "1px solid #d0d0d0",
        "position": "relative",
        "display": "flex",
        "justifyContent": "center",
        padding: 8,
        width: "100%",
        "top": -topOffset
    },
    sectionContainer__title: {
        ...proximaRegularCondensed,
        "color": "#000000",
        "padding": "0 20px 0 20px",
        "position": "relative",
        "width": "auto",
        "textAlign": "center",
        "top": 20,
        "fontSize": "18px",
        [smAndUp()]: {
            fontSize: "18px",
        },
        [mdAndUp()]: {
            fontSize: "20px",
        },
        [lgAndUp()]: {
            fontSize: "22px",
        },
        fontWeight: 700,
        "backgroundColor": "#ffffff",
        "textTransform": "uppercase",
    },
    sectionContainer__badge: {
        opacity: 0,
        "right": "2px",
        top: 10,
        "height": "18px",
        width: 18,
        "display": "flex",
        "padding": "0 4px",
        // "zIndex": 1,
        fontSize: 12,
        "position": "absolute",
        "flexWrap": "wrap",
        "transform": "scale(1) translate(50%, -50%)",
        "boxSizing": "border-box",
        "transition": "transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        "alignItems": "center",
        "fontWeight": 500,
        "alignContent": "center",
        "borderRadius": "10px",
        "flexDirection": "row",
        "justifyContent": "center",
        "transformOrigin": "0% 100%",
        color: "white",
        backgroundColor: "#fc0500",
        ...proximaRegular,
        "animation": "zoomIn 0.5s 0.5s forwards",

    },
    sectiontextContainer: {
        position: "relative",
    }
})

export interface SectionContainerFieldProps {
    text: string,
    badgeNumber?: number
}
export interface SectionContainerDispatchProps {

}

export interface SectionContainerProps extends SectionContainerFieldProps, SectionContainerDispatchProps {

}
interface _SectionContainerProps extends SectionContainerProps, WithStyles<typeof sectionContainerStyles> {
}
interface _SectionContainerState {

}
export class _SectionContainerComponent extends React.Component<_SectionContainerProps, _SectionContainerState> {
    render() {
        const { classes, text, badgeNumber } = this.props
        return <div className={classes.sectionContainer}>
            <div className={classes.sectiontextContainer}>
                <div className={classes.sectionContainer__title}>{text}</div>
                {badgeNumber && <div className={classes.sectionContainer__badge}>{badgeNumber}</div>}
            </div>
        </div>
    }
}

export const SectionContainerComponent = withStyles(sectionContainerStyles)(_SectionContainerComponent)