document.querySelector(".btn").addEventListener("click", asyncDetails);
function asyncDetails() {
  const content = document.querySelector(".content");
  content.style.display = "block";
  content.innerText = "Loading...";
  fetchData();
}
async function fetchData() {
  try {
    const fetchDataDetails = await fetch("https://dummyjson.com/products/1");
    const data = await fetchDataDetails.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.log("error", error);
  }
}
function displayData(data) {
  const content = document.querySelector(".content");
  content.innerText = "";
  for (const key in data) {
    if (typeof data[key] === "object") {
      return;
    }
    if (Object.hasOwnProperty.call(data, key)) {
      const element = `${key} :${data[key]}`;
      const divElement = document.createElement("div");
      divElement.innerText = element;
      content.append(divElement);
    }
  }
}
