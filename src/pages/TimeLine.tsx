import { FormEvent, KeyboardEvent, useState } from "react";
import { Tweet } from "../components/Tweet";
import { Header } from "../components/header";
import { Separator } from "../components/separator";

export function TimeLine() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'meu primero tweet',
    'Aprendi muito sobre o React depois que vi a MasterClass da RocketSeat, junto com o Diego Fernandes',
    'Aprendendo mais afundo sobre React'
  ])

  function createNewTweet(event: FormEvent) {
    event?.preventDefault()

    if(newTweet.length >= 3) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
      console.log('if')
    }
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main>
      <Header title='Home' />

      <form onSubmit={createNewTweet} className='py-6 px-5 flex-col gap-3'>
        
        <label htmlFor='tweet' className='flex gap-3'>
          <img className='w-12 h-12 rounded-full' src='https://github.com/suavegreen.png' alt='Pedro Caetano' />
          <textarea 
            className='placeholder:text-[#5b7083] flex-1 resize-none mt-3 font-medium text-lg outline-none' 
            id='tweet' 
            placeholder='O que está acontecendo agora?'
            value={newTweet}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }}
          />
          {/* <span>
            {}
          </span> */}
        </label>
        <button className='flex text-white text-base font-black py-3 px-7 rounded-full ml-auto bg-twitter hover:brightness-90' type='submit'>
          Tweet
        </button>
      </form>
      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}
