var map = L.map('map').setView([-7.3, 110.4], 13); // Ganti koordinat sesuai lokasi

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Plugin elevasi
var controlElevation = L.control.elevation({
  theme: "steelblue-theme",
  detached: true,
  elevationDiv: "#elevation-div",
});
controlElevation.addTo(map);

// Tambah track GPX
new L.GPX("route-10.gpx", {
  async: true,
  marker_options: {
    startIconUrl: null,
    endIconUrl: null,
    shadowUrl: null
  }
}).on('loaded', function(e) {
  map.fitBounds(e.target.getBounds());
}).on("addline", function(e) {
  controlElevation.addData(e.line);
});
