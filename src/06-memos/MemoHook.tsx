import { useCallback, useState } from "react"
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from "./ui/MySubtitle"


export const MemoHook = () => {

  const [title, settitle] = useState('My title');

  const [subtitle, setSubtitle] = useState('My subtitle')

  const handleAPI = useCallback(() => {
    console.log('Llamar a mi API, ',subtitle)
  },[subtitle]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
        <MyTitle title={title}/>
        <MySubtitle subtitle={subtitle} callMyAPI={handleAPI}/>

        <button onClick={() => settitle('Hello, '+new Date().getTime())} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
            Cambiar titulo
        </button>
        <button onClick={() => setSubtitle('World')} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
            Cambiar subtitulo
        </button>
    </div>
  )
}
