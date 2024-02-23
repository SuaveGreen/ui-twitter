import { FormEvent, KeyboardEvent, useState } from "react"
import { Tweet } from "../components/Tweet"
import { Header } from "../components/header"
import { Separator } from "../components/separator"
import { PaperPlaneRight } from "phosphor-react"

export function Status() {

  const [newResposta, setNewrespostas] = useState('')
  const [respostas, setRespostas] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso!'
  ])

  function createNewResposta(event: FormEvent) {
    event?.preventDefault()

    if(newResposta.length >= 3) {
      setRespostas([newResposta, ...respostas])
      setNewrespostas('')
    }
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if(event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setRespostas([newResposta, ...respostas])
      setNewrespostas('')
    }
  }

  return(
    <main>
      <Header title='Tweet' />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo deserunt pariatur suscipit reiciendis, eligendi incidunt excepturi soluta hic! Fugiat recusandae nobis consequatur! Fuga a quod nesciunt similique error est illum!" />

      <Separator />

      <form onSubmit={createNewResposta} className='py-6 px-5 gap-3 flex items-center'>
        <label htmlFor='tweet' className='flex flex-1 gap-3 items-center'>
          <img className='w-12 h-12 rounded-full' src='https://github.com/suavegreen.png' alt='Pedro Caetano' />
          <textarea 
            className='placeholder:text-[#5b7083] flex-1 resize-none mt-4 font-medium text-lg outline-none bg-transparent' 
            id='tweet' 
            placeholder='Tweet sua resposta' 
            value={newResposta}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewrespostas(event.target.value)
            }}
          />
        </label>

        <button className='sm:flex text-white text-xl ml-[-6px] font-black justify-center p-[.80rem] sm:p-2 rounded-full w-12 h-12 sm:w-32 bg-twitter hover:brightness-90 ' type='button'>
          <PaperPlaneRight className='sm:hidden h-6 w-6' />
          <p className='invisible sm:visible'>
          Tweet
          </p>
        </button>
      </form>

      {respostas.map(pergunta => {
        return <Tweet key={pergunta} content={pergunta} />
      })}
    </main>
  )
}
