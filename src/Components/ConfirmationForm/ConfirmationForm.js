import React from 'react'
import { Form, Input} from '../MainPage/styles'

const ConfirmationForm = (props) => {
  return (
    <Form>
        <label>
          Data de nascimento:
          <Input type="date" placeholder="DD/MM/AAAA" value={props.dataNascimento} onChange={props.onChangeDataNascimento}/>
        </label>
        <label>
          Telefone:
          <Input placeholder="(__) _ ____-____" value={props.telefone} onChange={props.onChangeTelefone}/>
        </label>
        {/* <label>
          Gênero:
          <Input type="dropdown"
        </label> */}
      <button onClick={props.sendData2}>Enviar dados</button>
      </Form>
  )
}

export default ConfirmationForm