import AircraftLayer from "../aircraftlayer";
import AirDefenseRangeLayer from "../airdefenserangelayer";
import CombatLayer from "../combatlayer";
import ControlPointsLayer from "../controlpointslayer";
import FlightPlansLayer from "../flightplanslayer";
import FrontLinesLayer from "../frontlineslayer";
import SupplyRoutesLayer from "../supplyrouteslayer";
import TgosLayer from "../tgoslayer/TgosLayer";
import "./LiberationMap.css";
import { LatLng } from "leaflet";
import { BasemapLayer } from "react-esri-leaflet";
import { LayersControl, MapContainer, ScaleControl } from "react-leaflet";

interface GameProps {
  mapCenter: LatLng;
}

export default function LiberationMap(props: GameProps) {
  return (
    <MapContainer zoom={8} center={props.mapCenter} zoomControl={false}>
      <ScaleControl />
      <LayersControl collapsed={false}>
        <LayersControl.BaseLayer name="Imagery Clarity" checked>
          <BasemapLayer name="ImageryClarity" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Imagery Firefly">
          <BasemapLayer name="ImageryFirefly" />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Topographic">
          <BasemapLayer name="Topographic" />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Control points" checked>
          <ControlPointsLayer />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Aircraft" checked>
          <AircraftLayer />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Active combat" checked>
          <CombatLayer />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Air defenses" checked>
          <TgosLayer categories={["aa"]} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Factories" checked>
          <TgosLayer categories={["factory"]} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Ships" checked>
          <TgosLayer categories={["ship"]} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Other ground objects" checked>
          <TgosLayer categories={["aa", "factories", "ships"]} exclude />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Supply routes" checked>
          <SupplyRoutesLayer />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Front lines" checked>
          <FrontLinesLayer />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Enemy SAM threat range" checked>
          <AirDefenseRangeLayer blue={false} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Enemy SAM detection range">
          <AirDefenseRangeLayer blue={false} detection />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Allied SAM threat range">
          <AirDefenseRangeLayer blue={true} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Allied SAM detection range">
          <AirDefenseRangeLayer blue={true} detection />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="All blue flight plans" checked>
          <FlightPlansLayer blue={true} />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="All red flight plans">
          <FlightPlansLayer blue={false} />
        </LayersControl.Overlay>
      </LayersControl>
    </MapContainer>
  );
}