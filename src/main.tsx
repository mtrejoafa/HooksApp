import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { InstagromApp } from './07/useOptimistic/InstagromApp';
/* import { TrafficLight } from './01-useState/TrefficLight'
import { TrafficLightWithEffect } from './02-useEffect/TrefficLightWithEffect' */
/* import { TrafficLightWithHook } from './02-useEffect/TrefficLightWithHook' */
/* import { PokemonPage } from './03-examples/PokemonPage' */
/* import { FocusScreen } from './04-useRef/FocusScreen' */
/* import { HooksApp } from './HooksApp' */
/* import { TasksApp } from './05-useReducer/TaskApp'; */
/* import { ScrambleWords } from './05-useReducer/ScrambleWords'; */
/* import { MemoHook } from './06-memos/MemoHook'; */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    <InstagromApp />
  </StrictMode>,
)
