import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import MapPage from 'components/sitemap_page/components/map/map'
import Seach from './components/seach'
import Listitem from 'components/sitemap_page/components/list_camera'

function SitemapPage(props) {

  const classes = useStyles()

  useEffect(() => {

    props.isSeachcam(props.political)
    props.Province()

  }, [])
  return (
    <div className={classes.root}>
      <div className={classes.containerMap}>
        <MapPage cams={props.cams} />
      </div>
      <div className={classes.formAndListCamera}>
        <Seach />
        <Listitem />
      </div>
    </div>
  )
}

export default SitemapPage

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
  },
  map: {
    height: '100vh',
  },
  containerMap: {
    height: '100%',
    width: 'calc(100vw - 460px)',
  },
  formAndListCamera: {
    position: 'relative',
    width: 400,
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 50px)',
    background: '#fafafa',
    boxShadow: '-3px 0px 10px #00000094',
  },
}))
