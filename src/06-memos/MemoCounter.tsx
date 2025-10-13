import { useCounter } from '@/hooks/useCounter'
import { useMemo } from 'react';

const heavyStuff = (iterationNumber:number) => {
    console.time('Heavy_stuff_started');
    for (let index = 0; index < iterationNumber; index++) {
        console.log('Ahi vamos');
    }
    console.timeEnd('Heavy_stuff_finished');

    return `${iterationNumber} Iteraciones realizadas`;
}

export const MemoCounter = () => {

    const { count, increment, decrement } = useCounter(40_000);

    /* const myHeavyStuff = useMemo(() => heavyStuff(count), [count]); */

    return (
        <div className='bg-gradient flex flex-col gap-4'>
            <h1 className='text-2xl font-bold'>Memo useMemo</h1>
            <hr />
            <h4>{count}</h4>
            <h4>{count}</h4>

            <button onClick={increment} className='bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer'>+1</button>
            <button onClick={decrement} className='bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer'>+1</button>
      </div>
  )
}
