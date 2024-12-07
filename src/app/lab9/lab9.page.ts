type Questions = {
  question: string;
  options: string[];
  correctAnswer: number;
};

type Answers = {
  index: any;
  answer: number;
};
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab9',
  templateUrl: './lab9.page.html',
  styleUrls: ['./lab9.page.scss'],
})
export class Lab9Page implements OnInit {
  answers: Answers[] = [];
  score: number = 0;
  text: string = 'text-primary';
  questions: Questions[] = [
    {
      question: 'What is the primary focus of Ichthyology?',
      options: [
        'A. Study of birds',
        'B. Study of fish',
        'C. Study of reptiles',
        'D. Study of amphibians',
      ],
      correctAnswer: 1, // Index of "B. Study of fish"
    },
    {
      question: 'Which of the following is a cartilaginous fish?',
      options: ['A. Salmon', 'B. Shark', 'C. Tuna', 'D. Catfish'],
      correctAnswer: 1, // Index of "B. Shark"
    },
    {
      question: 'What structure allows fish to regulate buoyancy?',
      options: ['A. Gills', 'B. Swim bladder', 'C. Lateral line', 'D. Fins'],
      correctAnswer: 1, // Index of "B. Swim bladder"
    },
  ];

  handleSetAnswer(index: number, answer: any) {
    this.answers[index] = { answer: answer?.detail?.value, index };
  }
  async handleCheckAnswers() {
    let count = 0;
    console.log(this.answers);

    await this.answers.forEach((answer) => {
      if (
        this.questions[answer.index].correctAnswer === Number(answer.answer)
      ) {
        count++;
      }
    });
    if (count === 3) {
      this.text = 'text-green-300';
    } else {
      this.text = 'text-red-300';
    }
    this.score = count;
  }
  constructor() {}

  ngOnInit() {}
}
