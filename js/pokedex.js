var container = document.getElementsByClassName("container");

function traer() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        .then(res => res.json())
        .then(res => {
            for (const element of res["results"]) {
                fetch(element.url)
                    .then(pokemon => pokemon.json())
                    .then(pokemon => {
                        
                        const div = document.createElement("div")
                        div.className = "item"

                        const tittle = document.createElement("b")
                            tittle.innerHTML = element.name;
                            tittle.className = "tittle-item";
                            div.appendChild(tittle);

                        if (pokemon["sprites"]["front_default"] != null) {
                            const img = document.createElement("img")
                            img.className = "image-pokemon"
                            img.src = pokemon["sprites"]["front_default"]
                            div.appendChild(img)
                        }

                        const id = document.createElement("b")
                            id.innerHTML = `#${pokemon["id"]}`;
                            id.className = "id-item";
                            div.appendChild(id);

                        for (const type of pokemon["types"]) {
                            const imgType = document.createElement("img")
                            imgType.src = `../img/${type["type"]["name"]}.png`
                            imgType.className = "image-types"
                            div.appendChild(imgType)
                        }

                        container[0].appendChild(div)
                    })
            }
        })
}

traer()