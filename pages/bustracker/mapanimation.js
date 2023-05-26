var busResults = [] 

//-- getBusLocations grabs data from SEPTA for Route 17
async function getBusLocations(){
    
    const url = 'https://api-v3.mbta.com/vehicles?filter[route]=Red&include=trip';
    const response = await fetch(url);
    const json     = await response.json();
    console.log(json.data);
    return json.data;
}
    async function run(){
        let busData = []
        
        // get bus locations    
        const locations = await getBusLocations();
        //convert data to lat, lng, label
        for (i=0; i<locations.length; i++){
            lat = locations[i].attributes.latitude;
            lng = locations[i].attributes.longitude;
            let direction; 
            if(locations[i].attributes.direction_id < 1) {
                direction = 'Southbound'; 
            } else {
                direction = 'Northbound';
            };
            label = direction + ' Train '+ locations[i].attributes.label;
            busData.push([lat, lng, label]);
        }
        return busData;
    }
//google maps script    
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyCGb-qAIbu0PnC3t5jNDk9V5nfxl75vw9o",
    v: "weekly",
// Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
// Add other bootstrap parameters as needed, using camel case.
 });

 // Initialize and add the map
let map;
async function initMap() {
    
// Center Map on the middle of the line
const position = { lat: 42.3019, lng: -71.0717 };

// Request needed libraries.
//@ts-ignore
const { Map } = await google.maps.importLibrary("maps");

// The map
map = new Map(document.getElementById("map"), {
    zoom: 11,
    center: position,
    mapId: "Chicago_Loop_Bus",
});
const stationCoordinates = [
    { lat: 42.3964, lng: -71.142 },
    { lat: 42.397, lng: -71.122 },
    { lat: 42.388, lng: -71.119 },
    { lat: 42.3734, lng: -71.119 },
    { lat: 42.365, lng: -71.1034 },
    { lat: 42.3623, lng: -71.0862 },
    { lat: 42.3613, lng: -71.0714 },
    { lat: 42.3563, lng: -71.0625 },
    { lat: 42.35536, lng: -71.06068 },
    { lat: 42.35261, lng: -71.05536 },
    { lat: 42.3429, lng: -71.0572 },
    { lat: 42.33019, lng: -71.05712 },
    { lat: 42.32058, lng: -71.05239 },
    { lat: 42.3109, lng: -71.0535 },
    { lat: 42.3, lng: -71.0617 },
    { lat: 42.29371, lng: -71.065912 },
    { lat: 42.2843, lng: -71.0638 },
    { lat: 42.2758, lng: -71.0302 },
    { lat: 42.265638, lng: -71.01953 },
    { lat: 42.251944, lng: -71.005556 },
    { lat: 42.232894, lng: -71.008083 },
    { lat: 42.2074, lng: -71.0014 },
    ];
    const trackLine = new google.maps.Polyline({
    path: stationCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 3,
    });

    trackLine.setMap(map);
// add markers
setMarkers();

//schedule refresh in 30s
//setTimeout(initMap, 30000);
//start the refreshTimer
refreshTimer()
}

async function setMarkers(){
    markers = await run();
    for (let i = 0; i < markers.length; i++) {
        const marker = markers[i];

        new google.maps.Marker({
        position: { lat: marker[0], lng: marker[1] },
        map,
        title: marker[2],
        });
    }
}

let timer = 31;

function refreshTimer(){
    let element = document.getElementById('timer')
    timer -- ;
    element.innerText = `Page will refresh in ${timer} seconds.`
    if(timer === 0){
        timer = 31;
        initMap();
    }
    setTimeout(refreshTimer,1000);
}
    initMap();