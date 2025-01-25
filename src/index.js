function displayDestination(response) {
    console.log("destination-generator"); 
    

    new Typewriter("#destination", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });

    function generatedestination(event) {
        event.preventDefault();

        let instructionsInput = document.querySelector("#user-instructions");
        let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
        let context = "Your are a travelling agent. Your mission is to generate holiday destinations all around the world including affordable accommodation and activities that can be done at the destination location. The destination must be provided in HTML format.be more specific with the details";
        let prompt = "Generate holiday destinations and activities.";
        let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

        console.log("generating destination");
        console.log(`prompt: ${prompt}`);
        console.log(`context: ${context}`);

        axios.get(apiUrl).then(displayDestination);
    }

    let destinationFormElement = document.querySelector("#destination-generator-form");
    destinationFormElement.addEventListener("submit", generatedestination);
}
