function checkPassword(event) {
    fetch("login.json") // Stellt Verbindung zu JSON File her
        .then(response => response.json()) // Antwort wird empfangen und als JSON weitergegeben
        .then(data => {
            const correctEmail = data.email; // Die Email und Passwort aus dem JSON File werden ausgelesen und Konstanten zugewiesen
            const correctPw = data.password;

        const email = document.getElementById("email").value; // Das Eingegebene Login wird ausgelesen und als Konstanten definiert
        const password = document.getElementById("password").value;

        if (email === correctEmail && password === correctPw) {
            window.location.href="LoginDone.html"//Wenn Email und Passwort aus dem JSON File mit denen aus dem Login übereinstimmen wird man weitergeleitet
        }else{
            alert("Falsches Login") //Eine Fehlermeldung erscheint wenn Das Login nicht übereinstimmt
        }
        })
        .catch(error => {
            console.log("Error loading login " + error); // Bei Ladefehlern wird in der Konsole der Errorcode ausgegeben
        });
    event.preventDefault(); // Verhindert das abschicken des Formulars
}