//Function that deploys a new window with project on image on click
$("figure img").on("click", function(event){
    //Variables holding each projects link
    const atmos = "https://vyncent-t.github.io/atmosphere-project/";
    const recipeCookbook = "https://cryptic-dusk-68462.herokuapp.com/";
    const passwordGenerator = "https://junexll.github.io/password-generator/";
    const weatherDash = "https://junexll.github.io/Weather-Dashboard/";
    const planner = "https://junexll.github.io/day-planner/";

    //Conditionals to determine which link to open
    if(event.currentTarget.alt==="atmos"){
        window.open(atmos);
    } else if(event.currentTarget.alt==="recipe-cookbook"){
        window.open(recipeCookbook)
    } else if(event.currentTarget.alt==="password-generator"){
        window.open(passwordGenerator);
    } else if(event.currentTarget.alt==="weather-dash"){
        window.open(weatherDash);
    } else if(event.currentTarget.alt==="work-planner"){
        window.open(planner);
    }
    //Records the clicks
    console.log(event.currentTarget.alt);
})

// test