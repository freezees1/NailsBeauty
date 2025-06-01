
// Получаем модальное окно
var modal = document.getElementById("myModal");

// Получаем кнопку, которая открывает модальное окно
var btn = document.getElementById("openModal");

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, открывается модальное окно
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закрывается модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь нажимает где-либо вне модального окна, оно тоже закрывается
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обработка отправки формы (можете заменить на вашу обработку)
document.getElementById('bookingForm').onsubmit = function(event) {
    event.preventDefault(); // Отменяем стандартное поведение
    alert('Запись отправлена!'); // Можете заменить на свою логику
    modal.style.display = "none"; // Закрываем модальное окно
};
