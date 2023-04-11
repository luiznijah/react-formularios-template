import { useState } from "react"


export function useForm(estadoInicial){
    const [form, setForm] = useState(estadoInicial)

  const onChangeForm = (e)=>{
    const {name, value}= e.target
    setForm({...form , [name]: value})
  }
  return {form, onChangeForm}
}