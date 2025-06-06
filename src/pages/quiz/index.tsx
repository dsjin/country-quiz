import Header from "./components/Header"
import { QuizContextProvider } from "./providers/quiz-provider"
import './index.css'

function Quiz () {
  return (
    <QuizContextProvider>
      <div id="QuizContainer" className="grid grid-cols-12 gap-[32px] h-screen content-center">
        <Header />
        <div className="col-span-12 lg:col-span-10 xl:col-span-8 col-start-1 lg:col-start-2 xl:col-start-3 h-70 bg-orange-200">02</div>
      </div>
    </QuizContextProvider>
  )
}

export default Quiz
