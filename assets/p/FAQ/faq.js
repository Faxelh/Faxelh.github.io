const question1 = document.querySelector('.question-1'),
    question2 = document.querySelector('.question-2'),
    question3 = document.querySelector('.question-3'),
    question4 = document.querySelector('.question-4'),
    question5 = document.querySelector('.question-5'),
    repo1 = document.querySelector('.reponse-1'),
    repo2 = document.querySelector('.reponse-2'),
    repo3 = document.querySelector('.reponse-3'),
    repo4 = document.querySelector('.reponse-4'),
    repo5 = document.querySelector('.reponse-5'),
    icon1 = document.querySelector('.icon-1'),
    icon2 = document.querySelector('.icon-2'),
    icon3 = document.querySelector('.icon-3'),
    icon4 = document.querySelector('.icon-4'),
    icon5 = document.querySelector('.icon-5');

question1.addEventListener('click', () => {
  if (repo1.style.display === 'block') {
    question1.classList.remove('bold')
    repo1.style.display = 'none'
    icon1.classList.remove('clicked')
  } else {
    question1.classList.add('bold')
    repo1.style.display = 'block'
    icon1.classList.add('clicked')
  }
})
question2.addEventListener('click', () => {
  if (repo2.style.display === 'block') {
    question2.classList.remove('bold')
    repo2.style.display = 'none'
    icon2.classList.remove('clicked')
  } else {
    question2.classList.add('bold')
    repo2.style.display = 'block'
    icon2.classList.add('clicked')
  }
})
question3.addEventListener('click', () => {
  if (repo3.style.display === 'block') {
    question3.classList.remove('bold')
    repo3.style.display = 'none'
    icon3.classList.remove('clicked')
  } else {
    question3.classList.add('bold')
    repo3.style.display = 'block'
    icon3.classList.add('clicked')
  }
})
question4.addEventListener('click', () => {
  if (repo4.style.display === 'block') {
    question4.classList.remove('bold')
    repo4.style.display = 'none'
    icon4.classList.remove('clicked')
  } else {
    question4.classList.add('bold')
    repo4.style.display = 'block'
    icon4.classList.add('clicked')
  }
})
question5.addEventListener('click', () => {
  if (repo5.style.display === 'block') {
    question5.classList.remove('bold')
    repo5.style.display = 'none'
    icon5.classList.remove('clicked')
  } else {
    question5.classList.add('bold')
    repo5.style.display = 'block'
    icon5.classList.add('clicked')
  }
})
