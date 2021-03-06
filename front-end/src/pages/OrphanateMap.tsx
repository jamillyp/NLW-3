import React from 'react';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanateMap.css';

import mapMarker from '../images/map-marker.svg';

function OrphanateMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Maranguape</strong>
                    <span>Ceará</span>
                </footer>
            </aside>

            <Map 
            center={[-3.9974781,-38.9581246]}
            zoom={11}
            style={{ width:'100%', height:'100%'}} 
            >
            <TileLayer 
                url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/** 
                
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            */}
            </Map>

            <Link to="" className="create-orphanate">
                <FiPlus size={32} color="#FFF" />
            </Link>
            
    </div>
    );
}

export default OrphanateMap;