import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
/*import { uuid } from 'uuid'*/
import { v4 as uuid } from 'uuid'
/*import { uuid } from 'uuid/dist/v4'*/
/*import uuid from 'uuidv4/package.json'*/

/*const myId = uuid()*/
const myId = uuid
const socket = io('http://localhost8080')
socket.on('connect', () => console.log('[IO] Connect => A new connection has been estabilished'))

import './Chat.css'


export default function Chat () {

    const [message, setMessage] = useState('')

    const [messages, setMessages] = useState ([])

    useEffect(() => {
        const handleNewMessage = newMessage =>
            setMessages([ ...messages, newMessage])
        socket.on("chat.message", handleNewMessage)
        return () => socket.off("chat.message", handleNewMessage)
    }, [])
    
    /*It serves to prevent the browser from reloading*/
    const handleFormSubmit = event => {
        event.preventDefault()
        if (message.trim()) {
            /*Selects all previous messages, create a new array and
            adding the last message*/
            socket.emit('chat.message', {
                id: 1,
                message
            })
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
                        <li 
                            className="list__item list__item--mine"
                            key={m.id}>
                            {/*Modo BEM (Block Element Modifier de nomear classes*/}
                            <span 
                            className="message message--mine" >
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

