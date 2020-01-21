import { createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import { geniusCardSkinWithZeroMargin } from '../../styles/common-styles'

const templateObj: CSSProperties = {
}

export const cardStyles = createStyles({
    card: {
        ...geniusCardSkinWithZeroMargin,
        cursor: "pointer",
    },
    cardImg: {
        padding: "0 !important",
        width: "100%",
        height: 200,
        "& img": {
            width: "100%",
            height: "100%"
        }
    }
})