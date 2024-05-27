"use client";

import { Button } from "@/components/ui/button";
import SingleTest from "./test";
import React, { useEffect } from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { useRouter } from "next/navigation";
import { Loader, LoaderCircle } from "lucide-react";
import { quizzes } from "@/data/quizzes";

export default function Tests() {

  const [current, setCurrent] = React.useState(0);
  const [score, setScore] = React.useState<number>(0);
  const [celebrate, setCelebrate] = React.useState<boolean>(false);
  const [categories, setCategories] = React.useState<unknown[]>();
  const [load, setLoad] = React.useState(false);
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
