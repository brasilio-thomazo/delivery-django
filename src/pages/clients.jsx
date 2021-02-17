import { TextField, Grid, Button } from '@material-ui/core';
import { Formik, Form, useFormik } from 'formik';
import React from 'react';
import useStyle from '../styles';
import InputMask, { BeforeMaskedStateChangeStates, InputState } from "react-input-mask";
import InputPhone from '../components/InputPhone';


const Clients = () => {

  const stringfyReplace = (k, v) => {
    let value = v;
    if (k === 'phone') {
      value = v.replace(/[^0-9]/g, "")
    }
    return value === '' ? null : value;
  }

  const formik = useFormik({
    initialValues: {
      name: 'Brasilio',
      phone: '11991427221',
      address: 'Rua Cerqueira Cesar',
      addr_number: 197,
      addr_complement: ''
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, stringfyReplace));
    }

  });
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

  const classes = useStyle();
  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Grid container spacing={2} className={classes.formLine}>
        <Grid item xs={12} sm={6}>
          <TextField id="name" label="Nome" onChange={formik.handleChange} value={formik.values.name} required fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputMask mask="(99) 9999-99999" maskChar={null} beforeMaskedValueChange={maskedValueChange} onChange={formik.handleChange} value={formik.values.phone}>
            {(props) => { return <TextField {...props} label="Telefone" id="phone" /> }}
          </InputMask>
        </Grid>
        <Grid item xs={9} sm={9}>
          <TextField id="address" label="Endereço" onChange={formik.handleChange} value={formik.values.address} required fullWidth />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField id="addr_number" type="number" onChange={formik.handleChange} value={formik.values.addr_number} label="Número" required fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField id="addr_complement" label="Complemento" onChange={formik.handleChange} value={formik.values.addr_complement} fullWidth />
        </Grid>
        <Grid item xs>
          <Grid container justify="flex-end" spacing={2}>
            <Button variant="contained" type="submit">Salvar</Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
export default Clients;
