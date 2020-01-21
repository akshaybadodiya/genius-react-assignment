import { smAndUp, mdAndUp, lgAndUp, xlAndUp } from './../styles/styles';
import { createStyles } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import { avenirBoldTitle } from '../styles/common-styles';
import { zoomIn } from '../styles/common-animation';

const appObj: CSSProperties = {
}

export const appStyles = createStyles({
    '@global': {
        "@keyframes zoomIn": {
            ...zoomIn
        },
    },
    app: {
        marginTop: "16px",
        margin: 0,
        width: "calc(100% - 16px)",
        [smAndUp()]: {
            margin: 16,
            marginTop: "20px",
            width: "calc(100% - 16px)",
        },
        [mdAndUp()]: {
            margin: 24,
            marginTop: "24px",
            width: "calc(100% - 48px)",
        },
        [lgAndUp()]: {
            margin: 36,
            marginTop: "28px",
            width: "calc(100% - 48px)",
        }
    },
    app__title: {
        fontFamily: "'Work Sans', sans-serif !important",
        fontWeight: 900,
        fontSize: 28,
        textTransform: "uppercase",
        textAlign: "center",
        letterSpacing: 0.5
    },
    "app__title--zoomIn": {
        "animation": "zoomIn 1s forwards"
    },
    cardContainer: {
        display: "flex",
        flexWrap: "nowrap",
        overflow: "scroll",
        "&::-webkit-scrollbar": {
            display: "none"
        },
    },
    cardContainer__gridItem: {
        minWidth: "80%",
        [smAndUp()]: {
            minWidth: "44%",
        },
        [mdAndUp()]: {
            minWidth: "30%",
            padding: 8,
        },
        [lgAndUp()]: {
            minWidth: "24%",
        },
        [xlAndUp()]: {
            minWidth: "18%",
        }
    }
})