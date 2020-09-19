import React, { useState } from 'react'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import { makeStyles } from '@material-ui/core/styles'
import icon from 'assets/icon/mX.png'

const iconcamera = new Icon({
  iconUrl: icon,
  iconSize: [40, 40],
  iconAnchor: [25, 10],
})
function MapPage(props) {

  const classes = useStyles()
  const [ItemMakrer, setMap] = useState([
    {
      id: 1,
      position: { lat: 16.07128, lng: 108.218 },
      camera: 'camera hà huy tập 1',
      adress: 'Hòa Khê,Thanh Khê,Đà Nẵng',
    },
    {
      id: 2,
      position: { lat: 16.07454, lng: 108.2186 },
      camera: 'camera hà huy tập 2',
      adress: 'Hòa Khê,Thanh Khê,Đà Nẵng',
    },
    {
      id: 3,
      position: { lat: 16.03767, lng: 108.215561 },
      camera: 'camera hà huy tập 3',
      adress: 'Hòa Khê,Thanh Khê,Đà Nẵng',
    },
  ])
  const position2 = [15.880666035670421,108.34390818625198]
  return (
    <div className={classes.root}>
      <Map center={position2} zoom={15} className={classes.map}>
        <TileLayer
          url="http://10.49.46.13:8081/styles/osm-bright/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {props.cams.data?.camera_list && props.cams.data.camera_list.length > 0
          ? props.cams.data.camera_list.map((marker, index) => {

              return (
                <div key={index}>
                  <Marker position={[marker.lat, marker.lng]} icon={iconcamera}>
                    <Popup>
                      {marker.camera}
                      <br />
                      {marker.id}
                    </Popup>
                  </Marker>
                </div>
              )
            })
          : null}
      </Map>
    </div>
  )
}

export default MapPage

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: '100vh',
  },
  map: {
    height: '100vh',
  },
}))
