async function checkWeather(city = 'kathmandu') {
    const button = document.querySelector('.button')
    const apiKey = '2ac204491166a7260f1f578ff4ce2ede';
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';

    button.addEventListener('click', async () => {
        const city = document.querySelector('.input').value;
        try {

            const url = `${apiURL}${city}&appid=${apiKey}&units=metric`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            const temp = data.main.temp
            const desc = data.weather[0].description
            const cityName = data.name
            const img = data.weather[0].icon
            const humidity = data.main.humidity

            document.querySelector('.humidity').innerHTML = `${humidity} % humidity.`
            document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${img}@2x.png`
            document.querySelector('.city').innerHTML = cityName + '.'
            document.querySelector('.temp').innerHTML = temp + '<sup>o</sup>c.'
            document.querySelector('.desc').innerHTML = desc + '.'

        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    })

    try {

        const url = `${apiURL}${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const temp = data.main.temp
        const desc = data.weather[0].description
        const cityName = data.name
        const img = data.weather[0].icon
        const humidity = data.main.humidity

        document.querySelector('.humidity').innerHTML = `${humidity} % humidity.`
        document.querySelector('.icon').src = `http://openweathermap.org/img/wn/${img}@2x.png`
        document.querySelector('.city').innerHTML = cityName + '.'
        document.querySelector('.temp').innerHTML = temp + '<sup>o</sup>c.'
        document.querySelector('.desc').innerHTML = desc + '.'

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }

}

checkWeather();

document.querySelector('.label').addEventListener('click', () => {
    location.reload()
    console.log('clicked');
})