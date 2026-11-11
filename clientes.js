const form = document.querySelector("#client-form");
const clientList = document.querySelector("#client-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const row = document.createElement("tr");

    for (const field of ["name", "email", "phone"]) {
        const cell = document.createElement("td");
        cell.textContent = data.get(field).trim();
        row.appendChild(cell);
    }

    clientList.appendChild(row);
    form.reset();
});
