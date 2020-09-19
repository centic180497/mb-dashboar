import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 150,
    display: 'flex',
    alginItems: 'center',
    justifyContent: 'center',
  },
}))

function Loading() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  )
}

export default Loading
