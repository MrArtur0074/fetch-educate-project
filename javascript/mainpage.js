async function getCategory() {
    let responce = await fetch('https://63720b6d078587786188f1b3.mockapi.io/api/v1/shop/1/category');
    let json = await responce.json();

    json.forEach(element => {
        let div = document.createElement('div');
        div.classList.add('col-6');
        div.dataset.id = element.id;
        div.innerHTML = `
        <a href="category.html?id=${element.id}">
            <div class="item">
                <img src="${element.image}" alt="">
                <span>${element.name}</span>
            </div>
        </a>
        `;

        document.querySelector('.grid').append(div);
    });
}

getCategory();

