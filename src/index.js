function displayDestination(response){
    console.log (destination-generator);
    new Typewriter("#destination", {
        strings: "La tombe dit à la rose",
        autoStart: true,
        delay: 1,
        cursor: "",
      });

      function generatedestination(event) {
        event.preventDefault();

        let instructionsInput = document.querySelector(#"user-instructions");
        let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
        let context = "Your are a travelling agent. Your mission is to generate holiday destination all around the world including affordable accomodation and activities that can be done at the destination location, The destination must be provided in HTML format. ";
        let prompt = "Generate holiday destinations and activities. ";
        let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("generatingdestination")
console.log(`promt:${promt}`);
console.log(`context:${contextt}`);

axios.get(apiURL).then(displayDestination)
      }
let destinationFormElement = document.querySelector("#destination-generator-form");
destinationFormElement.addEventListener("submit", generatedestination);
