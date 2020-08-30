import React from "react"
import {HomeContainerData} from "./homeContainerData.js"

class HomeContainer extends React.Component
{
    state={
        Data:HomeContainerData,
    }
    render() {
        let response=this.state.Data.map((obj,index)=>
        {
            return(
                <div key={index} className="homeContainerText">
                    <p className="thisIS">{obj.firstPara}</p>
                    <h1>{obj.name}</h1>
                    <p className="position">{obj.position}</p>
                    <div className="iconsDiv">
                        <div>{obj.icon1}</div>
                        <div>{obj.icon2}</div>
                        <div>{obj.icon3}</div>
                        <div>{obj.icon4}</div>
                        <div>{obj.icon5}</div>
                    </div>
                    <button>{obj.button}</button>
                </div>
            )

        })
        return(
            <div className="homeContainer">{response}</div>
        )
    }
}

export default HomeContainer