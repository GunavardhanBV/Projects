const sheetURL = "https://docs.google.com/spreadsheets/d/1PEojWGY-im72D0gL3XD5QHPtRTrrzBMqHUOAdrdCBe0/gviz/tq?tqx=out:json";


fetch(sheetURL)
  .then(res => res.text())
  .then(data => {
    const json = JSON.parse(data.substr(47).slice(0, -2));
    const rows = json.table.rows;

    const container = document.getElementById("events-container");
    container.innerHTML = "";

    rows.forEach(row => {
      const title = row.c[0]?.v || "";
      const date = row.c[1]?.v || "";
      const desc = row.c[2]?.v || "";
      const image = row.c[3]?.v || "";
      const link = row.c[4]?.v || "#";

      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <img src="${image}" alt="${title}">
        <div>
          <h3>${title}</h3>
          <small>${date}</small>
          <p>${desc}</p>
          <a href="${link}" target="_blank">REGISTER NOW</a>
        </div>
      `;
      container.appendChild(card);
    });
  });



  document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".transition-link");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // Stop instant jump
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = link.href; // Navigate after fade
      }, 500); // match CSS duration
    });
  });
});