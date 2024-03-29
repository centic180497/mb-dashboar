import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import DashBoarHeader from 'components/dashboard_header/dashboard_header'
import DashboardSidebar from 'components/dashboard_sidebar/dashboard_sidebar'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    height: 50,
    display: 'flex',
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
}))

function DashboardLayout(props) {
  
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <DashBoarHeader title={props.title} />
      </div>
      <div className={classes.dashboard}>
        <DashboardSidebar />
        <div className={classes.content}>{props.children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
