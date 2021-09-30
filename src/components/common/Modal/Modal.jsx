import React from "react";
import css from "./style.module.css"
import { Button } from "../Button";
import { Input } from "../Input";


export class Modal extends React.Component {
    render() {
      const { onClose, isVisible, children } = this.props;

        if (!isVisible) {
          return null;
        }

      return (
        <div className={css.bgModal}>
          <div className={css.modal}>
            <div>
              <Input title="NameCard" />
              <Button title='Boom'/>
              <div>{children}</div>
            </div>
            <div></div>
            <div>
              <div className={css.buttonClose} onClick={onClose}>
                X
              </div>
            </div>
          </div>
        </div>
      );
    }
  }