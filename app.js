var latitude;
var longitude;
var temp=document.getElementById("temp")
var button=document.getElementById("button")
var tempmeasure=" C"
var unit=document.getElementById("unit")
var tempNumber=document.getElementById("tempNumber")
var wImg=document.getElementById("wImg")

button.addEventListener("click",function(){
    if (tempmeasure ==" C"){
        tempmeasure=" F"
        unit.innerText=tempmeasure
        let newTemp = parseFloat(tempNumber.innerText)*1.8+32
        tempNumber.innerText = newTemp.toFixed(2)
    }
    else{
        tempmeasure=" C"
        unit.innerText=tempmeasure
        let newTemp = (parseFloat(tempNumber.innerText)-32)*(1/1.8)
        tempNumber.innerText = newTemp.toFixed(2)
    }
})

if (navigator){
    navigator.geolocation.getCurrentPosition(function(currentLoc){
        latitude= currentLoc.coords.latitude
        longitude= currentLoc.coords.longitude
        fetch("https://api.weatherbit.io/v2.0/current?lat="+latitude+"&lon="+longitude+"&key=17270180ead94b27a3e874f0cdd513ec")
        .then(function(response){
            return response.json()
        })
        .then(function(jasonData){
            tempNumber.innerText=jasonData.data[0].temp
            wImg.src=`https://weatherbit.io/static/img/icons/${jasonData.data[0].weather.icon}.png`

        })
    });
}
