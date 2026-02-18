const headings = document.querySelectorAll(".js-post :is(h2, h3, h4, h5, h6)");

for (const heading of headings) {
  const hash = document.createElement("a");

  hash.href = `#${heading.id}`;
  hash.innerHTML = "#";
  hash.className = "anchor";

  heading.appendChild(hash);
}
