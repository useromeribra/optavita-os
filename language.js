const languages = [
  "English", "Arabic", "French", "Spanish", "German", "Turkish", "Japanese", "Chinese", "Hindi", "Portuguese",
  "Russian", "Korean", "Italian", "Dutch", "Swedish", "Indonesian", "Thai", "Persian", "Urdu", "Swahili"
];

const langSearch = document.getElementById("language-search");
const langButtons = document.getElementById("language-buttons");
const startBtn = document.getElementById("start-btn");

languages.forEach(lang => {
  const btn = document.createElement("button");
  btn.className = "lang-btn";
  btn.innerText = lang;
  btn.onclick = () => {
    startBtn.disabled = false;
    localStorage.setItem("selectedLanguage", lang);
    startBtn.onclick = () => {
      window.location.href = 'register.html';
    };
  };
  langButtons.appendChild(btn);
});
