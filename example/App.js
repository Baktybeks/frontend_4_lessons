// const btn = document.querySelector("#xhr")
// const btn2 = document.querySelector("#fetch")
// btn.addEventListener("click", () => {
//
//     const req = new XMLHttpRequest();
//     req.open("GET", "data.json");
//     req.setRequestHeader("Content-type", "application/json")
//     req.send()
//     req.addEventListener("load", () => {
//         console.log(JSON.parse(req.response))
//     })
// })
//
// btn2.addEventListener("click", () => {
//     fetch("data.json")
//         .then((resp) => resp.json())
//         .then((data) => console.log(data));
//
//     // fetch("data.json",{
//     //  method: "POST",
//     //  headers: {"Content-type": "application/json"},
//     //  body: "123"
//     // });
// })

const cityName = document.querySelector(".cityName");
const temp = document.querySelector(".temp");
const apiKey = "e417df62e04d3b1b111abeab19cea714"
const citySearch = () => {
    const cityNameValue = document.querySelector(".cityNameValue").value;
    fetch (`http://api.openweathermap.org/data/2.5/weather?q=${cityNameValue}&appid=${apiKey}`)
        .then((resp) => resp.json())
        .then((data) => {
            temp.innerHTML = Math.round(data.main.temp-273) + "&deg" + "C"
            cityName.innerHTML = data.name
        })
}




