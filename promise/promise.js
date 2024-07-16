document.querySelector(".btn").addEventListener("click", promiseDetails);
function promiseDetails() {
  const content = document.querySelector(".content");
  content.style.display = "block";
  content.innerText = "Loading...";
  const fetchData = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("Operation timed out"));
    }, 5000);
    fetch("https://dummyjson.com/products/1")
      .then((response) => {
        clearTimeout(timeout);
        if (!response.ok) {
          reject(new Error("fetch error"));
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        console.log(error);
        content.innerText = `${error.message}`;
      });
  });
  fetchData
    .then((data) => {
      console.log(data);
      displayData(data);
    })
    .catch((error) => {
      console.log(error);
    });
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
      console.log(element);
      const divElement = document.createElement("div");
      divElement.innerText = element;

      content.append(divElement);
    }
  }
}
