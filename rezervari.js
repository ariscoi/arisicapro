// 1) Modificarea stilului unui element sau grup de elemente
document.getElementById("numar_persoane").addEventListener("input", function () {
    // Modificarea stilului dinamic al textului pentru valoarea aleasă
    document.getElementById("valoare_persoane").textContent = this.value;
});

document.getElementById("numar_nopti").addEventListener("input", function () {
    document.getElementById("valoare_nopti").textContent = this.value;
});

document.getElementById("rezervariForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const destination = document.getElementById("destination").value;
    const numarPersoane = document.getElementById("numar_persoane").value;
    const numarNopti = document.getElementById("numar_nopti").value;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|ro|co)$/;
    if (!emailRegex.test(email)) {
        alert("Adresa de email nu este validă. Asigură-te că are formatul corect (exemplu@domeniu.com/.ro/.co).");
        return; 
    }

    // 2) Validarea numărului de telefon cu expresie regulată
    const phoneRegex = /^07\d{8}$/;
    if (!phoneRegex.test(phone)) {
        alert("Numărul de telefon nu este valid. Asigură-te că începe cu 07 și are exact 10 cifre.");
        return; 
    }

    const popup = document.getElementById("popup");
    popup.textContent = `Am primit formularul Dvs. Vă vom contacta în legătură cu rezervarea voastră de ${numarNopti} nopți pentru ${numarPersoane} persoane.`;
    popup.style.display = "block";

    // 3) Modificarea proprietăților unui element
    const button = document.querySelector(".button");
    button.textContent = "✔";  // Schimbăm textul butonului pentru a deveni o bifă verde
    button.classList.add("green");  // Adăugăm o clasă CSS pentru stilul verde

    // 6) Modificare de proprietăți
    // Utilizăm setTimeout pentru a ascunde pop-up-ul după 3 secunde
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);
    
    // 4) Inputuri funcționale - deja implementate cu range pentru număr de persoane și nopți
    // Am folosit input de tip range pentru "Număr de persoane" și "Număr de nopți"
    // Aceasta permite utilizatorului să aleagă valorile într-un interval dat.
    
    // 11) Schimbarea aleatoare a valorilor unei proprietăți
    // Vom schimba aleatoriu culoarea fundalului butonului la trimiterea formularului
    button.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;


    // 14) Validarea datelor dintr-un formular folosind expresii regulate
    
   

    // 5) Folosirea unei metode din clasele Math, Array, String, Date
    // Utilizăm `Math.random()` pentru a schimba aleatoriu culoarea fundalului butonului
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    button.style.backgroundColor = randomColor;

    // Salvăm datele în `localStorage`
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("destination", destination);
    localStorage.setItem("numarPersoane", numarPersoane);
    localStorage.setItem("numarNopti", numarNopti);
});
// Creăm un pop-up dinamic pentru mesaj
// Creăm un pop-up dinamic pentru mesaj
const popupForm = document.createElement("div");
popupForm.id = "popup-form";
popupForm.textContent = "Vă rugăm să completați formularul!";
popupForm.style.position = "fixed";
popupForm.style.top = "20px";
popupForm.style.right = "20px";
popupForm.style.padding = "10px 20px";
popupForm.style.backgroundColor = "rgba(255, 0, 0, 0.8)";
popupForm.style.color = "white";
popupForm.style.borderRadius = "5px";
popupForm.style.display = "none";
popupForm.style.zIndex = "1000";
popupForm.style.transition = "transform 0.3s ease, background-color 0.3s ease"; // Pentru animație
document.body.appendChild(popupForm);

// Eveniment pentru apăsarea tastei H pe document
document.addEventListener("keydown", function (event) {
    if (event.key.toLowerCase() === "q") {
        // Afișăm pop-up-ul
        popupForm.style.display = "block";

        // Aplicăm o animație folosind transform
        popupForm.style.transform = "scale(1.1)"; // Lărgim pop-up-ul
        popupForm.style.backgroundColor = "rgba(0, 255, 0, 0.8)"; // Schimbăm culoarea

        // Ascundem pop-up-ul după 3 secunde și resetăm animația
        setTimeout(() => {
            popupForm.style.display = "none";
            popupForm.style.transform = "scale(1)"; // Resetăm scalarea
            popupForm.style.backgroundColor = "rgba(255, 0, 0, 0.8)"; // Resetăm culoarea
        }, 3000);
    }
});

// Adăugăm un eveniment pentru pop-up
popupForm.addEventListener("click", function (event) {
    if (popupForm.style.display === "block") { // Verificăm dacă pop-up-ul este vizibil
        event.stopPropagation(); // Prevenim propagarea evenimentului către alte elemente
        
        // Obținem stilul calculat al pop-up-ului
        const computedStyle = getComputedStyle(popupForm);

        // Extragem dimensiunile pop-up-ului (lățimea și înălțimea)
        const popupWidth = parseInt(computedStyle.width);
        const popupHeight = parseInt(computedStyle.height);

        // Modificăm stilul pe baza dimensiunilor pop-up-ului
        if (popupWidth > 150 && popupHeight > 50) {
            popupForm.style.backgroundColor = "rgba(0, 0, 255, 0.8)"; // Culoare diferită pentru dimensiuni mari
        } else {
            popupForm.style.backgroundColor = "rgba(255, 255, 0, 0.8)"; // Culoare diferită pentru dimensiuni mici
        }

        alert("Ați apăsat pe pop-up!");
    }
});

// Eveniment pe document pentru click-uri
document.addEventListener("click", function () {
    if (popupForm.style.display === "block") { // Verificăm dacă pop-up-ul este vizibil
        alert("Ați făcut click în afara pop-up-ului!");
    }
});

// Check if user is logged in when the page loads
window.addEventListener("load", function() {
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("loginForm").style.display = "none"; // Hide login form
        document.getElementById("logoutButton").style.display = "block"; // Show logout button
    } else {
        document.getElementById("loginForm").style.display = "block"; // Show login form
        document.getElementById("logoutButton").style.display = "none"; // Hide logout button
    }
});

// Handle the login form submission
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Fetch user data from the users.json file
    fetch('users.json')
        .then(response => response.json()) // Parse JSON from the response
        .then(data => {
            const users = data.users; // Access the 'users' array in the JSON data
            const user = users.find(u => u.username === username && u.password === password); // Find matching user

            if (user) {
                document.getElementById("loginMessage").textContent = "Login successful!";
                localStorage.setItem("loggedIn", "true"); // Save logged-in status in localStorage

                // Hide the login form and show the logout button
                document.getElementById("loginForm").style.display = "none";
                document.getElementById("logoutButton").style.display = "block";
            } else {
                document.getElementById("loginMessage").textContent = "Invalid username or password.";
            }
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            document.getElementById("loginMessage").textContent = "An error occurred. Please try again.";
        });
});

// Handle logout
document.getElementById("logoutButton").addEventListener("click", function() {
    localStorage.removeItem("loggedIn"); // Remove logged-in status
    document.getElementById("loginForm").style.display = "block"; // Show login form
    document.getElementById("logoutButton").style.display = "none"; // Hide logout button
});
