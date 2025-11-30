let stash = [];

const lookupBtn = document.getElementById("lookupBtn");
const lookupField = document.getElementById("lookupField");

document.getElementById("lookupBtn").addEventListener("click", function () {
  const keyword = lookupField.value;
  if (keyword == "") {
    return alert("Please enter a search term");
  }
  retrieveMix(keyword);
});

document.getElementById("lookupField").addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const keyword = lookupField.value;
    if (keyword == "") {
      return alert("Please enter a search term");
    }
    retrieveMix(keyword);
  }
});


const infoModal = document.getElementById("infoModal");

document.getElementById("infoModal").addEventListener("click", function (e) {
  if (e.target === infoModal) {
    closeModal();
  }
});

document.querySelector(".btn-close").addEventListener("click", function () {
  closeModal();
});

const retrieveMix = (keyword) => {
  const loadingBox = document.getElementById("loadingBox");
  const gridBox = document.getElementById("gridBox");
  const emptyMsg = document.getElementById("emptyMsg");

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data.drinks) {
        gridBox.innerHTML = "";
        emptyMsg.style.display = "block";
        return;
      }
      showMix(data.drinks);
    });
};

const showMix = (list) => {
  const gridBox = document.getElementById("gridBox");
  const emptyMsg = document.getElementById("emptyMsg");

  gridBox.innerHTML = "";
  emptyMsg.style.display = list.length > 0 ? "none" : "block";

  list.forEach((item) => {
    const box = document.createElement("div");
    box.className = "card-custom";

    box.innerHTML = `
      <img src="${item.strDrinkThumb}" alt="${item.strDrink}" />
      <div class="card-cap">
        <h6>${item.strDrink}</h6>
        <p>${item.strCategory}</p>
        <div class="card-buttons">
          <button class="btn btn-dark btn-sm addBtn">Select</button>
          <button class="btn btn-secondary btn-sm detailBtn">Info</button>
        </div>
      </div>
    `;
    box.querySelector(".addBtn").addEventListener("click", () => pickItem(item));
    box.querySelector(".detailBtn").addEventListener("click", () => openInfo(item));

    gridBox.appendChild(box);
  });
};

const pickItem = (mix) => {
  if (stash.length >= 7) {
    alert("Limit Exceeded: You may only select up to 7 items.");
    return;
  }
  if (stash.some((m) => m.idDrink === mix.idDrink)) {
    alert("Already Added: This item is already in your selection.");
    return;
  }
  stash.push(mix);
  renderBag();
};

const renderBag = () => {
  const bagList = document.getElementById("bagItems");
  const bagCount = document.getElementById("bagCount");

  bagList.innerHTML = "";
  stash.forEach((m, i) => {
    const li = document.createElement("li");
    li.className = "bag-item";
    li.innerHTML = `
      <span>${i + 1}.</span>
      <img src="${m.strDrinkThumb}" alt="${m.strDrink}" />
      <span>${m.strDrink}</span>
      <button class="removeBtn">X</button>
    `;
    li.querySelector(".removeBtn").addEventListener("click", () => {
      stash = stash.filter((x) => x.idDrink !== m.idDrink);
      renderBag();
    });
    bagList.appendChild(li);
  });
  bagCount.textContent = stash.length;
};

const openInfo = (data) => {
  const infoModal = document.getElementById("infoModal");

  document.getElementById("infoTitle").innerText = data.strDrink;
  document.getElementById("infoBody").innerHTML = `
    <img src="${data.strDrinkThumb}" alt="${data.strDrink}" />
    <p><strong>Category:</strong> ${data.strCategory}</p>
    <p><strong>Alcoholic:</strong> ${data.strAlcoholic}</p>
    <p><strong>Glass:</strong> ${data.strGlass}</p>
    <p><strong>Instructions:</strong> ${data.strInstructions}</p>
  `;
  infoModal.classList.add("show");
};

const closeModal = () => {
  const infoModal = document.getElementById("infoModal");
  infoModal.classList.remove("show");
};