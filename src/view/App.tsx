import { WithStyles, withStyles } from '@material-ui/core'
import * as React from 'react'

import { Grid } from '../components/grid/grid'
import { appStyles } from './app.styles'
import { CardComponent } from '../components/card/card'
import { SectionContainerComponent } from '../components/section-container'
import { cardList } from '../data/common-data'
import { triggerAnimation } from '../styles/animation'

export interface AppFieldProps { }

export interface AppDispatchProps { }

interface Props extends AppFieldProps, AppDispatchProps, WithStyles<typeof appStyles> { }

interface State { }

class _AppComponent extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {

    }
  }

  titleRef: HTMLDivElement | null | undefined

  componentDidMount() {
    const { classes } = this.props
    triggerAnimation(this.titleRef, classes["app__title--zoomIn"])
  }

  render() {
    const { classes } = this.props
    return <Grid container spacing={16} className={classes.app}>
      <Grid item xs={12}>
        <div className={classes.app__title} ref={r => this.titleRef = r}>Genius React Assignment</div>
      </Grid>
      <Grid item xs={12}>
        <SectionContainerComponent
          text="Suggested"
          badgeNumber={1}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={16} className={classes.cardContainer}>
          <Grid item xs={10} sm={6} md={4} lg={2} className={classes.cardContainer__gridItem}>
            <CardComponent
              selected={cardList[0].selected}
              imgSrc={cardList[0].imgSrc}
              cardId={cardList[0].cardId} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <SectionContainerComponent
          text="Selected"
          badgeNumber={1}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={16} className={classes.cardContainer}>
          <Grid item xs={10} sm={6} md={4} lg={2} className={classes.cardContainer__gridItem}>
            <CardComponent
              selected={cardList[6].selected}
              imgSrc={cardList[6].imgSrc}
              cardId={cardList[6].cardId} />
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  }
}

export const App = withStyles(appStyles)(_AppComponent)