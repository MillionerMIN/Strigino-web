import { YMaps, Map, Placemark, GeolocationControl } from 'react-yandex-maps';

import './customMap.scss';

export const CustomMap = () => {
  return (
    <YMaps>
      <div className="map">
        <Map
          className="map__container"
          defaultState={{
            center: [56.19559973943425, 43.77523846336301],
            zoom: 14,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
        >
          <Placemark
            defaultGeometry={[56.19559973943425, 43.77523846336301]}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          />
          <GeolocationControl
            options={{ position: { bottom: 50, right: 30 } }}
          />
        </Map>
      </div>
    </YMaps>
  );
};
