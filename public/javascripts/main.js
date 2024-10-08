document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.getElementById("generate-btn");
  const resultShower = document.querySelector(".result-shower");
  const stringLength = document.querySelector("#string-length");
  const stringNumbers = document.querySelector("#string-numbers");

  let combinedHtml = "";

  generateBtn.addEventListener("click", () => {
    const lengthOfString = stringLength.value;
    const numberOFStrings = stringNumbers.value;
    const checkedValues = [];
    
    const checks = document.querySelectorAll('input[type="checkbox"]:checked');
    checks.forEach((checkBox) => {
      checkedValues.push(checkBox.id);
    });

    if (lengthOfString && numberOFStrings && checkedValues.length !== 0) {
      getStringData(lengthOfString, numberOFStrings, checkedValues);
    } else {
      alert("Please specify the given parameters!");
    }
  });

  async function getStringData(lengthOfString, numberOFStrings, checkedValues) {
    try {
      // fetch data using API request
      const response = await fetch("/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lengthOfString,
          numberOFStrings,
          checkedValues,
        }),
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

    combinedHtml = "";

    randomString.forEach((item) => {
      const listContent = `<li class="mt-3">${item}</li>`;

      combinedHtml += listContent;
    });

    resultShower.innerHTML = combinedHtml;
  }
});
