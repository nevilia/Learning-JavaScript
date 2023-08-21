document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar"); // Select the form element
    const cityInput = document.getElementById("cityInput")  // Input field
    let city_name = document.getElementById("city")
    let current = document.getElementById("current")
    let temp = document.getElementById("temp")
    let expected_temp = document.getElementById("expected-temp")

    const options = {                           // API options
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd4c16ca572msh85aee3404f303a0p122264jsn8476fb257627',
            'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
        }
    };

    let handleSearch = async (event) => {                // Search button submission logic
        event.preventDefault() // prevent form submission
        const cityName = cityInput.value
        const url = `https://the-weather-api.p.rapidapi.com/api/weather/${cityName}`

        
        // fetch block is inside of this function because we need to make sure the function runs after we have submitted the form
        // Using normal .then
        // remove async from function definition before running this
        // fetch(url, options)
        //         .then(response => response.json())
        //         .then(data => {
        //             city_name.innerText = `City: ${data.data.city}`
        //             current.innerText = `Current Weather: ${data.data.current_weather}`
        //             temp.innerText = `Temperature: ${data.data.temp}`
        //             expected_temp.innerText = `Expected Temperature: ${data.data.expected_temp}`
        //         })
        //         .catch(err => console.log(err))


        try{
            const response = await fetch(url, options)
            const data = await response.json()

            if (data.success) {         // data returned conatined two objects, data and success
            city_name.innerText = `City: ${data.data.city}`
            current.innerText = `Current Weather: ${data.data.current_weather}`
            temp.innerText = `Temperature: ${data.data.temp}`
            expected_temp.innerText = `Expected Temperature: ${data.data.expected_temp}`
            } 
            else {
                city_name.innerText = `City: Not Found`
                current.innerText = `Current Weather: N/A`
                temp.innerText = `Temperature: N/A`
                expected_temp.innerText = `Expected Temperature: N/A`
                alert("City not found. Please enter a valid city name.")
            }
    }
        catch (err){
            console.log(err)
        }
        }

        searchBar.addEventListener("submit", handleSearch)
})
