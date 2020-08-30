import React from "react"
import{Data} from "./footerData.js"

class Footer extends React.Component
{
    state={
        Data:Data,
    }
    render() {
        let response=this.state.Data.map((obj,index)=>{
            return(
                <div key={index} className="footer">
                    <div>
                        <div>{obj.icon1}</div>
                        <div>{obj.icon2}</div>
                        <div>{obj.icon3}</div>
                        <div>{obj.icon4}</div>
                        <div>{obj.icon5}</div>
                    </div>
                    <div>
                        <p>Copyright © 2018 UIdeck All Right Reserved</p>
                    </div>
                </div>
            )
        })
        return (
            <div>
                {response}
            </div>
        )
    }
}

export  default Footer