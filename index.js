async function displayDestination(response) {
    const destinationDiv = document.querySelector("#destination");

    if (response && response.data && response.data.status === "success") {
        destinationDiv.innerHTML = response.data.data;

        new Typewriter(destinationDiv, {
            strings: [response.data.data],
            autoStart: true,
            delay: 1,
            cursor: ""
        });
    } else {
        destinationDiv.innerHTML = "No data received or error with the request.";
    }
}

async function generatedestination(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    let context = "Your are a travelling agent. Your mission is to generate holiday destinations all around the world including affordable accommodation and activities that can be done at the destination location. The destination must be provided in HTML format.";
    let prompt = instructionsInput.value || "Generate a holiday destination";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(prompt)}&context=${encodeURIComponent(context)}&key=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        displayDestination(response);
    } catch (error) {
        console.error("Error generating destination:", error);
    }
}

let destinationFormElement = document.querySelector("#destination-generator-form");
destinationFormElement.addEventListener("submit", generatedestination);
