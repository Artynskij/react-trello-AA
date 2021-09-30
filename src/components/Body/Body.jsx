import React from "react";
import { AddForm } from "../AddForm";
import { Button } from "../common/Button";

export class Body extends React.Component {
    
    state = {
        test: false
    }
  render() {
    return (
        <div>
          <Button title="+ Добавить Колоноку" onClick= {() => this.setState({test:true})}/>
         <AddForm isVisible = {this.state.test} />
        </div>
    
    )
  }
}
