import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'

import { Grid } from '../grid/grid'
import { cardStyles } from './card.styles'

export interface CardFieldProps {
    cardId: number
    selected: boolean
    imgSrc: string
}

export interface CardDispatchProps { }

interface Props extends CardFieldProps, CardDispatchProps, WithStyles<typeof cardStyles> { }

interface State {
}

class _CardComponent extends React.Component<Props, State> {
    render() {
        const { classes, imgSrc } = this.props
        return <Grid container spacing={16} className={classes.card}>
            <Grid item xs={12} className={classes.cardImg}>
                <img src={imgSrc} />
            </Grid>
        </Grid>
    }
}

export const CardComponent = withStyles(cardStyles)(_CardComponent)