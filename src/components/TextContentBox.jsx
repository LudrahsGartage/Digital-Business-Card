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
            <p className='Text-Bodies'>I am a rookie Frontend Developer interested in making all sorts of things!</p>
        </div>
        <div id='Interests'>
            <h1 className='Text-Header'>Interests</h1>
            <p className='Text-Bodies'>Animation, Coding, Music, Storytelling. I run a youtube channel and write a blog to share these things. Hope to be an Indie Game Dev someday.</p>
        </div>
    </content>)
}