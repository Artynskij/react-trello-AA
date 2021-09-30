import React from "react";
import { NewComp } from "./newComp";
import { Modal } from "./common/Modal"
import { Input } from "./common/Input"
import { Button } from "./common/Button"
import { Header } from "./Header"
import { Card } from "./Card"
import { Column } from "./Column"
import { Body } from "./Body"


export class App extends React.Component {
  test = () =>  {
     console.log(<Button />)
  }
  Test() {
   console.log('1111');
 }
 
  render() {
    return (
      
      <div>
        <div>
        <div><Column /></div>
        <div><Header /></div>
        <h1>TODO LIST</h1>
        <div>
          <Input />
          <Button />
        </div>
        <div><Modal /></div>
        <div><NewComp /></div>
        </div>
        <div>
          <h1>Body</h1>
          <Body />
        </div>
      </div>
        
    );
  }
}

