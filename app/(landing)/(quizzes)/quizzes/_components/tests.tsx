"use client";

import { Button } from "@/components/ui/button";
import SingleTest from "./test";
import React, { useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";
import { Loader, LoaderCircle } from "lucide-react";

export default function Tests() {
  const quizzes: {
    category: string;
    question: string;
    options: string[];
    correct_answer: number;
  }[] = [
    {
      category: "HTML",
      question: "What does HTML stand for?",
      options: [
        "A) Hyperlinks and Text Markup Language",
        "B) Home Tool Markup Language",
        "C) Hyper Text Markup Language",
        "D) Hyper Tool Markup Language",
      ],
      correct_answer: 2,
    },
    {
      category: "HTML",
      question: "Which HTML element is used to define the title of a document?",
      options: ["A) <title>", "B) <meta>", "C) <head>", "D) <link>"],
      correct_answer: 0,
    },
    {
      category: "CSS",
      question: "Which property is used to change the background color in CSS?",
      options: [
        "A) bgcolor",
        "B) background-color",
        "C) color",
        "D) background",
      ],
      correct_answer: 1,
    },
    {
      category: "CSS",
      question:
        "How do you make each word in a text start with a capital letter using CSS?",
      options: [
        "A) text-transform: capitalize",
        "B) text-style: capitalize",
        "C) font-transform: capitalize",
        "D) transform: capitalize",
      ],
      correct_answer: 0,
    },
    {
      category: "JavaScript",
      question: "Which company developed JavaScript?",
      options: ["A) Microsoft", "B) Netscape", "C) Google", "D) Apple"],
      correct_answer: 1,
    },
    {
      category: "JavaScript",
      question:
        "Which of the following is a correct way to declare a JavaScript variable?",
      options: [
        "A) var myVar",
        "B) variable myVar",
        "C) v myVar",
        "D) myVar var",
      ],
      correct_answer: 0,
    },
    {
      category: "HTML",
      question: "Which HTML element is used to create a hyperlink?",
      options: ["A) <a>", "B) <link>", "C) <href>", "D) <nav>"],
      correct_answer: 0,
    },
    {
      category: "CSS",
      question: "How do you select an element with id 'header' in CSS?",
      options: ["A) .header", "B) #header", "C) header", "D) *header"],
      correct_answer: 1,
    },
    {
      category: "JavaScript",
      question: "Which method is used to write HTML output in JavaScript?",
      options: [
        "A) document.write()",
        "B) document.output()",
        "C) console.log()",
        "D) innerHTML",
      ],
      correct_answer: 0,
    },
    {
      category: "JavaScript",
      question:
        "What is the correct syntax for referring to an external script called 'app.js'?",
      options: [
        "A) <script name='app.js'>",
        "B) <script href='app.js'>",
        "C) <script src='app.js'>",
        "D) <script file='app.js'>",
      ],
      correct_answer: 0,
    },
  ];
  const [current, setCurrent] = React.useState(0);
  const [score, setScore] = React.useState<number>(0);
  const [celebrate, setCelebrate] = React.useState<boolean>(false);
  const [category, setCategory] = React.useState("");
  const [categories, setCategories] = React.useState<unknown[]>();
  const [load, setLoad] = React.useState(false);
  const router = useRouter();
  const [questions, setQuestions] = React.useState<
    {
      category: string;
      question: string;
      options: string[];
      correct_answer: number;
    }[]
  >([...quizzes]);

  useEffect(() => {
    if (score == questions.length) {
      setCelebrate(true);
      return;
    }

    setCelebrate(false);
  }, [score, questions.length]);

  const fetchCategories = () => {
    const categortyItems = new Set();
    quizzes.map((quiz) => {
      categortyItems.add(quiz.category);
    });
    setCategories(Array.from(categortyItems));
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleNext = () => {
    if (current === questions.length - 1) {
      setCurrent(0);
    }
    if (current > -1 && current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handleScore = (score: number): void => {
    setScore(score);
  };

  console.log("rendering");

  const filterCategory = (category: string | unknown) => {
    setLoad(true);
    setScore(0);
    setTimeout(() => {
      console.log("somehow I have to wait!!");
      setLoad(false);
      // reset the count
      setCurrent(0);
      setQuestions(quizzes);

      // some funky thing will be done here
      const newItems = quizzes.map((items) => {
        if (items.category == category) {
          return items;
        }
      });

      const filtered: any = newItems.filter((item) => item !== undefined);

      setQuestions(filtered);
    }, 3000);
  };

  return (
    <>
      <div className="md:flex justify-around">
        <div className="flex items-center space-x-2 md:space-x-0  md:flex-col gap-y-[20px] mt-4 overflow-auto">
          {categories?.map((category) => {
            return (
              <div key={String(category)}>
                <Button
                  variant={"outline"}
                  className="w-[20vw]"
                  disabled={load}
                  onClick={() => filterCategory(category)}
                >
                  {load ? (
                    <LoaderCircle className="animate-spin h-3 w-3" />
                  ) : (
                    ""
                  )}{" "}
                  {String(category)}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col h-screen items-center mt-[15px] ">
          {questions.map((quiz, index) => {
            if (index === current) {
              return (
                <SingleTest
                  current={current}
                  length={questions.length - 1}
                  quiz={quiz}
                  key={index}
                  handleNext={handleNext}
                  setScore={handleScore}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
