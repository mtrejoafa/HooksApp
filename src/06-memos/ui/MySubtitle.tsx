import React from "react";

interface Props {
    subtitle: string;
    callMyAPI: () => void;
}

export const MySubtitle = React.memo(({ subtitle,callMyAPI }: Props) => {
    console.log('My suibtitle re-render');
  return <>
    <h6 className="text-2xl font-thin text-white">{subtitle}</h6>
    <button onClick={callMyAPI} className="bg-indigo-400 text-white px-2 py-1 rounded-md cursor-pointer">Llamar a función</button>
  </>
}
)