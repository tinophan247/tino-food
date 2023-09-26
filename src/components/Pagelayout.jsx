/* eslint-disable react/prop-types */
import Footer from "./Footer"
import Header from "./Header"

function Pagelayout({children}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Pagelayout