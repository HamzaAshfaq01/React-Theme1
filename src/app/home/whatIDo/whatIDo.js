import React from "react"
import {Data} from "./whatiDoData.js"
class WhatIDo extends React.Component
{
    state={
        Data:Data
    }
    render()
    {
        let response=this.state.Data.map((obj,index)=>{
            return(
                <div key={index} className="whatIDo">
                    <div>
                        <h1>{obj.whatIDo}</h1>
                    </div>
                    <div>
                        <div>
                            <div>
                                <i class="fas fa-th-large"></i>
                            </div>
                            <div>
                                <h1>{obj.fed}</h1>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.<br/>Suspendisse condi.</p>
                            </div>                      
                        </div>
                        <div>
                            <div>
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <div>
                                <h1>{obj.gd}</h1>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.<br/>Suspendisse condi.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <div>
                                <h1>{obj.bb}</h1>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.<br/>Suspendisse condi.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <i class="fas fa-soap"></i>
                            </div>
                            <div>
                                <h1>{obj.cons}</h1>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.<br/>Suspendisse condi.</p>
                            </div>
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

export default WhatIDo