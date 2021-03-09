// import React from "react";

// class App extends React.Component{
//     render(){
//         return <h1>I am class based Component</h1>
//     }
// }

// export default App;

// import React from "react";

// let App = () => {
//     return <h1> i am functional Component</h1>;
// };

// export default App;

// import React , {Fragment} from "react";
// import ClassBasedComponent from "./Components/ClassBasedComponent";
// import FunctionalBasedComponent from "./Components/FunctionalBasedComponent";

// let App = () => {
//     return (
//         <Fragment>
//             <ClassBasedComponent/>
//             <FunctionalBasedComponent/>
//         </Fragment>
//     );
// };

// export default App;

import React , {Fragment} from "react";
import EmpComponent from "./Components/empComponent";
import HeaderComponent from "./Components/HeaderComponent";
import StateExample from "./Components/StateExample";

let app = () => {
    return (
        <Fragment>
            <header>
                <HeaderComponent/>
            </header>
            <main>
                <EmpComponent />
            </main>
        </Fragment>
    )
}
export default app;