// A union of two primitive types, like string | number, is really simple: it's a string or a number. The same is true of object types, but it can be tricky to know which type you're dealing with. That's where "discriminant properties" (or "tags") come in handy. It's just a property that tells you which type you're dealing with, and makes it easy to use conditional logic to handle each type. What is special about it is it can only be one value.

// Unions of objects with a discriminant property are called "discriminated unions" or "tagged unions".

type MultipleChoiceLesson = {
    kind: "multiple-choice"; // Discriminant property
    question: string;
    studentAnswer: string;
    correctAnswer: string;
  };
  
  type CodingLesson = {
    kind: "coding"; // Discriminant property
    studentCode: string;
    solutionCode: string;
  };
  
  type Lesson = MultipleChoiceLesson | CodingLesson;
  
  function isCorrect(lesson: Lesson): boolean {
    switch (lesson.kind) {
      case "multiple-choice":
        return lesson.studentAnswer === lesson.correctAnswer;
      case "coding":
        return lesson.studentCode === lesson.solutionCode;
    }
  }


//   Discriminated unions are really useful when you need to account for another new shape because TypeScript can ensure you handle all the possible cases. If we make these changes:

type TrueFalseLesson = {
    kind: "true-false"; // Discriminant property
    question: string;
    studentAnswer: boolean;
    correctAnswer: boolean;
  };
  
  type Lesson = MultipleChoiceLesson | CodingLesson | TrueFalseLesson;

//   TypeScript will throw an error: Function lacks ending return statement and return type does not include 'undefined'. Which reminds us to add a third case:

function isCorrect(lesson: Lesson): boolean {
    switch (lesson.kind) {
      case "multiple-choice":
        return lesson.studentAnswer === lesson.correctAnswer;
      case "coding":
        return lesson.studentCode === lesson.solutionCode;
      case "true-false":
        return lesson.studentAnswer === lesson.correctAnswer;
    }
  }

//   Do you have to use kind as the "tag"? Not technically. Should you use "kind"? Yes, follow the convention.