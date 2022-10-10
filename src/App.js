import './App.css';
import {lazy, Suspense} from "react";
import store from './redux';
import {Provider} from "react-redux";

const UserRouter = lazy(() => import("./routers/user-router"))

function App() {
    return (
        <Provider store={store}>
            <Suspense fallback={<p>Loading....</p>}>
                <UserRouter/>
            </Suspense>
        </Provider>
    );
}

export default App;
