const URL = "https://striveschool-api.herokuapp.com/api/product/";

document.addEventListener("DOMContentLoaded", () => {
  const appendCard = () => {
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjA4MDdmMzA0NjAwMWFlNTlmODgiLCJpYXQiOjE3MTI5MTE0NzksImV4cCI6MTcxNDEyMTA3OX0.tM3o2KavctFtBgSg2xj4G5FTotjw5NhZypZYUVufDXM",
      }.then((response) => {
        if (response.ok) {
          console.log(response);
          return response.json();
        } else {
          throw new Error(response);
        }
      }),
    }).then((Objects) => {
      const productContainer = document.querySelector(".container");
      const row = document.querySelector(".row");

      console.log(data);
      Objects.forEach((Object) => {
        console.log(Object);
        const col = document.createElement("col");
        col.classList.add("col-md-4");
        productContainer.appendChild(col);

        col.innerHTML = `
        
          <div class="card mb-4 shadow-sm">
          src="${Object.imageUrl}"
          class="bd-placeholder-img card-img-top"
          />
          <div class="card-body">
          <h5 class="card-title">${Object.name}</h5>
          <p class="card-text">
            ${Object.brand}
          </p>
          <p class="card-text">
            ${Object.price}
          </p>
          <p class="card-text">
            ${Object.description}
          </p>
          <div
            class="d-flex justify-content-between align-items-center"
          >
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Modifica
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
              Elimina
              </button>
            </div>
            <small class="text-muted">${id}</small>
          </div>
        </div>
      </div>`;
      });
    });

    appendCard();
  };
});
