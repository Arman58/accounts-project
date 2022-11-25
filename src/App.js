import Accounts from "./components/Accounts";
import {Routes, Route} from "react-router-dom"
import SingleAccount from "./components/Accounts/SingleAccount";

const App = () => (
    <Routes>
        <Route exact path="/accounts" element={<Accounts/>}/>
        <Route exact path='/accounts/:id' element={<SingleAccount/>}/>
    </Routes>
)

export default App;
