import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'

import { Grid } from '../grid/grid'
import { templateStyles } from './template.styles'

export interface TemplateFieldProps { }

export interface TemplateDispatchProps { }

interface Props extends TemplateFieldProps, TemplateDispatchProps, WithStyles<typeof templateStyles> { }
interface State { }

class _TemplateComponent extends React.Component<Props, State> {
    render() {
        const { classes } = this.props
        return <Grid container spacing={16} className={classes.template}>
            <Grid item xs={12}>
                Grid Item
            </Grid>
        </Grid>
    }
}

export const TemplateComponent = withStyles(templateStyles)(_TemplateComponent)