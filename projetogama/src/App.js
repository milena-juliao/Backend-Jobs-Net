import React, {useRef} from 'react';
import {Form} from '@unform/web'
import { Scope } from '@unform/core';
import Input from './componentes/form/input'

function App() {
  const formRef = useRef(null);

  function handleSubmit(data){
    if(data.name === ""){
      formRef.current.setErrors({
        nome: 'É obrigatório preencher esse campo!',
        cargo: 'É obrigatório preencher esse campo!',
        nascimento: 'É obrigatório preencher esse campo!',
        estadoCivil: 'É obrigatório preencher esse campo!',
        sexo: 'É obrigatório preencher esse campo!',

        address: {
        endereco: 'É obrigatório preencher esse campo!',
        bairro: 'É obrigatório preencher esse campo!',
        cidade: 'É obrigatório preencher esse campo!',
        cep: 'É obrigatório preencher esse campo!',
        },

        celular: 'É obrigatório preencher esse campo!',
        email: 'É obrigatório preencher esse campo!'
      });
    }

  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="nome"/>
      <Input name="cargo"/>
      <Input name="nascimento"/>
      <Input name="estadoCivil"/>
      <Input name="sexo"/>
      
      <Scope path='address'>
        <Input name="endereco"/>
        <Input name="bairro"/>
        <Input name="cidade"/>
        <Input name="cep"/>
      </Scope>

      <Input name="telefone"/>
      <Input name="celular"/>
      <Input type="email" name="email"/>

      <button type='submit'>Cadstrar</button>
    </Form>
  );
}

export default App;
