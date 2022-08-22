  console.log("hello");
  mapboxgl.accessToken = 'pk.eyJ1IjoiaGFycnkxMjM0OTgiLCJhIjoiY2s4OXh1c3BqMGFsZzNvbXA3YmYyaGFhYSJ9.wmVMiMxlSqpzJPsj-UXr3Q';

  navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true})

  function successLocation(position){
    console.log(position);
    setupMap([position.coords.longitude,position.coords.latitude]);
  }

  function errorLocation(){
    setupMap([72.877656,19.075984])
  }

  function setupMap(center){
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 10,
      center: center,
  });
    const nav= new mapboxgl.NavigationControl();
    map.addControl(nav);
    const directions=new MapboxDirections({
            accessToken: mapboxgl.accessToken
    });
    map.addControl(directions,"top-left");
}