function checkLogin() {
    let nameInput = document.getElementById("username").value.trim().toLowerCase();
    let yearInput = document.getElementById("birthyear").value.trim();
    let errorMsg = document.getElementById("error-msg");

    // Hapa tunaweka jina lake "jackie" na mwaka wake (weka mwaka sahihi hapa, mfano: 2004)
    // Unaweza kubadilisha mwaka huu kama unataka kuwa maalum zaidi
    let correctName = "jackie"; 
    let correctYear = "2003"; // Badilisha uweke mwaka wake halisi kama upo tofauti

    if (nameInput === correctName && yearInput === correctYear) {
        // Ficha sehemu ya login na uonyeshe sehemu ya shangwe
        document.getElementById("login-container").style.display = "none";
        document.getElementById("surprise-container").classList.remove("hidden");
    } else {
        errorMsg.textContent = "Jina au mwaka si sahihi! Jaribu tena.";
    }
}