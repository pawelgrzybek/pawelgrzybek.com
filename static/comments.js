const LOCAL_STORAGE_KEY = "comments-details";
const SELECTOR_FORM = ".js-form";
const SELECTOR_FORM_NAME = ".js-form-name";
const SELECTOR_FORM_WEBSITE = ".js-form-website";
const SELECTOR_FORM_TWITTER = ".js-form-twitter";
const SELECTOR_FORM_GITHUB = ".js-form-github";
const SELECTOR_FORM_SAVE_DATA = ".js-form-save-data";
const SELECTOR_REPLY_BUTTON = ".js-comments__reply";
const CLASS_FORM_HIDDEN = "form--hidden";
const CLASS_FORM_SENDING = "form--sending";
const CLASS_MODERATION_HIDDEN = "moderation--hidden";

const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
if (savedData) {
  const { name, website, twitter, github, save } = JSON.parse(savedData);
  document
    .querySelectorAll(SELECTOR_FORM_NAME)
    .forEach((i) => (i.value = name));
  document
    .querySelectorAll(SELECTOR_FORM_WEBSITE)
    .forEach((i) => (i.value = website));
  document
    .querySelectorAll(SELECTOR_FORM_TWITTER)
    .forEach((i) => (i.value = twitter));
  document
    .querySelectorAll(SELECTOR_FORM_GITHUB)
    .forEach((i) => (i.value = github));
  document
    .querySelectorAll(SELECTOR_FORM_SAVE_DATA)
    .forEach((i) => (i.checked = save));
}

function handlerClickReplybutton(event) {
  event.target.parentElement
    .querySelector(SELECTOR_FORM)
    .classList.toggle(CLASS_FORM_HIDDEN);
}

function handlerChangeSaveButton(event) {
  elmsCheckboxes.forEach((i) => (i.checked = event.target.checked));
}

async function handlerSubmitForm(event) {
  event.preventDefault();

  try {
    this.classList.add(CLASS_FORM_SENDING);
    await fetch(
      "https://rbjvwgq51g.execute-api.eu-west-2.amazonaws.com/Prod/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: this.querySelector('input[name="name"]').value,
          website: this.querySelector('input[name="website"]').value,
          twitter: this.querySelector('input[name="twitter"]').value,
          github: this.querySelector('input[name="github"]').value,
          comment: this.querySelector('textarea[name="comment"]').value,
          parent: this.querySelector('input[name="parent"]').value,
          slug: location.pathname.replace(/\//g, ""),
          title: document.querySelector("h1").textContent,
        }),
      }
    );

    const method = this.querySelector('input[name="save"]').checked
      ? `setItem`
      : `removeItem`;
    localStorage[method](
      LOCAL_STORAGE_KEY,
      JSON.stringify({
        name: this.querySelector('input[name="name"]').value,
        website: this.querySelector('input[name="website"]').value,
        twitter: this.querySelector('input[name="twitter"]').value,
        github: this.querySelector('input[name="github"]').value,
        save: this.querySelector('input[name="save"]').checked,
      })
    );

    this.querySelector('textarea[name="comment"]').value = "";
    this.nextElementSibling.classList.remove(CLASS_MODERATION_HIDDEN);
  } catch (error) {
    console.log(error);
  } finally {
    this.classList.remove(CLASS_FORM_SENDING);
  }
}

// get elements for events
const elmsCheckboxes = document.querySelectorAll(SELECTOR_FORM_SAVE_DATA);
const elmsForms = document.querySelectorAll(SELECTOR_FORM);
const elmsButtons = document.querySelectorAll(SELECTOR_REPLY_BUTTON);

// attach event handlers
elmsCheckboxes.forEach((element) =>
  element.addEventListener("change", handlerChangeSaveButton)
);
elmsForms.forEach((element) =>
  element.addEventListener("submit", handlerSubmitForm)
);
elmsButtons.forEach((i) =>
  i.addEventListener("click", handlerClickReplybutton)
);
