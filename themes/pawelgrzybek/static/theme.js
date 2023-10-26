const themePickerButtons = document.querySelectorAll(".js-theme button");

const userTheme = localStorage.getItem("theme");

if (userTheme) {
  themePickerButtons.forEach((button) =>
    button.setAttribute("aria-pressed", "false")
  );
  [...themePickerButtons]
    .find(({ value }) => value === userTheme)
    .setAttribute("aria-pressed", "true");
  document.documentElement.setAttribute("data-theme", userTheme);
}

themePickerButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    themePickerButtons.forEach((button) =>
      button.setAttribute("aria-pressed", "false")
    );
    e.target.setAttribute("aria-pressed", "true");
    const theme = e.target.value;
    document.documentElement.setAttribute("data-theme", theme);

    theme === "system"
      ? localStorage.removeItem("theme")
      : localStorage.setItem("theme", theme);
  });
});
