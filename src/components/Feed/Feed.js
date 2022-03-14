import React, { useState} from 'react'
import './Feed.css'
import data from './FeedData';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import InputOption from './InputOption'
import Post from './Post';


function Feed() {
    const [input, setInput] = useState('')
    const [posts, setposts] = useState(data)

    

   const sendPost = e => {
       e.preventDefault();
       const newData = {
        name: 'Neel Sayar Deb',
        description: 'Technical Architect at TCS',
        message: input,
        photoUrl: 'https://avatars.githubusercontent.com/u/20562172?v=4'
       }
       setposts([newData,...posts ])
       setInput('')
   }

  return (
    <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" value={input} onChange={e=> setInput(e.target.value)} placeholder='Start a post'/>
                    <button type="submit" onClick={sendPost}>Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title='Photo' color='#70B5f9'/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E'/>
            </div>
        </div>
        {posts && posts.map(({name, description, message, photoUrl})=>(
            <Post 
            key= {message} 
            name={name} 
            description={description} 
            message={message}  
            photoUrl={photoUrl}  />
        ))}
    </div>
  )
}

export default Feed