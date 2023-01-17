import React, { useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:8080')
socket.on('connect', () => console.log('[IO] Connect => A new connection has been estabilished'))

import './Chat.css'


export default function Chat () {

    const [message, setMessage] = useState('')

    const [messages, setMessages] = useState ([])

    
    /*It serves to prevent the browser from reloading*/
    const handleFormSubmit = event => {
        event.preventDefault()
        if (message.trim()) {
            /*Selects all previous messages, create a new array and
            adding the last message*/
            setMessages([ ...messages, {
                id: 1,
                message
            }])
            setMessage('')
        }
    }

    const handleInputChange = event => 
    setMessage(event.target.value)

    return (
        <div className="Chat">
            <h1>Olá</h1>
            <section className="container">
                <ul className="list">
                    { messages.map(m => (
                        <li className="list__item list__item--mine">
                        {/*Modo BEM (Block Element Modifier de nomear classes*/}
                            <span 
                            className="message message--mine" 
                            key={m.id}>
                                { m.message }
                            </span>
                        </li> 
                    )) }                                                               
                    <form className="form" onSubmit={handleFormSubmit}>
                        <input className="form__field" 
                        placeholder='Type a message'
                        onChange={handleInputChange}
                        type='text'
                        value={message}/>                        
                    </form>       
                </ul>
            </section>
        </div>
        
    )
}

