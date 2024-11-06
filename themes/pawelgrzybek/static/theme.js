const themePickerButtons = document.querySelectorAll(".js-theme button");

const userTheme = localStorage.getItem("theme");

if (userTheme) {
  themePickerButtons.forEach((button) =>
    button.setAttribute("aria-pressed", "false"),
  );
  [...themePickerButtons]
    .find(({ value }) => value === userTheme)
    .setAttribute("aria-pressed", "true");
  document
    .querySelector('meta[name="color-scheme"]')
    .setAttribute("content", userTheme);
  document.querySelector("html").style.setProperty("color-scheme", userTheme);
}

themePickerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    themePickerButtons.forEach((button) =>
      button.setAttribute("aria-pressed", "false"),
    );
    e.target.setAttribute("aria-pressed", "true");
    const theme = e.target.value;

    if (theme === "system") {
      localStorage.removeItem("theme");
      document
        .querySelector('meta[name="color-scheme"]')
        .setAttribute("content", "light dark");
      document
        .querySelector("html")
        .style.setProperty("color-scheme", "light dark");
    } else {
      localStorage.setItem("theme", theme);
      document
        .querySelector('meta[name="color-scheme"]')
        .setAttribute("content", theme);
      document.querySelector("html").style.setProperty("color-scheme", theme);
    }
  });
});
