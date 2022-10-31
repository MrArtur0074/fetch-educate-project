let promise = fetch("https://fakestoreapi.com/products");

let goods = document.querySelector('.products');

promise.then(response => {
    return response.json();
}).then(json => {
    json.forEach(element => {
        console.log(element);
        let item = document.createElement('div'); // Создаем новый div элемент
        item.classList.add('item'); // Добавляем к нему класс item
        item.innerHTML = `
            <div>
                <div class="item-title">${element.title}</div>
                <div class="item-image">
                    <img src="${element.image}" alt="">
                </div>
                <div class="property">
                    <div>Категория:</div>
                    <div>${element.category}</div>
                    <div>Рейтинг:</div>
                    <div>${element.rating.rate}</div>
                </div>
                <div class="item-price"><span id="price">${element.price}</span>$</div>
            </div>
        `; /* Создаем внутри блока товар */
        goods.append(item);
    });
});

