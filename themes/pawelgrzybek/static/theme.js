const themePickerInputs = document.querySelectorAll(".js-theme input");

const userTheme = localStorage.getItem("theme");

if (userTheme) {
  [...themePickerInputs].find(
    ({ value }) => value === userTheme
  ).checked = true;
  document.documentElement.setAttribute("data-theme", userTheme);
}

themePickerInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    const theme = e.target.value;
    document.documentElement.setAttribute("data-theme", theme);

    theme === "system"
      ? localStorage.removeItem("theme")
      : localStorage.setItem("theme", theme);
  });
});
