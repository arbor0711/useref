import { useRef } from "react";

export default function Counter(){
    let ref = useRef(0);

    function handleClick(){
        ref.current++
        alert('You clicked ' + ref.current + ' times!');
    }

    return (
        <div>
        <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}