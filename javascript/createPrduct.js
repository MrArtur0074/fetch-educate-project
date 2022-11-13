var create_form = document.getElementById('formCreate');
// Событие отправки формы
create_form.addEventListener("submit", function(event){
   event.preventDefault(); // Останавливает отправку формы
   /* new FormData - позволяет получить данные со всех входных полей у тега form */
   let formData = new FormData(create_form);
   let array = {};

   // Список пар ключ/значение
    for(let [name, value] of formData) {
        array[name] = value;
    }

    console.log(array);

    products('https://test-shop-48934-default-rtdb.firebaseio.com/products.json', 'POST', array);
});