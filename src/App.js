import './App.css';
import React, {useState} from 'react'
import axios from 'axios'

const baseUrl = " http://www.reddit.com/r/reactjs.json"

function Vote(post) {
  let score = post.post.post.data.score
  return (
    <>
        <button>Up</button>
        <br/><span>{score}</span><br/>
        <button>Down</button>
    </>
  )
}

function Display(post) {
  return (
    <>
      <div className="container">
        <div className="child">
          <Vote post={post}/>
        </div>
        <div className="child">
          <a href={post.post.data.url}>{post.post.data.title}</a><br/>
          <span>Author: </span><span className="author">{post.post.data.author}</span><br/>
          <span className="comments">{post.post.data.num_comments} Comments</span>
          <span className="not_important"> Share Saved </span>
          <br/><br/>
        </div>
      </div>
    </>
  )
}

function App() {
  const [posts, setting] = useState()

  const handleClick = () => {
    axios.get(baseUrl).then((response) => {
    setting((response.data.data.children).sort((a,b) => { return b.data.score - a.data.score}))
  })
}

  return (
    <div>
      <button onClick={handleClick}>Get Posts</button>
      {posts!== undefined ? (posts.map((post) => (<Display post={post}/>))) : (null)}
    </div>
  );
}

export default App;
