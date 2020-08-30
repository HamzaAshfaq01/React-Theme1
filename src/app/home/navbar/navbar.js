import React from "react"
import {Data} from "./navData"



class Nav extends React.Component
{
    state={
        navData:Data,
    }
    render()
    {
         let response=this.state.navData.map((obj,index)=>
         {
             return(
                     <div key={index} className="navBar">
                        <div className="logo"><img src={obj.logo} alt=""/></div>
                        <ul className="navList">
                            <li>{obj.home}</li>
                            <li>{obj.about}</li>
                            <li>{obj.services}</li>
                            <li>{obj.resume}</li>
                            <li>{obj.work}</li>
                            <li>{obj.contact}</li>
                        </ul>
                     </div>
                    
                    )   

         })

         return(<div>{response}</div>)
    }
}

export default Nav