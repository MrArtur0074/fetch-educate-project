/* Функция которая будет получать запросы и возвращать json, это нужно для уменьшения кода при будующих запросах*/
function query(url, method = 'GET', data = []) {
    let query;
    switch (method) {
        case 'GET':
        default:
            query = fetch(url);
        break;

        case 'POST':
            query = fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
        break;
    }

    return query.then(result => result.json());
}