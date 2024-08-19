document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generate-btn");
  const resultShower = document.querySelector(".result-shower");

  generateBtn.addEventListener("click", () => {
    getStringData();
  });

  async function getStringData() {
    try {
      // fetch data using API request
      const response = await fetch("/data", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      displayStringData(data);
    } catch (error) {
      console.log("Error getting string data", error);
    }
  }

  // display string data
  function displayStringData(data) {
    const randomString = data.finalResult;

    const resultHtml = `
    <p class="text-4xl font-bold">${randomString}</p>
    `;

    resultShower.innerHTML = resultHtml;
  }
});
