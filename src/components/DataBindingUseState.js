
import { useState } from "react";

// function DataBindingUseState1()
// {

//     const [getValue, setValue]= useState("TV")
//     return(
//         <>

//         <h1>  {getValue}</h1>
      
//         </>
//     );
// }


  // Data Binding fetch data from api

function DataBindingUseState()
{
    const [getValue, setValue] = useState(["Blockchain Learning", "Token Engineering", "Tokenomics"]);

    return(
        <>
        <ol>
            {getValue.map(products=>
                <li key={products}>
                    {products}
                </li>
                )}
        </ol>
        </>
    );
}


export default DataBindingUseState;