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
      <html className='bg-gradient-to-t from-zinc-700 to-red-300 min-h-screen'>
        <main className='m-8 flex flex-col gap-8'>
          <Header titulo="ASSESSMENTS DA DISCIPLINA DE MOBILE FIRST"/>
          <ProfileCard img="./profile_pic.jpg" nome="Willian da Silva" sobre="Estudante em constante progresso de aprendizado"/>

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
          <Testimonial texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium odio neque, elementum lacinia enim pharetra ac. Proin et euismod velit. Sed a placerat lectus. Donec ac mauris augue. Fusce blandit mauris ullamcorper, tristique sapien porttitor, aliquet tellus. Ut tortor magna, convallis in facilisis sed, faucibus ac lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus nec eros vel lectus lobortis porta. In eget venenatis felis. Nulla luctus finibus metus, quis ullamcorper magna laoreet nec. Proin nec porta augue, in pellentesque augue. Etiam mollis finibus elementum. Vestibulum accumsan massa at lacus molestie, sit amet tincidunt est vulputate. Nulla scelerisque venenatis velit quis facilisis."/>

          <h1 className='text-2xl font-bold text-white'>PROJETOS</h1>

          <ProjectsSection>
            <ProjectCard titulo="Encrypter / Decrpyter" 
            img="./projects/1.gif"
            desc="Um programa simples de encriptografar/descirotpgrafar palavras e textos."
            />
          </ProjectsSection>
          
          

        </main>
      </html>
    </>
  )
}

export default App
