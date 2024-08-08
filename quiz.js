const questionObj = [
  {
    category: 'Food & Drink',
    id: 'qa-1',
    correctAnswer: 'Three',
    options: ['Two', 'Three', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    category: 'Food & Drink',
    id: 'qa-1',
    correctAnswer: 'L. Frank Baum',
    options: ['Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon'],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz",
  },
  {
    category: 'Food & Drink',
    id: 'qa-1',
    correctAnswer: 'Atlanta United',
    options: ['Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars'],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    category: 'Food & Drink',
    id: 'qa-1',
    correctAnswer: 'A Nanny',
    options: ['A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny'],
    question:
      'A female goat is known as what?',
  },
  {
    category: 'Food & Drink',
    id: 'qa-1',
    correctAnswer: 'P. L. Travers',
    options: ['J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton'],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
]


let index = 0;
let question = document.getElementById('question');
let options = document.getElementById('options');
let score = document.getElementById('score');
let next = document.getElementById('btn');
let num = 0;

document.addEventListener('DOMContentLoaded', function () {
  loadQuestion();
  function loadQuestion() {
    if (index >= questionObj.length) {
      options.innerHTML = '';
      question.textContent = 'Quiz Completed!!'
      next.style.display='none'
      return;
    }
    options.innerHTML = '';
    // Set the question text

    question.textContent = `${questionObj[index].question}`;

    // Append options as buttons and add event listeners
    questionObj[index].options.forEach((opt) => {
      let optBut = document.createElement('button');
      optBut.classList.add('optn');
      optBut.textContent = `${opt}`;
      options.appendChild(optBut);

      // Add event listener to each button
      optBut.addEventListener('click', function () {

        if (optBut.textContent === questionObj[index].correctAnswer) {
          num += 1;
        } else {
          num -= 0.25;
        }
        score.textContent = `Score: ${num}/5`;
        index++;
        loadQuestion();
      });
    });
  }
});

// console.log(Math.floor(Math.random()*1+1));
