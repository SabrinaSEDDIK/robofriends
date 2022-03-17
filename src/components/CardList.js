import React, { Component } from "react";
import Card from "./Card";
import { robots } from "../data/robots";

class CardList extends Component{
    render(){
        //const robots = this.props.robots;
        return(
            <div>
                {robots.map((robot,i) => {
                    return <Card key={i} id={robot.id} name={robot.name} username={robot.username} email={robot.email} />
                })}
            </div>
        );
    }
}

export default CardList