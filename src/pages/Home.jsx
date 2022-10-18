import Discover from '../components/discover/Discover'
import EditorPick from '../components/editorPick/EditorPick'
import Hero from '../components/hero/Hero'
import Latest from '../components/latest/Latest'
import MostRead from '../components/mostRead/MostRead'
import Sponsored from '../components/sponsored/Sponsored'

const Home = () => {
  return (
    <>
      <Hero/>
      <Sponsored/>
      <EditorPick/>
      <MostRead/>
      <Discover/>
      <Latest/>
    </>
  )
}

export default Home