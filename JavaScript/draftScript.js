document.addEventListener("DOMContentLoaded", function () {
    const teamContainer = document.querySelector(".team-container");
    const randomizeButton = document.getElementById("randomizeButton");

    const teams = [
        "Spencer",
        "John Michael",
        "Mitch",
        "Tres",
        "Abel",
        "Sam",
        "Jack",
        "Jared",
        "Luke",
        "Matt",
        "Mason",
        "Nicholas"
    ];

    randomizeButton.addEventListener("click", function () {
        const shuffledTeams = shuffleArray(teams);

        for (let i = 0; i < shuffledTeams.length; i++) {
            const teamElement = teamContainer.children[i];
            teamElement.textContent = `${i + 1}. ${shuffledTeams[i]}`;
        }
    });

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
