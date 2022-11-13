let promise = fetch("https://test-shop-48934-default-rtdb.firebaseio.com/products.json");

let goods = document.querySelector('.products');

if (goods) {
    promise.then(response => {
        return response.json();
    }).then(json => {
        for (element in json) {
            let item = document.createElement('div'); // Создаем новый div элемент
            item.classList.add('item'); // Добавляем к нему класс item
            item.innerHTML = `
                <div>
                    <div class="item-title">${json[element].title}</div>
                    <div class="item-image">
                        <img src="${json[element].image}" alt="">
                    </div>
                    <div class="property">
                        <div>Категория:</div>
                        <div>${json[element].category}</div>
                        <div>Рейтинг:</div>
                        <div>${json[element].rating}</div>
                    </div>
                    <div class="item-price"><span id="price">${json[element].price}</span>$</div>
                </div>
            `; /* Создаем внутри блока товар */
            goods.append(item);
        };
    });
}

function products(url, method = 'GET', data = []) {
    switch (method) {
        case 'GET':
            return fetch(url)
                    .then(result => result.json)
                    .then(json => console.log(json));
        break;
        case 'POST':
            return fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
              .then(result => result.json)
              .then(json => console.log(json));
        break;
        case 'PUT':
        
        break;
        case 'DELETE':
        
        break;
    
        default:

        break;
    }
}