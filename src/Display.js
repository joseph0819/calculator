// import React from "react";
// import { useState } from "react";



// const Display = () => {
//     const [result,setResult] = useState('')

//     const handleClick = (e) => {
//         e.preventDefault()
//         setResult(result.concat(e.target.name))
//     }

//     const handleClearDisplay = (e) => {
//         e.preventDefault()
//         setResult("")
        
//     }

//     const handleBackSpace = (e) => {
//         e.preventDefault()
//         setResult(result.slice(0, result.length-1))
        
//     }

//     const cal = (e) => {
//         e.preventDefault()
//         try {
//             setResult(eval(result).toString()) 
//         } catch (error) {
//             setResult('syntax error')
//         }
         
//     }
//     return ( 
//     <>
//     <div className="wrapper">
//     <div >
//         <input type="text" className="display" value={result} />
//         </div>

//         <div className="keypad">
//             <button onClick={handleClearDisplay} className="clear" id="special-keys">clear</button>
//             <button onClick={handleBackSpace} className="backspace" id="special-keys">c</button>
//             <button onClick={handleClick} name = "/" id="special-keys">&divide;</button>
//             <button onClick={handleClick} name = "7">7</button>
//             <button onClick={handleClick} name = "8">8</button>
//             <button onClick={handleClick} name = "9">9</button>
//             <button onClick={handleClick} name = "*" id="special-keys">&times;</button>
//             <button onClick={handleClick} name = "4">4</button>
//             <button onClick={handleClick} name = "5">5</button>
//             <button onClick={handleClick} name = "6">6</button>
//             <button onClick={handleClick} name = "-" id="special-keys">&ndash;</button>
//             <button onClick={handleClick} name = "1">1</button>
//             <button onClick={handleClick} name = "2">2</button>
//             <button onClick={handleClick} name = "3">3</button>
//             <button onClick={handleClick} name = "+" id="special-keys">+</button>
//             <button onClick={handleClick} name = "0">0</button>
//             <button onClick={handleClick} name = ".">.</button>
//             <button onClick={cal} name = "=" className="equals" id="special-keys">=</button>
            
//         </div>

        

    
//     </div>
//     </> );
// }
 
// export default Display;