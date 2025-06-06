import { createContext, useContext, useEffect, useMemo, useState, type ReactElement } from "react"
import type { QuizItem } from "../../../../assets/types/quiz"

type QuizContextProviderProps = {
  children: ReactElement
}

export type QuizContextType = {
  quizItems: QuizItem[]
  score: number
  currentQuiz: number
  setCurrentQuiz: (value: number) => void
}

export const QuizContext = createContext<QuizContextType | null>(null)

export const useQuizContext = () => {
  const context = useContext(QuizContext)
  if (context === undefined || context === null) {
    throw new Error(
      'useQuizContext must be used within a QuizContext',
    )
  }
  return context
}
