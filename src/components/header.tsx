import { Sparkle } from "phosphor-react";

interface HeaderProps {
  title: string
}

export function Header(props: HeaderProps) {
  return(
    <div className='py-6 px-5 flex items-center justify-between text-xl font-bold border-b-[1px] border-[#ebeef0]'>
      {props.title}
      <Sparkle className='text-twitter w-6 h-6' />
    </div>
  )
}