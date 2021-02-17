import { TextField } from "@material-ui/core";
import React from "react";
import InputMask from "react-input-mask";

const InputPhone = (props) => {
  const maskedValueChange = (_state) => {
    let { value } = _state;

    const newValue = value.replace(/[^0-9]/g, "");

    if (newValue.length === 10) {
      value = newValue.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
    } else if (newValue.length > 10) {
      value = newValue.replace(/^(\d{2})(\d{5})(\d{4})(\d*)$/, "($1) $2-$3");
    }

    return {
      ..._state, value
    };
  };

  return (
    <InputMask mask="(99) 9999-99999" maskChar={null} beforeMaskedValueChange={maskedValueChange}>
      {(props) => { return <TextField {...props} label="Telefone" id="phone" /> }}
    </InputMask>
  );
}

export default InputPhone;