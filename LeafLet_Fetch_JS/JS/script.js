//On appelle la map de leaflet.
var map = L.map("map").setView([48.866667, 2.333333], 13);

//On lui pose le graph.
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

//On fetch le json et on boucle dans la position (wgs84) pour afficher
//chaque velib sur la map (marker,addTo) avec un popup.
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    for (i = 0; i < data.length; i++) {
      let position = data[i].fields.wgs84;
      L.marker([position[0], position[1]])
        .addTo(map)
        .bindPopup(data[i].fields.name, " ", data[i].fields.adress);
    }
  });
