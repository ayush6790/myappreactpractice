import React from 'react'
import './postComp.css'

export default function Post({author, body}) {
  return (
    <div className='box'>
    <p>{author}
    <br /> {body}</p>
    </ div>
  )
}

// in place of {author, And body we can simply use props, so if we have 100's of data we dont have to include them in a curly
// and can simply use props.author, and so on }
