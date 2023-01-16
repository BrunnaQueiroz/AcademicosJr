import React, { useState } from 'react'
import image from '../../assets/youtube.png'
import './MeetingRoom.css'
import { Provider } from 'react-redux'
import store from '../../store'
/*import { connect } from 'react-redux'*/
/*import buscaVideo from '../../store/actions/searchAC'*/


export default function MeetingRoom () {
    
    /*connect (null, mapDispatchToProps)*/
    
    const buscaInput = (e) => {
        if(e.keyCode === 13) {
            const valor = e.target.value
            console.log(valor)
            this.props.buscaVideo(valor)
        }
        
    }

    /*const mapDispatchToProps = (dispatch) => {
        return {
            buscaVideo: (params) => dispatch (
                buscaVideo(params)
            ) 
        }
    }*/

    return (
        <div className="allContents">    
            <Provider store={store}>
                <section className="allVideoContents">
                    <div className="welcome">
                        <h1>Welcome, fulano</h1>
                        <p>ID da sala: 123456</p>
                    </div>
                    <div className="search">
                        <input type="text" placeholder='Search' 
                        onKeyDown={buscaInput}/>
                    </div>
                    <div className="videoReproduction">
                    </div>
                    <div className="videosSuggestions">
                        <div className="firstSuggestion">
                            <div className="firstVideo">
                                <img src={image} alt="" width={100}/>
                            </div>
                            <div className="firstTitle">
                                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                            </div>
                        </div>
                        <div className="secondSuggestion">
                            <div className="secondVideo">
                                <img src={image} alt="" width={100}/>
                            </div>
                            <div className="secondTitle">
                                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                            </div>
                        </div>
                        <div className="thirdSuggestion">
                            <div className="thirdVideo">
                                <img src={image} alt="" width={100}/>
                            </div>
                            <div className="thirdTitle">
                                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                            </div>
                        </div>
                        <div className="fourthSuggestion">
                            <div className="fourthVideo">
                                <img src={image} alt="" width={100}/>
                            </div>
                            <div className="fourthTitle">
                                <h2>Lorem ipsum dolor sit amet consectetur</h2>
                            </div>
                        </div>
                    </div>                
                </section>

                <section className="chatBox">
                
                </section>
            </Provider>     
        </div>
    )
}