//import React from 'react'
import { useState } from 'react'
import "./AdTarf.css"

type Props ={
    onEnter: (tarefName: string) => void
}

const AdTarf = ({ onEnter }:Props) => {

    const [inputText, setInputText] = useState("")
    
    const handleKeyUp = (
        e: KeyboardEvent
    ) => {
        if(e.code === "Enter" && inputText !== ""){

            onEnter(inputText)
            setInputText("")
            }
        }


  return (
    <div className="container">
        <div className="adicionar">+</div>
        <input
        type="text"
        placeholder="Adicionar um nova tarefa"
        value={inputText}
        onChange={e=>setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
        />
    </div>
  )
}

export default AdTarf