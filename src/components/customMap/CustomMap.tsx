import { YMaps, Map, Placemark, GeolocationControl } from 'react-yandex-maps';
import logo from '../../assets/icons/logo/logo-map.png';
import iconMap from '../../assets/icons/map/icon_map.png';
import './customMap.scss';

const placemarks = [
  {
    geometry: [56.195234, 43.775302],
    properties: {
      balloonContentHeader: `<img class="map__logo" src='${logo}' alt="Strigino" /><span class="map__header">Hotel Strigino</span>`,
      balloonContentBody:
        'Ресторан "Стригино" имеет возможность проведения различных мероприятий: деловых встреч, семинаров, фуршетов, корпоративов, юбилеев и других праздничных и торжественных событий.',
      iconCaption: 'Hotel Strigino',
      iconContent: 'Strigino',
    },
    options: {
      preset: 'islands#violetStretchyIcon',
      iconLayout: 'default#image',
      iconImageHref: `${iconMap}`,
      iconImageSize: [60, 70],
      iconImageOffset: [-30, -60],
    },
    modules: ['geoObject.addon.balloon', 'geoObject.addon.hint'],
  },
  {
    geometry: [56.222635, 43.790764],
    properties: {
      iconCaption: 'Nizhny Novgorod (Strigino) Airport',
    },
    options: {
      preset: 'islands#blueIcon',
    },
  },
  {
    geometry: [56.242121, 43.858185],
    properties: {
      iconCaption: 'Metro Park Kultury',
    },
    options: {
      preset: 'islands#redIcon',
    },
  },

  {
    geometry: [56.314005, 43.992709],
    properties: {
      iconCaption: 'Metro Gorkovskaya station',
    },
    options: {
      preset: 'islands#redIcon',
    },
  },
  {
    geometry: [56.335819, 43.951816],
    properties: {
      iconCaption: 'Metro Strelka station',
    },
    options: {
      preset: 'islands#redIcon',
    },
  },
  {
    geometry: [56.322037, 43.94641],
    properties: {
      iconCaption: 'Railway station',
    },
    options: {
      preset: 'islands#violetIcon',
    },
  },
  {
    geometry: [56.337898, 43.963317],
    properties: {
      iconCaption: 'Nizhny Novgorod Stadium',
    },
    options: {
      preset: 'islands#darkBlueIcon',
    },
  },
  {
    geometry: [56.329476, 44.001211],
    properties: {
      iconCaption: 'Mininskiy square (City Center)',
    },
    options: {
      preset: 'islands#darkBlueIcon',
    },
  },
];

export const CustomMap = () => {
  return (
    <YMaps>
      <div className="map">
        <Map
          className="map__container"
          defaultState={{
            center: [56.274096, 43.949655],
            zoom: 11,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={[
            'control.ZoomControl',
            'control.FullscreenControl',
            'layout.ImageWithContent',
          ]}
        >
          {placemarks.map((item, i) => (
            <Placemark
              key={i}
              geometry={item.geometry}
              properties={item.properties}
              options={item.options}
              modules={item.modules}
            />
          ))}
          <GeolocationControl
            options={{ position: { bottom: 50, right: 30 } }}
          />
        </Map>
      </div>
    </YMaps>
  );
};
