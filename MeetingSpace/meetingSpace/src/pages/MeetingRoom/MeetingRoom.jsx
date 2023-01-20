import React, { useState } from 'react'
import image from '../../assets/youtube.png'
import './MeetingRoom.css'
import { Provider } from 'react-redux'
import store from '../../store'
import video from '../../assets/MotionVideo.mp4'
import { connect } from 'react-redux'
import { buscaVideo } from '../../store/actions/searchAC'
import Chat from '../../services/Chat'



 /*function MeetingRoom () {*/    

 export default function MeetingRoom () {
            
    const buscaInput = (e) => {
        if(e.keyCode === 13) {
            const valor = e.target.value
            console.log(valor)
            this.props.buscaVideo(valor)
        }
        
    }

    const mapDispatchToProps = (dispatch) => {
        
        return {
            buscaVideo: (params) => dispatch (
                buscaVideo(params)
            ) 
        }
        
    }    
    
    return (
        <div className="allContents">    
            <Provider store={store}>
                <div className="welcome">
                    <h1 className='welcomeText'>Welcome!</h1>
                    <p>ID da sala: 123456</p>
                </div>
                <section className="videosandChat">                        
                    <section className="allVideoContents">                        
                        <div className="search">
                            <input type="text" placeholder='Search'
                            /*onKeyDown={(e) => (this.buscaInput(e))}*//>
                        </div>                     
                        <div className="videoReproduction">
                            <video loop autoPlay src={video} height={"100%"}></video>
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
                        <Chat />
                    </section>
                </section>
            </Provider>                
             
        </div> 
    )
    
}


/*export default connect(null, mapDispatchToProps) (MeetingRoom)*/