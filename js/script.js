function initMap() {
    let CENTER = { lat: 50.23551528676393, lng: 32.51912617781734 };
    const PLACES = [
        [50.222183138354445, 32.51466185286387, 'Водогінна вежа', `
        <div class="place__item">
            <h2>Водогінна вежа</h2>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/%D0%92%D0%BE%D0%B4%D0%BE%D0%B3%D1%96%D0%BD%D0%BD%D0%B0_%D0%B2%D0%B5%D0%B6%D0%B0_%D0%9F%D0%B8%D1%80%D1%8F%D1%82%D0%B8%D0%BD.jpg/220px-%D0%92%D0%BE%D0%B4%D0%BE%D0%B3%D1%96%D0%BD%D0%BD%D0%B0_%D0%B2%D0%B5%D0%B6%D0%B0_%D0%9F%D0%B8%D1%80%D1%8F%D1%82%D0%B8%D0%BD.jpg" alt="water-tower">
            <p>Поряд із вежею знаходиться автозаправна станція, на якій на початку 1960-х рр. 
                XX ст. за сценарієм лубенського письменника-гумориста Петра Лубенського було знято 
                відомий кінофільм: «Королева бензоколонки».
            </p>
        </div>
        `],
        [50.24100163494029, 32.51596348465856, 'Краєзнавчий музей', `
        <div class="place__item">
            <h2>Краєзнавчий музей</h2>
            <img src="https://np.pl.ua/wp-content/uploads/2022/02/274106033_150933507326183_698195967700090054_n.jpg" alt="national-museum">
            <p>Пирятинський районний народний краєзнавчий музей був заснований у 1967 
                році. Одним із його засновників є місцевий вчитель історії А.А. Святогор (1930—2000)
            </p>
        </div>
        `],
        [50.239209937395046, 32.53122619499988, 'Півострів Масальський', `
        <div class="place__item">
            <h2>Півострів Масальський</h2>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ywWeeC8hTBgTNZtNUJ7l4JMqkA_i-ElA0l9EvoDN2g&s" alt="island">
            <p>Зусебіч оточений болотами та річкою Удай.</p>
        </div>
        `]
    ]

    const MARKER_IMG = {
        url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        size: new google.maps.Size(80, 70),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32),
    };

    let MAP = new google.maps.Map(document.getElementById("map"), {
        center: CENTER,
        zoom: 14
    });
    // Центрування карти на вибраній пам'ятці
    let CENTER_TOWER = { lat: 50.222183138354445, lng: 32.51466185286387 };
    let CENTER_MUSEUM = { lat: 50.24100163494029, lng: 32.51596348465856 };
    let CENTER_ISLAND = { lat: 50.239209937395046, lng: 32.53122619499988 }; 

    let TOWER = document.querySelectorAll('li')[0];
    let MUSEUM = document.querySelectorAll('li')[1];
    let ISLAND = document.querySelectorAll('li')[2];
    
    TOWER.addEventListener('click', function() {
        MAP.panTo(CENTER_TOWER)
    })
    MUSEUM.addEventListener('click', function() {
        MAP.panTo(CENTER_MUSEUM)
    })
    ISLAND.addEventListener('click', function() {
        MAP.panTo(CENTER_ISLAND)
    })

    let marker;
    for (let i = 0; i <= PLACES.length; i++) {
        marker = new google.maps.Marker({
            position: { lat: PLACES[i][0], lng: PLACES[i][1] },
            map: MAP,
            icon: MARKER_IMG,
            title: PLACES[i][2],
            animation: google.maps.Animation.DROP
        });
        infoMessage(marker, PLACES[i][3], MAP);
    }

    function infoMessage(marker, message, map) {
        let infoWindow = new google.maps.InfoWindow({
          content: message
        });

        infoWindow.addListener('closeclick', () => {
          toggleBounce(marker, infoWindow);
        });

        marker.addListener("click", () => {
          infoWindow.open({
            anchor: marker,
            map
          });
          toggleBounce(marker, infoWindow);
        });
    }
    
    function toggleBounce(marker, infoWindow) {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
          infoWindow.close();
        }
        else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
            
}
 








