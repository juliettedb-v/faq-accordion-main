const faqQuestions = document.querySelectorAll('.faq-question');
const faqAnswers = document.querySelectorAll('.faq-answer');
const toggleButtons = document.querySelectorAll('.toggle-btn');

// Add event listeners to each FAQ question

// Listener solo una vez al cargar
faqQuestions.forEach((question, index) => {
  question.addEventListener('click', () => {
    faqAnswers[index].classList.toggle('hidden');
    question.classList.toggle('active');

    // Cambiar iconos según el estado
    const icon = toggleButtons[index].querySelector('img');
    if (faqAnswers[index].classList.contains('hidden')) {
      icon.src = './assets/images/icon-plus.svg';
      icon.alt = 'Expand answer';
    } else {
      icon.src = './assets/images/icon-minus.svg';
      icon.alt = 'Collapse answer';
    }
  });
});

