import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";

interface TweetProps {
  content: string
}

export function Tweet(props: TweetProps) {
  return(
    <Link to="status" className="py-6 px-5 grid flex-col grid-cols-tweet gap-3 border-y-[1px] border-solid border-[#ebeef0]">
      <img className="h-12 w-12 rounded-full" src="https://github.com/diego3g.png" alt="Diego Fernandes"></img>

      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <strong>Diego Fernandes</strong>
          <span className="text-sm text-[#89a2b8] ">@diegosf</span>
        </div>

        <p className="leading-tight">
          {props.content}
        </p>

        <div className="flex items-center gap-12 mt-3">
          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitter">
            <ChatCircle className="w-5 h-5"/>
            10
          </button>
          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitter">
            <ArrowClockwise className="w-5 h-5"/>
            15
          </button>
          <button className="flex items-center gap-2 text-sm text-[#89a2b8] hover:text-twitter">
            <Heart className="w-5 h-5"/>
            17
          </button>
        </div>
      </div>
    </Link>
  )
}