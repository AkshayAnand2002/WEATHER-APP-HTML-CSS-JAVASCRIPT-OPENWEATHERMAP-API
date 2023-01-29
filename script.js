let image = document.getElementById('image')
let temperature = document.getElementById('temp')
let description = document.getElementById('desc')
let textfield = document.getElementById('inputField')
let cityname = document.getElementById('city')
let submitbtn = document.getElementById('submitBtn')
submitbtn.addEventListener('click', findweatherdetails)


function findweatherdetails() {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${textfield.value}&appid=714adc18a7298f3b76f4657eb36bc0da`
    fetch(url).then(response => response.json())
        .then(data => {
            console.log(data)
            cityname.innerText = textfield.value
            temperature.innerText = data.list[0].main.temp + ' K'
            description.innerText = data.list[0].weather[0].description
            let iconcode = data.list[0].weather[0].icon
                // console.log(imagecode)
            let iconurl = 'http://api.openweathermap.org/img/w/' + iconcode
            image.src = iconurl
        })
        // .then(data => console.log(data)) --> to view console data.

    .catch(error => console.log('No Connection'))
}
