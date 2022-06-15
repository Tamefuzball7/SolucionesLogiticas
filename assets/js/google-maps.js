function initMap() {
    var myLatLng = {lat:4.6244855, lng: -74.1390323};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Colombia' // Title Location
    });
}

