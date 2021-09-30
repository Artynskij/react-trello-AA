import React from "react";
import { Button } from "../common/Button";
import { Input } from "../common/Input";

export class AddForm extends React.Component {
  render() {
    const { isVisible } = this.props;
    if (!isVisible) {
      return null;
    }
    return (
      <div>
        <div>
          <Input />
        </div>
        <div>
          <Button title="Добавить колонку" />
          <Button title="X" />
        </div>
      </div>
    );
  }
}
