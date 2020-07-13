window.addEventListener('load', ()=> {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = 'https://api.openweathermap.org/data/2.5/weather?+4905687&appid=+b27e22b55ef172af0896b15f864f7d26';
           
            fetch(api)
                .then(response => { 
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                });
        });
    }  
});