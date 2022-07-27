let value = document.getElementById("valueInp");// переменная находит элемент по id
let btnPlus = document.querySelector('.plus');// переменная находит элемент по классу
let i = 0;// создание переменной со значением 0
btnPlus.addEventListener('click' , () =>{ // добавление прослушивателя на действие "клик"
    let elemB = document.createElement('div'); // создание элемента div
    elemB.innerHTML = `        
    <input value='${value.value}'>
    <div class="blockBtn">
        <button onclick = 'del(this)'>del</button>
        <button>edit</button>
    </div>`// добавление в переменную html частку
    elemB.className = 'cresteBlock'; // присваивание класса элементу
    elemB.id = i++; // присваивание id элементу
    elemB.querySelector('input').setAttribute('disabled' , 'true'); // в elemB находим input и делаем его неактивным 
    document.body.append(elemB);// в body добавляем наш элемент
});
function hi (item) {
    console.log('hi');
}
function del(item) {
    item.parentNode.parentNode.remove()
};
function edit(item) {
    let elem = item.parentNode.parentNode.querySelector('input');
    console.log(elem);
    if (elem.disabled === true) {
        elem.disabled = false;
    } else {
        elem.disabled = true;
    }
}