document.querySelector(".btn").addEventListener("click", () => {
  callbackDetails(callback);
});
function callbackDetails(callback) {
  const content = document.querySelector(".content");
  content.style.display = "block";
  content.innerText = "Callback executed after 5 seconds";
  setTimeout(() => {
    callback();
  }, 5000);
}
function callback() {
  fetch("https://dummyjson.com/products/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayData(data);
    })
    .catch((error) => console.log(error));
}
function displayData(data) {
  console.log(typeof data);
  for (const key in data) {
    if (typeof data[key] === "object") {
      return;
    }
    if (Object.hasOwnProperty.call(data, key)) {
      const element = `${key} :${data[key]}`;
      console.log(element);
      const content = document.querySelector(".content");
      content.append(element);
    }
  }
}
