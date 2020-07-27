import { Component } from "react";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "80vh",
      latitude: 9.559882,
      longitude: 44.057171,
      zoom: 16,
    },
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiYWJkaXNhbWFkMTQzIiwiYSI6ImNrZDRhcG5zZDFpZG8ydXFtYTEwcDd3c2oifQ.8CbKL2az1zO1kFqeUk8ylw"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default Map;
