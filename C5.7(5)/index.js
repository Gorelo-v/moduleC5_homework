function useRequest(url) {
    fetch(url)
            .then((response) => {
                window.localStorage.setItem('successResp', url);
                return response.json();
            })
            .then(displayResult)
            .catch(() => { console.log('error')})
}

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

const resultNode = document.getElementById("finRes");
const btnNode = document.querySelector(".btn");
const successsResp = window.localStorage.getItem('successResp')

console.log(successsResp)
if (successsResp)
    useRequest(successsResp);

btnNode.addEventListener("click", () => {
    const page = Number(document.getElementById("page").value);
    const limit = Number(document.getElementById("limit").value);
    const pageRes = document.getElementById("pageRes");
    const limitRes = document.getElementById("limitRes");

    if (!(page >= 1 && page <= 10))
        pageRes.innerHTML = "Номер страницы вне диапазона от 1 до 10";
    else
        pageRes.innerHTML = "";
        
    if (!(limit >= 1 && limit <= 10))
        limitRes.innerHTML = "Лимит вне диапазона от 1 до 10";
    else
        limitRes.innerHTML = "";
        
    if (!((page >= 1 && page <= 10) || (limit >= 1 && limit <= 10)))
        resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    else
        resultNode.innerHTML = "";

    if ((page >= 1 && page <= 10) && (limit >= 1 && limit <= 10)) {
        const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
        useRequest(url)
    }
});