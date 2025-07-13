const languages = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "zh", label: "中文" },
  { code: "ru", label: "Русский" },
  { code: "hi", label: "हिन्दी" },
  { code: "ja", label: "日本語" },
  { code: "tr", label: "Türkçe" },
  { code: "de", label: "Deutsch" },
  { code: "ko", label: "한국어" },
  { code: "pt", label: "Português" },
  { code: "it", label: "Italiano" },
  { code: "ur", label: "اردو" },
  { code: "fa", label: "فارسی" },
  { code: "sw", label: "Kiswahili" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "bn", label: "বাংলা" },
  { code: "th", label: "ไทย" },
  { code: "vi", label: "Tiếng Việt" }
];

const languageButtons = document.getElementById("language-buttons");
const startBtn = document.getElementById("start-btn");
const searchInput = document.getElementById("language-search");

let selectedLanguage = null;

languages.forEach(lang => {
  const btn = document.createElement("button");
  btn.className = "lang-btn";
  btn.textContent = lang.label;
  btn.dataset.lang = lang.code;

  btn.onclick = () => {
    selectedLanguage = lang;
    startBtn.disabled = false;
    startBtn.textContent = lang.code === "ar" ? "ابدأ رحلتك" : "Start Your Journey";
  };

  languageButtons.appendChild(btn);
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  [...languageButtons.children].forEach(btn => {
    const matches = btn.textContent.toLowerCase().includes(query);
    btn.style.display = matches ? "inline-block" : "none";
  });
});

startBtn.addEventListener("click", () => {
  if (selectedLanguage) {
    localStorage.setItem("optavita_lang", selectedLanguage.code);
    window.location.href = "register.html";
  }
});
