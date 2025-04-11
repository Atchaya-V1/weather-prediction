




var input=document.getElementById("input")
var para=document.getElementById("show")
async function process()
{
    var query=input.value
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=3f482dabf2827e456b19a167f6ff0b67`)
    
 const data= await response.json()
 para.textContent=`visibility:${data.visibility},  timezone:${data.timezone},    humidity:${data.main.humidity},     pressure:${data.main.pressure},    sea_level:${data.main.sea_level},    country:${data.sys.country},    sunset:${data.sys.sunset},     sunrise:${data.sys.sunris } Weather:${data.weather[0].description}`

para.classList.add("show-visible");
}