import React, { useState } from 'react'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'
import { Scrollbars } from 'react-custom-scrollbars'
import ItemCamera from 'components/sitemap_page/components/itemcamera'
function ListItem(props) {
  console.log(props)
  const classes = useStyles()
  const [listCamera, setlistCamera] = useState([
    { id: 1, nameCamera: 'Camera 1', address: 'Hòa Khê, Thanh Khê, Đà Nẵng' },
    { id: 2, nameCamera: 'Camera 2', address: 'Quận ngũ hành sơn, Đà Nẵng' },
    { id: 3, nameCamera: 'Camera 3', address: 'Hải Châu, Đà Nẵng' },
    { id: 4, nameCamera: 'Camera 4', address: 'Hòa Minh, Liên Chiểu, Đà Nẵng' },
    { id: 5, nameCamera: 'Camera 5', address: 'Hòa Minh, Liên Chiểu, Đà Nẵng' },
    { id: 6, nameCamera: 'Camera 6', address: 'Hòa Minh, Liên Chiểu, Đà Nẵng' },
    { id: 7, nameCamera: 'Camera 7', address: 'Hòa Minh, Liên Chiểu, Đà Nẵng' },
  ])
  return (
    <div className={classes.cameras}>
      <h4 className={classes.title}>
        DANH SACH CAMERA (<span>8</span>)
      </h4>
      <div className={classes.boxScrollCard}>
        <Scrollbars>
          <div className={classes.boxCameraItem}>
            {props.cams?.camera_list && props.cams?.camera_list.length > 0 ? (
              props.cams.camera_list.map((camera) => {
                return (
                  <ItemCamera
                    camera={camera}
                    key={camera.id}
                  />
                )
              })
            ) :(
              <CircularProgress fontSize="24" className={classes.loading}/>
            )}
          </div>
        </Scrollbars>
      </div>
    </div>
  )
}

export default ListItem

const useStyles = makeStyles((theme) => ({
  cameras: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  boxScrollCard: {
    flexGrow: 1,
  },
  title: {
    margin: 10,
  },
  boxCameraItem: {
    padding: '0 10px',
  },
  // loading:{
  //   PaddingTop:'50px',
  //   display:'null'
  // }
}))
