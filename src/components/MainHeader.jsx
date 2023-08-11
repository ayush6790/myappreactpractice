import React from 'react'
import { MdPostAdd, MdMessage } from 'react-icons/md';
import './mainHeader.css'

export default function MainHeader({ onCreatePost }) {
    return (
        <>
            <header className='header'>
               <div className='wrapper'>
                <h1 className='logo'>
                    <MdMessage />
                    Learning React
                </h1>
                <h3>
                    What you write here disappears when you refresh the page
                </h3>
                </div>
                <p>
                    <button className='button' onClick={onCreatePost}>
                        <MdPostAdd style={{backgroundColor:"transparent"}} size={18} />
                        New Post
                    </button>
                </p>

            </header>
        </>
    )
}
