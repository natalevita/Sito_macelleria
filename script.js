document.addEventListener("DOMContentLoaded", function() {
    // Carica la navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);

    // Carica il footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);
});
document.addEventListener("DOMContentLoaded", function() {
    // Carica la navbar
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => document.getElementById("navbar").innerHTML = data);

    // Carica il footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer").innerHTML = data);

    // Effetto scrittura nel titolo
    const textElement = document.querySelector(".animated-text");
    const text = "Benvenuti alla Macelleria Vita Giuseppe";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    textElement.textContent = ""; // Reset testo
    setTimeout(typeEffect, 500); // Avvia effetto dopo mezzo secondo
});
