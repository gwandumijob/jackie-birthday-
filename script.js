// Data za lugha (Translations)
const translations = {
    sw: {
        welcome: "Ingia kwenye Mfumo 🎁",
        sub: "Weka taarifa zako ili ufungue zawadi maalum:",
        namePlaceholder: "Weka Jina lako",
        btnOpen: "Fungua Zawadi",
        bdayWish: "Leo ndiyo siku yako kuu! Mfumo umesoma taarifa zako na kukuandalia ujumbe huu maalum wa kukufanya ufurahi. 💖✨",
        settingsBtn: "⚙️ Settings & Lugha"
    },
    en: {
        welcome: "Enter the System 🎁",
        sub: "Enter your details to unlock your special gift:",
        namePlaceholder: "Enter your Name",
        btnOpen: "Open Gift",
        bdayWish: "Today is your special day! The system has verified your info and prepared this exclusive message just for you. 💖✨",
        settingsBtn: "⚙️ Settings & Language"
    }
};

let currentLang = localStorage.getItem('site_lang') || 'sw';

document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value.trim();
    const birthdate = document.getElementById('birthdate').value;

    if (!username || !birthdate) {
        alert(currentLang === 'sw' ? "Tafadhali jaza jina na tarehe ya kuzaliwa!" : "Please fill in your name and birthdate!");
        return;
    }

    localStorage.setItem('birthday_user', username);
    localStorage.setItem('birthday_date', birthdate);
    showDashboard(username, birthdate);
});

function showDashboard(name, bdate) {
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('content-section').classList.remove('hidden');

    document.getElementById('greeting-title').innerHTML = `🎉 Happy Birthday, ${name}! 🎉`;
    
    // Angalia tarehe ya kuzaliwa
    const today = new Date();
    const userBday = new Date(bdate);
    
    if (today.getDate() === userBday.getDate() && today.getMonth() === userBday.getMonth()) {
        document.getElementById('greeting-message').innerHTML = `"${name}, ${translations[currentLang].bdayWish}"`;
    }
}

// Settings Modal Control
document.getElementById('settings-toggle-btn').addEventListener('click', function() {
    document.getElementById('settings-modal').classList.remove('hidden');
});

document.getElementById('close-settings-btn').addEventListener('click', function() {
    document.getElementById('settings-modal').classList.add('hidden');
});

// Kubadilisha Lugha
document.getElementById('lang-select').addEventListener('change', function(e) {
    currentLang = e.target.value;
    localStorage.setItem('site_lang', currentLang);
    updateLanguageTexts();
});

function updateLanguageTexts() {
    document.getElementById('txt-welcome').innerText = translations[currentLang].welcome;
    document.getElementById('txt-sub').innerText = translations[currentLang].sub;
    document.getElementById('username').placeholder = translations[currentLang].namePlaceholder;
    document.getElementById('login-btn').innerText = translations[currentLang].btnOpen;
    document.getElementById('settings-toggle-btn').innerText = translations[currentLang].settingsBtn;
}

// Vitufe vya Chini
document.getElementById('torch-btn').addEventListener('click', function() {
    alert(currentLang === 'sw' ? "Tochi imewashwa! 🔦✨" : "Torch turned on! 🔦✨");
});

document.getElementById('camera-btn').addEventListener('click', function() {
    alert(currentLang === 'sw' ? "Kamera iko tayari kwa ajili ya picha! 📷🎉" : "Camera ready for pictures! 📷🎉");
});