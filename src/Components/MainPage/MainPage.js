import React, {useState} from 'react'
import {MainContainer} from './styles'
import NameForm from '../NameForm/NameForm'
import ConfirmationForm from '../ConfirmationForm/ConfirmationForm'

const MainPage = (props) => {
const [name, setName] = useState("")
const [age, setAge] = useState("")
const [email, setEmail] = useState("")
const [formFlow, setFormFlow] = useState(1) //você não precisa mexer neste estado, ele faz parte da lógica da linha 30 do JSX
const [dataNascimento, setDataNascimento] = useState("")
const [telefone, setTelefone] = useState("")

const onChangeName = (event) => {
  setName(event.target.value)
}

const onChangeAge = (event) => {
  setAge(event.target.value)
}

const onChangeEmail = (event) => {
  setEmail(event.target.value)
}

const onChangeDataNascimento = (event) =>{
  setDataNascimento(event.target.value)
}

const onChangeTelefone = (event) =>{
  setTelefone(event.target.value)
}

const sendData = () => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  if(name.length > 10 && name.length <= 30 && age >= 18 && email.includes("@") && email.includes(".com")){
    alert("Próxima etapa!")
    setFormFlow(2)
  }else{
    alert("Informações incorretas!")
    setFormFlow(setFormFlow)
  }
  
}

const sendData2 = () => {
  //aqui deve vir uma verificação para mudar de formulario apenas se todos os requisitos tiverem sido cumpridos
  if(telefone.length === 13 && dataNascimento.length === age){
    alert("Cadastro completo!")
    setFormFlow(2)
  }else{
    alert("Informações incorretas!")
    setFormFlow(setFormFlow)
  }
  
}

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      {formFlow === 1 ? <NameForm
      // insira aqui suas props
      nome={name}
      idade={age}

      email={email}
      data={formFlow}

      onChangeName={onChangeName}
      onChangeAge={onChangeAge}
      onChangeEmail={onChangeEmail}
      sendData={sendData}
      /> : <ConfirmationForm 
      dataNascimento={dataNascimento}
      telefone={telefone}
      onChangeDataNascimento={onChangeDataNascimento}
      onChangeTelefone={onChangeTelefone}
      sendData2={sendData2}
      />}
    </MainContainer>
  )
}

export default MainPage