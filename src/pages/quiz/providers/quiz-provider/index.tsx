import { useEffect, useMemo, useState, type ReactElement } from 'react'
import type { QuizItem } from '../../../../assets/types/quiz'
import { QuizContext } from '../../contexts/quiz-context'

type QuizContextProviderProps = {
  children: ReactElement
}

export const QuizContextProvider = ({ children }: QuizContextProviderProps) => {
  const [quizItems, setQuizItems] = useState<QuizItem[]>([])
  const [currentQuiz, setCurrentQuiz] = useState<number>(0)
  const score = useMemo<number>(() => {
    return quizItems.reduce(
      (previousNumber: number, currentValue: QuizItem) => {
        if (currentValue.correctedAnswer !== currentValue.selectedAnswer) {
          return previousNumber
        }
        return previousNumber + 1
      },
      0
    )
  }, [quizItems])

  useEffect(() => {
    setQuizItems([0,1,2,3,4,5,6,7,8,9].map(() => {
      return {
        question: 'test',
        choiceItems: [
          'Choice1',
          'Choice2',
          'Choice3',
          'Choice4'
        ],
        selectedAnswer: undefined,
        correctedAnswer: 1
      }
    }))
  }, [])

  return (
    <QuizContext.Provider
      value={{
        quizItems,
        score,
        currentQuiz,
        setCurrentQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}
