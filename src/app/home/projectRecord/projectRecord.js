import React from "react"
import { Data } from "./projectRecordData.js"

class ProjectRecord extends React.Component
{
    state={
        Data:Data,
    }
    render()
    {
        let response=this.state.Data.map((obj,index)=>{
            return(
                <div key={index} className="projectRecord">
                    <div>
                        <div>
                            <i class="fas fa-briefcase"></i>
                        </div>
                        <div>
                            <h1>{obj.noOfProjects}</h1>
                        </div>
                        <div>
                            <p>{obj.projectWorking}</p>
                        </div>
                    </div>
                    <div>
                        <div><i class="fas fa-check-circle"></i></div>
                        <div>
                            <h1>{obj.noOfProjectDone}</h1>
                        </div>
                        <div>
                            <p>{obj.projectDone}</p>
                        </div>
                    </div>
                    <div>
                        <div><i class="far fa-gem"></i></div>
                        <div>
                            <h1>{obj.award}</h1>
                        </div>
                        <div>
                            <p>{obj.awardRecieved}</p>
                        </div>
                    </div>
                    <div>
                        <div><i class="far fa-heart"></i></div>
                        <div>
                            <h1>{obj.clients}</h1>
                        </div>
                        <div>
                            <p>{obj.happyClients}</p>
                        </div>
                    </div>
                </div>
            )
        })
        return(
                <div>{response}</div>
        )
    }
}
export default ProjectRecord