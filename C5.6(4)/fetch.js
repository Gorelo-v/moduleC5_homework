
const resultNode = document.querySelector(".result");
const btnNode = document.querySelector(".btn");

btnNode.addEventListener("click", () => {
    const h = Number(document.getElementById("height").value);
    const w = Number(document.getElementById("width").value);

    console.log(h, w)
    if ((h >= 100 && h <= 300) && (w >= 100 && w <= 300)) {
        fetch(`https://picsum.photos/${h}/${w}`)
            .then((response) => {
                console.log('response', response.url);
                resultNode.innerHTML = `
                       <div class="card">
                            <img src="${response.url}" class="card-image"/>
                        </div>`;
            })
            .catch(() => { console.log('error')})
    }
        else resultNode.innerHTML = "одно из чисел вне диапазона от 100 до 300";
});