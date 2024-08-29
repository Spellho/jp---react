/* eslint-disable react/no-unknown-property */
import './App.css'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import List from './components/List'
import Video from './components/Video'

function App() {
  return (
    <>
        <Header />
            <main>
                <List titulo={"aaa"}/>
                <Video />
                <Form />
            </main>
        <Footer />    
    </>
  )
}

export default App