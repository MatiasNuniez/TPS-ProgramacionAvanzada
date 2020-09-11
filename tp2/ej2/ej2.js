const getartistas = async() => { 
            const apiKey = '133eb0591fd05013d5453c9da1271cd7'; 
            const  response = await fetch (`http://ws.audioscrobbler.com//2.0/?method=chart.gettopartists&api_key=${apiKey}&format=json`)
            const data = await response.json();
            const url = data.artists.artist;
            for (let index = 0; index < 11; index++) {
                const nombre = url[index].name;
                const platcount = url[index].playcount;
                const listeners = url[index].listeners;
                console.log(index, "Nobre:", nombre, "Playcount:", platcount, "Listeners:", listeners);    
            }
} 

getartistas()