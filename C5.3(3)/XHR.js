function useRequest(url, cb) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function () {
        if (xhr.status != 200) {
            console.log("Status of answer: ", xhr.status);
        } else {
            const result = JSON.parse(xhr.response);
            if (cb) {
                cb(result);
            }
        }
    };

    xhr.onerror = function () {
        console.log("Error! Status of answer: ", xhr.status);
    };

    xhr.send();
}

const resultNode = document.querySelector(".result");

function displayResult(apiData) {
    let cards = "";

    apiData.forEach((element) => {
        const cardBlock = `
        <div class="card">
            <img src="${element.download_url}" class="card-image"/>
            <p>${element.author}</p>
        </div>
        `;
        cards += cardBlock;
    });

    resultNode.innerHTML = cards;
}

const btnNode = document.querySelector(".btn");

btnNode.addEventListener("click", () => {
    let value = Number(document.querySelector("input").value);
    console.log(value)
    if (value >= 1 && value <= 10)
        useRequest(
            `https://picsum.photos/v2/list?limit=${value}`,
            displayResult
        );
    else resultNode.innerHTML = "Число вне диапазона от 1 до 10";
});