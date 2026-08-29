import Header from "./components/Header"
import Stats from "./components/Stats"
import TaskList from "./components/TaskList"
import Goals from "./components/Goals"

function App() {

  return (
    <main>
      <Header />

      <div>
        <Stats />
        <TaskList />
        <Goals />
      </div>

    </main>
  )
}

export default App
