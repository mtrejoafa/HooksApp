import { useRef } from "react"

export const FocusScreen = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log(inputRef.current?.value);
    inputRef.current?.select();
  }

  return (
    <div className="bg-gradient flex flex-col gap-5">
      <h1 className="text-white text-2xl font-thin">Focus Screen</h1>
      <input ref={inputRef} type="text" className="bg-white text-black py-2 px4 rounded-md" autoFocus/>
      <button onClick={handleClick} className="bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer">
        Set focus
      </button>
   </div>
  )
}
