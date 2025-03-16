import React from 'react'
import Home from './Pages/Home'
import SubmitForm from './Pages/SubmitForm'
import Information from './Pages/Information'
import Contact from './Pages/Contact'
import NavBar from "./assets/NavBar.jsx";

const App = () => {
    let component
    switch (window.location.pathname) {
        case '/home':
            component = <Home/>
            break
        case '/':
            component = <Home/>
            break
        case '/information':
            component = <Information/>
            break
        case '/submitForm':
            component = <SubmitForm/>
            break
        case '/contact':
            component = <Contact/>
            break
    }
    return (
        <>
            <div className="bg-white dark:bg-black">
                <NavBar />
                <div>{component}</div>
            </div>
        </>
    )
}

export default App
