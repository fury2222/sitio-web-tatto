(function(){
    const titleQuestions = [...document.querySelectorAll('.question_title')];

    titleQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Cerrar todas las preguntas antes de abrir una nueva
            titleQuestions.forEach(item => {
                let answer = item.nextElementSibling;
                let addPadding = item.parentElement.parentElement;

                if (item !== question) {
                    // Cerrar todas las respuestas y resetear las clases
                    answer.classList.remove('questions_show--open');
                    addPadding.classList.remove('questions_padding--add');
                    item.children[0].classList.remove('questions_arrow--rotatate');
                }
            });

            // Alternar la pregunta seleccionada
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions_padding--add');
            question.children[0].classList.toggle('questions_arrow--rotatate');
            answer.classList.toggle('questions_show--open');
        });
    });
})();
