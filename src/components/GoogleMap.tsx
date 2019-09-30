import React, { Component, useState } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import { inject, observer } from "mobx-react";

const Map = ({ marks }: any) => {
  const [center, setCenter] = useState({ lat: 59.95, lng: 30.33 });
  const [zoom, setZoom] = useState(7);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCGdylwOS37HVgu289UA6q2J4omA81Rd-w' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {marks.map((mark: { lat: string; lng: string; name: string; id: React.ReactText; }) => {
          return (<Marker
            lat={mark.lat}
            lng={mark.lng}
            name={mark.name}
            color='blue'
            key={mark.id} />);
        })}

      </GoogleMapReact>
    </div>
  );
}



export default inject(({ markStore }) => ({
  marks: markStore.marks
}))(observer(Map));
