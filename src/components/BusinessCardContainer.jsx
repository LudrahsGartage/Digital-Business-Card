import React from 'react'
import TextContentBox from './TextContentBox'
import Footer from './Footer'

export default function BusinessCardContainer () {
    return (
        <div className='Card-Container'>
            <img src="https://cdn.discordapp.com/attachments/1023555394431369297/1029057111394635866/Shardul_Puppet.png" className='Display-Picture'/>
            <TextContentBox />
            <Footer />
        </div>
    )
}