/* Позволяет получить get параметры */
let strGET = window.location.search.replace( '?', '')
    .split('&')
    .reduce(
        function(p,e){
            var a = e.split('=');
            p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
            return p;
        },
        {}
    );

/* Вывод всех товаров определенной категории*/
const categories = query(`https://63720b6d078587786188f1b3.mockapi.io/api/v1/category/${strGET.category}/products`).then(json => {
    let div_products = document.querySelector('.products');
    json.forEach(element => {
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
                    <div>${element.rating}</div>
                </div>
                <div class="item-price"><span id="price">${element.price}</span>$</div>
            </div>
        `; /* Создаем внутри блока товар */
        div_products.append(item);
    });
});
