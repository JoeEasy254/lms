import { cn } from "@/lib/utils";
import { useState } from "react";

interface SingleTestProps {
  category: string;
  question: string;
  options: string[];
  correct_answer: number;
}
function SingleTest({
  quiz,
  current,
  handleNext,
  length,
  setScore,
}: {
  quiz: SingleTestProps;
  current: number;
  handleNext: () => void;
  length: number;
  setScore: (score: number) => void;
}) {
  const [answerState, setAnswerState] = useState("");

  function checkAnswer(index: number) {
    if (index === quiz.correct_answer) {
      console.log(answerState);
      setAnswerState("correct");

      setScore((prevScore) => prevScore + 1);

      setTimeout(() => {
        if (current != length) {
          handleNext();
        }
      }, 2000);
      return;
    } else {
      console.log(answerState);
      setAnswerState("wrong");
      setTimeout(() => {
        handleNext();
      }, 2000);
      return;
    }
  }

  return (
    <div
      className={cn(
        `w-[350px] cursor-pointer`,
        answerState == "wrong" ||
          (answerState == "correct" && "pointer-events-none")
      )}
    >
      <div>
        <h1 className="text-center line-clamp-2">
          {current}/{length}
        </h1>
      </div>
      <div>
        <h1 className="mb-4">{quiz.question}</h1>

        <div>
          <ul className="flex flex-col space-y-4 ">
            {quiz.options.map((option: string, index: number) => {
              return (
                <>
                  {answerState === "" && (
                    <>
                      <li
                        key={index}
                        className={cn(`p-3 border-2 rounded-md`)}
                        onClick={() => checkAnswer(index)}
                      >
                        {option}
                      </li>
                    </>
                  )}

                  {answerState === "wrong" && (
                    <>
                      <li
                        key={index}
                        className={cn(
                          `p-3 border-2 rounded-md`,
                          index !== quiz.correct_answer
                            ? "bg-red-500"
                            : "bg-green-500"
                        )}
                        onClick={() => checkAnswer(index)}
                      >
                        {option}
                      </li>
                    </>
                  )}

                  {answerState === "correct" && (
                    <>
                      <li
                        key={index}
                        className={cn(
                          `p-3 border-2 rounded-md`,
                          index === quiz.correct_answer
                            ? "bg-green-500"
                            : "bg-red-500"
                        )}
                        onClick={() => checkAnswer(index)}
                      >
                        {option}
                      </li>
                    </>
                  )}
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SingleTest;
