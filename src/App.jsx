import MyApp from "./Components/index";
import Header from "./Components/Header";
import './index.css';
function App() {
  return (
    <div class="flex w-full space-x-2">
        <div class="flex-1 h-screen">
          <MyApp/>
        </div>
        <div class="h-screen bg-gray-100 w-72">
           <Header/>
        </div>
    </div>
  )
}

export default App;
