document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const birthdate = document.getElementById('birthdate').value;

    if (!username || !birthdate) {
        alert("Tafadhali jaza jina lako na tarehe ya kuzaliwa!");
        return;
    }

    // Hifadhi kwenye kumbukumbu ya kivinjari (LocalStorage)
    localStorage.setItem('birthday_user', username);
    localStorage.setItem('birthday_date', birthdate);

    // Badilisha ukurasa kuonyesha zawadi
    showDashboard(username, birthdate);
});

function showDashboard(name, bdate) {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('content-section').classList.remove('hidden');

    // Badilisha jina kwenye ujumbe
    const titleEle = document.getElementById('greeting-title');
    titleEle.innerHTML = `🎉 Happy Birthday, ${name}! 🎉`;

    // Angalia kama ni leo siku yake ya kuzaliwa
    const today = new Date();
    const userBday = new Date(bdate);
    
    if (today.getDate() === userBday.getDate() && today.getMonth() === userBday.getMonth()) {
        document.getElementById('greeting-message').innerHTML = 
            `"${name}, leo ndiyo siku yako maalum ya kuzaliwa! Mfumo umegundua kuwa umezaliwa tarehe ya leo. Nakutakia furaha isiyo na kiasi, mafanikio tele, na baraka tele katika umri wako mpya!" 💖✨`;
    }
}

// Kukumbuka kama alishawahi kuingia
window.onload = function() {
    const savedName = localStorage.getItem('birthday_user');
    const savedBdate = localStorage.getItem('birthday_date');
    
    if (savedName && savedBdate) {
        // Unaweza kuruhusu kuendelea moja kwa moja au kumuacha ajaze tena
    }
}

// Kitufe cha Tochi na Kamera (Mawasiliano madogo ya ziada)
document.getElementById('torch-btn').addEventListener('click', function() {
    alert("Tochi imewashwa kwa ajili ya kuangaza sherehe yako! 🔦✨");
});

document.getElementById('camera-btn').addEventListener('click', function() {
    alert("Kamera tayari kupiga picha za kumbukumbu za siku yako kuu! 📷🎉");
});