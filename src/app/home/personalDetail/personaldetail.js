import React from "react"
import {Data} from "../personalDetail/personaldetaildata.js"

class PersonalDetail extends React.Component
{
    state={
        Data:Data,
    }
    render()
    {
        let response =this.state.Data.map((obj,index)=>{
            return(
                <div key={index} className="profileDiv">
                    <div>
                        <img src={obj.pic} alt=""/>
                    </div>
                    <div>
                        <div>
                            <h3>Hi Guys!</h3>
                            <p>Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et rutrum eleifend sollicitudin lacinia justo id turpis. Nec convallis integer. Odio eget duis. Nulla aenean et. Blandit varius sollicitudin. Pellentesque leo primis neque urna magnis. Elit ut sollicitudin. Et est a nam dolores eget itaque sagittis et parturient duis est eleifend sociis rutrum odio viverra integer.</p>
                        </div>
                        <ul>
                            <li>
                                <h1>Name:</h1>
                                <p>{obj.name}</p>
                            </li>
                            <li>
                                <h1>Age:</h1>
                                <p>{obj.age}</p>
                            </li>
                            <li>
                                <h1>Experiance:</h1>
                                <p>{obj.experiance}</p>
                            </li>
                            <li>
                                <h1>Country:</h1>
                                <p>{obj.country}</p>
                            </li>
                            <li>
                                <h1>Location:</h1>
                                <p>{obj.location}</p>
                            </li>
                            <li>
                                <h1>E-mail:</h1>
                                <p> {obj.email}</p>
                            </li>
                            <li>
                                <h1>PhoneNo:</h1>
                                <p>{obj.phone}</p>
                            </li>
                            <li>
                                <h1>Freelance:</h1>
                                <p>{obj.freelance}</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className="downloadResume">{obj.downloadResume}</button>
                        <button className="contactMe">{obj.contact}</button>
                    </div>
                </div>
            )
        })
        return(
        <div>{response}</div>
        )
    }
}

export default PersonalDetail