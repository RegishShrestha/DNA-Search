"use strict";

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

const enterdata = document.querySelector("#search_address");

const btn_search = document.querySelector(".btn-search");
let map, mapEvent;
const renderpin = function (currval) {
  const { lat, lon } = currval;
  const { phylum_name } = currval;
  const { class_name } = currval;
  const { processid } = currval;
  const link = `http://www.boldsystems.org/index.php/Public_RecordView?processid=${processid}`;
  L.marker([lat, lon])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: "running-popup",
      })
    )

    .setPopupContent(
      `${`<a href=${link}>phylum name: ${phylum_name}<br> class name: ${class_name} </a>`}`
    )
    .openPopup();
};
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(latitude, longitude);
      console.log(position);
      const coords = [latitude, longitude];
      //   console.log(arr);
      map = L.map("map").setView(coords, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      map.on("click", function (mapE) {
        mapEvent = mapE;
        enterdata.focus();
      });
      //     console.log(mapEvent);
      //     const { lat, lng } = mapEvent.latlng;

      //     L.marker([lat, lng])
      //       .addTo(map)
      //       .bindPopup(
      //         L.popup({
      //           maxWidth: 250,
      //           minWidth: 100,
      //           autoClose: false,
      //           closeOnClick: false,
      //           className: "running-popup",
      //         })
      //       )

      //       .setPopupContent("hello")
      //       .openPopup();
      //   });
    },
    function () {
      alert("yes");
    }
  );
}

btn_search.addEventListener("click", function () {
  if (enterdata.value == "reset") {
    location.reload();
    enterdata.value = "";
  }
  data.forEach(function (currval, index) {
    // if (currval["phylum_name"] == enterdata.value) {
    if (
      currval["genus_name"] == enterdata.value ||
      currval["sampleid"] == enterdata.value ||
      currval["phylum_name"] == enterdata.value
    ) {
      // if (currval["sampleid"] == enterdata.value) {
      //   renderpin();
      console.log(currval);
      if (currval["lat"] && currval["lon"]) {
        const { lat, lon } = currval;
        console.log(lat, lon);
        renderpin(currval);
      }
      enterdata.value = "";
    }
  });
  //   if (data.includes(enterdata.value)) {
  //     renderpin();
  //   } else {
  //     console.log(enterdata.value);
  //   }
});

console.log(data[0]);
