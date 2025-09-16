import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import SkillsSection from './components/SkillsSection'
import SkillCard from './components/SkillCard'
import TeacherReview from './components/TeacherReview'
import TeacherSection from './components/TeacherSection'
import ProjectsSection from './components/ProjectsSection'
import ProjectCard from './components/ProjectCard'
import './App.css'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <>
      <html className='bg-gradient-to-t from-zinc-700 to-cyan-900 min-h-screen'>
        <main className='m-8 flex flex-col gap-8'>
          <Header titulo="ASSESSMENTS DA DISCIPLINA DE MOBILE FIRST"/>
          <ProfileCard img="./profile_pic.jpg" nome="Willian da Silva Espindola" sobre="Estudando... estudando... e estudando! 😜"/>

          <h1 className='text-2xl font-bold text-white'>MINHA AUTO AVALIAÇÃO</h1>
          <SkillsSection>
            <SkillCard titulo="Flex/Grid Layout" myScore="5" />
            <SkillCard titulo="Media Query" myScore="7" />
            <SkillCard titulo="Estilização React" myScore="5" />
            <SkillCard titulo="Material UI" myScore="5" />
          </SkillsSection>

          <h1 className='text-2xl font-bold text-white'>AVALIAÇÃO DO PROFESSOR</h1>
          <TeacherSection>
            <TeacherReview titulo="Matéria" />
            <TeacherReview titulo="Domínio" />
          </TeacherSection>

          <h1 className='text-2xl font-bold text-white'>MEU DEPOIMENTO</h1>
          <Testimonial texto="Sem dúvidas a matéria de React foi uma das que eu mais aprendi até hoje dentro do Infnet, e além de ser uma das que eu mais gostei, por interagir justamente numa parte que eu amo tanto que é o front-end! Nunca havia me aprofundando com a linguagem, e de cara, busquei, perguntei pra IAs, vi vídeos sobre, realmente foi top!"/>

          <h1 className='text-2xl font-bold text-white'>PROJETOS</h1>

          <ProjectsSection>
            <ProjectCard titulo="Encrypter / Decrpyter" 
            img="./projects/1.gif"
            desc="Uma página simples de encriptografar/descirotpgrafar palavras."
            github="https://github.com/codesmithwill/encrypter-decrypter"
            link="https://encrypter-decrypter.vercel.app/"
            />

            <ProjectCard titulo="Testes de Performances 1/2/3" 
            img="./projects/2.png"
            desc="Todos os trabalhos referente a faculdade INFNET ao longo do trimestre."
            github="https://xkp2my.csb.app/"
            link="https://xkp2my.csb.app/"
            />

          </ProjectsSection>
          
          

        </main>
      </html>
    </>
  )
}

export default App
