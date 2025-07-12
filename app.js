const languages = [
  "English", "العربية", "Français", "Español", "中文", "日本語", "한국어", "Deutsch", "Italiano",
  "Türkçe", "Русский", "Português", "हिन्दी", "বাংলা", "فارسی", "اردو", "Nederlands", "Polski", "Tiếng Việt", "ภาษาไทย"
];

const languageButtons = document.getElementById("language-buttons");
const startButton = document.getElementById("start-btn");
const languageSearch = document.getElementById("language-search");

let selectedLanguage = null;

function createLanguageButtons(filter = "") {
  languageButtons.innerHTML = "";
  languages
    .filter(lang => lang.toLowerCase().includes(filter.toLowerCase()))
    .forEach(lang => {
      const btn = document.createElement("button");
      btn.className = "lang-btn";
      btn.innerText = lang;
      btn.onclick = () => {
        selectedLanguage = lang;
        startButton.disabled = false;
        startButton.innerText = `Start in ${lang}`;
      };
      languageButtons.appendChild(btn);
    });
}

languageSearch.addEventListener("input", e => {
  createLanguageButtons(e.target.value);
});

startButton.addEventListener("click", () => {
  if (selectedLanguage) {
    window.location.href = "login.html"; // You’ll create login.html later
  }
});

createLanguageButtons(); // initialize
