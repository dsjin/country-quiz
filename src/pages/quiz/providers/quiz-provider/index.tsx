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
    setQuizItems([])
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
