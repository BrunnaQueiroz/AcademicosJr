import React from "react";
import './Login.css'


export default function Login() {
    return (
        <div className="form">
            <div className="title">Enjoy a meeting</div>   
            <div className="datas">
                <form action="">
                    <input type="text" name='yourName' placeholder="Your Name"/>
                    <input type="text" name="id" placeholder="ID" />
                </form>
            </div>         
        </div>
    )
}
