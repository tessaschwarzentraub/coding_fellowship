window.addEventListener('load', ()=> {                  //get the location after the page loads
    let long;
    let lat;
    let temperatureDescripton = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone"); 

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?id=4905687&appid=b27e22b55ef172af0896b15f864f7d26`;
           
            fetch(api)
                .then(response => { 
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temp } = data.main;
                    const { description } = data.weather[0];
                    //set DOM elements from the API
                    temperatureDegree.textContent = temp;
                    temperatureDescripton.textContent = description;
                    locationTimezone.textContent = data.name;
                });
        });
    }  
    
});