import  React from "react"
import Nav from "./navbar/navbar.js"
import HomeContainer from "./homeContainer/homeContainer.js"
import PersonalDetail from "./personalDetail/personaldetail.js"
import WhatIDo from "./whatIDo/whatIDo.js"
import ProjectRecord from "./projectRecord/projectRecord.js"
import  Footer from "./footer/footer.js"

class Home extends React.Component
{
    render()
    {
        return(
            <div>
                <Nav/>
                <HomeContainer/>
                <PersonalDetail/>
                <WhatIDo/>
                <ProjectRecord/>
                <Footer/>
            </div>
        )
    }
}

export default Home