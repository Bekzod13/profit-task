import Discover from '../components/discover/Discover';
import EditorPick from '../components/editorPick/EditorPick';
import Fashion from '../components/fashion/Fashion';
import FromBlog from '../components/fromBlog/FromBlog';
import Hero from '../components/hero/Hero';
import Latest from '../components/latest/Latest';
import MostRead from '../components/mostRead/MostRead';
import Politics from '../components/politics/Politics';
import Sponsored from '../components/sponsored/Sponsored';
import WhatWatch from '../components/whatWatch/WhatWatch';
import Writer from '../components/writer/Writer';

const Home = () => {
  return (
    <>
      <Hero/>
      <Sponsored/>
      <EditorPick/>
      <MostRead/>
      <Discover/>
      <Latest/>
      <WhatWatch/>
      <Politics/>
      <Writer/>
      <Fashion/>
      <FromBlog/>
    </>
  )
}

export default Home