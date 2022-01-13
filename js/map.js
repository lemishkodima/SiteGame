function initMap() {
    // тут задаем центр карты
    var myLatLng = {lat: 47.82540324286557, lng: 35.158639675517};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,  // определяет масштаб карты, ее "зум"
      center: myLatLng,
      gestureHandling: "cooperative"
    });
    var styles = [
        {
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "elementType": "labels.text",
          "stylers": [
            {
              "color": "#ffffff"
            },
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#081b1e"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#081b1e"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#5cc1d3"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#081b1e"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#85d3de"
            }
          ]
        }
      ];
      map.setOptions({styles: styles});
      var image = {
        url: 'img\marker.png',
        // тут маркер 30 пикселей в ширину и 118 в высоту
        size: new google.maps.Size(30,118),
        // задаем начало картинки, обычно это левый верхний угол (0, 0).
        origin: new google.maps.Point(0, 0),
        // и точка картинки, которая будет находиться в точке вашего объекта на карте, тут - центр картинки внизу (15, 118).
        anchor: new google.maps.Point(15, 118)
      };
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP
    });
    marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
    }