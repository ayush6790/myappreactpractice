import React from 'react'
import './post.css'

export default function Post({author, body}) {
  return (
    <div className='box'>
    <p className='author'>{author}</p>
    <div className='text'>{body}</div>
    </div>
  )
}

// in place of {author, And body we can simply use props, so if we have 100's of data we dont have to include them in a curly
// and can simply use props.author, and so on }
