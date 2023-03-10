import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import {Provider} from "react-redux";
import store from "./utils/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";

function App() {

  const approuter = createBrowserRouter([
    {
        path: '/',
        element: <Body/>,
        children: [
          {path: '/', element: <MainContainer/>},
          {path: '/watch', element: <Watchpage/>}
        ]
    }
  ])

  return (
    <Provider store={store}>
    <div>
      <Head />
      <RouterProvider router={approuter} />
    </div>
    </Provider>
  );
}

export default App;
