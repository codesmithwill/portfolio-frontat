import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import SkillsSection from './components/SkillsSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <html className='bg-gradient-to-t from-zinc-700 to-gray-900 h-dvh'>
        <main className='m-8 flex flex-col gap-8'>
          <Header titulo="ASSESSMENTS DA DISCIPLINA DE MOBILE FIRST"/>
          <ProfileCard img="https://picsum.photos/81/81" nome="Willian da Silva" sobre="Estudante em constante progresso de aprendizado"/>

          <h1 className='text-2xl font-bold text-white'>MINHA AUTO AVALIAÇÃO</h1>
          
          <SkillsSection>

          </SkillsSection>
        </main>
      </html>
    </>
  )
}

export default App
