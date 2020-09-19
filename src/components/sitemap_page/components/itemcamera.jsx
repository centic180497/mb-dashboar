import React, { useState } from 'react'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Scrollbars } from 'react-custom-scrollbars'
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
} from '@material-ui/core'
import {
  Visibility as VisibilityIcon,
  Info as InfoIcon,
} from '@material-ui/icons'

function ItemCamera(props) {
  const classes = useStyles()
  const [listCamera, setlistCamera] = useState(null)
  const { camera } = props
  return (
    <div>
      <Card
        className={classes.card}
        // onClick={() => showdata(camera)}
      >
        <div className={classes.image}>
          <CardMedia className={classes.img} image={camera.thumnail} title="Contemplative Reptile" />
        </div>
        <CardContent className={classes.contentCard}>
          <Typography gutterBottom variant="h5" className={classes.nameCamera} noWrap>
            {camera.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.address}
            noWrap
          >
            {camera.address}
          </Typography>
          <CardActions className={classes.cardActions}>
            <Tooltip title="Theo dõi" arrow className={classes.tooltip}>
              <IconButton size="small">
                <VisibilityIcon className={classes.icon} cams undefined />
              </IconButton>
            </Tooltip>
            <Tooltip title="Thông tin" arrow className={classes.tooltip}>
              <IconButton size="small">
                <InfoIcon className={classes.icon} />
              </IconButton>
            </Tooltip>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  )
}

export default ItemCamera

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    cursor: 'pointer',
    marginBottom: 5,
    background: 'transparent',
  },
  cardActive: {
    background: '#00000014',
    display: 'flex',
    cursor: 'pointer',
    marginBottom: 5,
  },
  image: {
    width: 130,
    display: 'block',
  },
  img: {
    width: '100%',
    paddingTop: '56%',
  },
  contentCard: {
    padding: '6px 0px 0 20px !important',
    width: 'calc(100% - 130px)'
  },
  nameCamera: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 0,
  },
  address: {
    fontSize: 13,
    color: 'black',
  },
  icon: {
    padding: 6,
  },
  cardActions: {
    padding: 0,
  },
  tooltip: {
    padding: 0,
  },
}))
