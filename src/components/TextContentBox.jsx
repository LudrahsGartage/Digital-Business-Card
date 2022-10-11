import React from 'react'

export default function TextContentBox () {
    return (<content className="text-area">
        <honorifics>
            <h1 id="Name">Shardul Chaturvedi</h1>
            <h3 id="Job">Frontend Developer</h3>
            <h5 id ="Website-Link" href="https://stirring-quokka-96694b.netlify.app/">Founder of Gartage</h5>
        </honorifics>
        <button id="email-button">
            <img src="https://cdn-icons-png.flaticon.com/512/561/561188.png" width="5%"/>
            Email
        </button>
        <div id='About'>
            <h1 className='Text-Header'>About</h1>
            <p className='Text-Bodies'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div id='Interests'>
            <h1 className='Text-Header'>Interests</h1>
            <p className='Text-Bodies'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
    </content>)
}