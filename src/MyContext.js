
// // // import React from 'react';
// // // import { createContext } from "react";

// // // // STEPS:
// // // // 1. create context 
// // // // 2. Provider
// // // // 3. Consumer  provider by useContext()


// // // const MyContext= createContext();

// // // //we need to create a provider function
// // // //ye provider hi delivery deta hai
// // // const MyContextProvider=({children})=>{
    

// // //     return <MyContextProvider value="this is data">
// // //         {children}
// // //     </MyContextProvider>

// // // };

// // // export {MyContext,MyContextProvider};
// // import React from "react";
// // import { useContext,useState,useEffect,createContext } from "react";

// //created the context
// const MyContext=createContext();

// function MyContextProvider({children})
// {
//     const [contextData,setContextData] =useState();
//     return (
//         <MyContextProvider value={{ contextData }} loading={isLoading}>
//         {children}
//       </MyContextProvider>
//     );
// }



// export default MyContext;

