longitude = 73.78419982890514, latitude = 18.604441341773096

mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnYXJpa2EyMSIsImEiOiJjbHVzYTBnM3owZ2o1MmtuMGs2ZzI3dm1nIn0.oeYOcacnoucxAwUxfUZKkA'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    centre : [longitude,latitude],
    zoom : 0,

})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {enableHighAccuracy: true},
        trackUserLocation: true,       
    })
)

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken,
    }),
    'top-left'
)


