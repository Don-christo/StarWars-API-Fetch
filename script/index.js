fetch('https://swapi.dev/api/people').then((data) => {
    return data.json();
}).then((completeData) => {
    console.log(completeData);

    let info = completeData.results;

    // let imageUrls = [
    //     "Images/luke-skywalker.jpeg",
    //     "Images/c-3po.jpeg",
    //     "Images/r2-d2.jpeg",
    //     "Images/darth-vader.jpeg",
    //     "Images/leia-organa.jpeg",
    //     "Images/owen-lars.jpeg",
    //     "Images/beru-whitesun-lars.jpeg",
    //     "Images/r5-d4.jpeg",
    //     "Images/biggs-darklighter.jpeg",
    //     "Images/obi-wan-kenobi.jpeg"
    // ];

    let starWars = "";

    info.map(values => {
        console.log('stars ', values)

        let starsHtml = `
        <div class="sub-stars">
            <img src="./Images/${values.name}.jpeg" alt="" style="height: 300px; width:300px;">
            <h1 class="name">${values.name}</h1>
            <h2 class="gender">${values.gender}</h2>
            <h3 class="height">${values.height}</h3>
        </div>
            `;

            starWars += starsHtml;
        });

        document.querySelector('#stars').innerHTML = starWars;
});