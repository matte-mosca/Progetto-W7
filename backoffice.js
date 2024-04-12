const URL =
  "https://striveschool-api.herokuapp.com/api/product/";
const form = document.querySelector("form");
const imgURL = document.querySelector(".img");
const ProductName = document.querySelector(".name");
const ProductDescription = document.querySelector(".description");
const ProductPrice = document.querySelector(".price");
const ProductBrand = document.querySelector(".brand");
const btn = document.querySelector(".creationBtn");

const createCard = () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newCard = {
      imageUrl: imgURL.value,
      name: ProductName.value,
      brand: ProductBrand.value,
      description: ProductDescription.value,
      price: ProductPrice.value,
    };

    fetch(URL, {
      method: "POST",
      body: JSON.stringify(newCard),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjE4ZjA4MDdmMzA0NjAwMWFlNTlmODgiLCJpYXQiOjE3MTI5MTE0NzksImV4cCI6MTcxNDEyMTA3OX0.tM3o2KavctFtBgSg2xj4G5FTotjw5NhZypZYUVufDXM",
      },
    }).then((response) => {
      if (response.ok) {
        return response.JSON;
      } else {
        throw new Error("error Not Found");
      }
      
    });
   

    console.log(newCard);
  });
};
createCard();
