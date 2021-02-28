const LOCAL_STORAGE_KEY = "comments-details";

const SELECTOR_FORM = ".js-form";
const SELECTOR_FORM_NAME = ".js-form-name";
const SELECTOR_FORM_WEBSITE = ".js-form-website";
const SELECTOR_FORM_TWITTER = ".js-form-twitter";
const SELECTOR_FORM_GITHUB = ".js-form-github";
const SELECTOR_FORM_SAVE_DATA = ".js-form-save-data";
const SELECTOR_REPLY_BUTTON = ".js-comments__reply";
const SELECTOR_FORM_LOADING = ".form__loader__wrapper";
const SELECTOR_FORM_CONFIRMATION = ".js-form__confirmation ";

const CLASS_FORM_HIDDEN = "form--hidden";
const CLASS_FORM_LOADING_HIDDEN = "form__loader__wrapper--hidden";
const CLASS_FORM_CONFIRMATION_HIDDEN = "form__confirmation--hidden";

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

function handlerClickReplyButton(event) {
  event.target.parentElement
    .querySelector(SELECTOR_FORM)
    .classList.toggle(CLASS_FORM_HIDDEN);
}

function handlerChangeSaveButton(event) {
  elmsCheckboxes.forEach((i) => (i.checked = event.target.checked));
}

async function handlerSubmitForm(event) {
  event.preventDefault();

  const formFieldName = this.querySelector('input[name="name"]');
  const formFieldWebsite = this.querySelector('input[name="website"]');
  const formFieldTwitter = this.querySelector('input[name="twitter"]');
  const formFieldGitHub = this.querySelector('input[name="github"]');
  const formFieldComment = this.querySelector('textarea[name="comment"]');
  const formFieldParent = this.querySelector('input[name="parent"]');

  try {
    this.querySelector(SELECTOR_FORM_LOADING).classList.remove(
      CLASS_FORM_LOADING_HIDDEN
    );
    await fetch(
      "https://rbjvwgq51g.execute-api.eu-west-2.amazonaws.com/Prod/",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formFieldName.value,
          website: formFieldWebsite.value,
          twitter: formFieldTwitter.value,
          github: formFieldGitHub.value,
          comment: formFieldComment.value,
          parent: formFieldParent.value,
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
        name: formFieldName.value,
        website: formFieldWebsite.value,
        twitter: formFieldTwitter.value,
        github: formFieldGitHub.value,
        save: this.querySelector('input[name="save"]').checked,
      })
    );

    [
      formFieldName,
      formFieldWebsite,
      formFieldTwitter,
      formFieldGitHub,
      formFieldComment,
    ].forEach((i) => (i.value = ""));

    this.querySelector(SELECTOR_FORM_LOADING).classList.add(
      CLASS_FORM_LOADING_HIDDEN
    );
    this.querySelector(SELECTOR_FORM_CONFIRMATION).classList.remove(
      CLASS_FORM_CONFIRMATION_HIDDEN
    );
  } catch (error) {
    console.log(error);
  } finally {
    this.querySelector(SELECTOR_FORM_LOADING).classList.add(
      CLASS_FORM_LOADING_HIDDEN
    );
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
  i.addEventListener("click", handlerClickReplyButton)
);
