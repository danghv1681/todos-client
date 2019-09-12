import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, TextField } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '500px',
    width: '450px',
  }
}))

const BeginLogin = () => {
  const classes = useStyles()
  return (
    (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
    )
  )
}

export default BeginLogin