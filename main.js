const Feedback = {
  ratings: document.querySelectorAll('.rating'),
  ratingsContainer: document.querySelector('.rating-container'),
  sendBtn: document.querySelector('#send'),
  panel: document.querySelector('#panel'),

  selectedRating: 'Satisfied',

  showFeedbackMessage() {
    panel.innerHTML = `
      <i class="fas fa-heart"></i>
      <strong>Thank You!</strong>
      <br>
      <strong>Feedback: ${Feedback.selectedRating}</strong>
      <p>We'll use your feedback to improve our customer support</p>
    `
  },

  removeActive() {
    for(let i = 0; i < Feedback.ratings.length; i++) {
      Feedback.ratings[i].classList.remove('active')
    }
  },

  selectRating(event) {
    if(event.target.parentNode.classList.contains('rating')) {
      Feedback.removeActive()
      event.target.parentNode.classList.add('active')
      Feedback.selectedRating = event.target.nextElementSibling.innerHTML
    }
  },

  start() {
    Feedback.ratingsContainer.addEventListener('click', e => Feedback.selectRating(e))
    Feedback.sendBtn.addEventListener('click', Feedback.showFeedbackMessage)
  }
}

Feedback.start()