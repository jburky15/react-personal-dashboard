import { useState } from 'react'

import Header from './components/Header'
import Stats from './components/Stats'
import TaskList from './components/TaskList'
import Goals from './components/Goals'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Finish React warm-up project',
      priority: 'high',
      completed: false,
    },
    {
      id: 2,
      title: 'Go grocery shopping',
      priority: 'medium',
      completed: false,
    },
    {
      id: 3,
      title: 'Read for 30 minutes',
      priority: 'low',
      completed: true,
    },
  ])

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
        ? { ...task, completed: !task.completed}
        : task
      )
    )
  }

  return (
    <main>
      <Header />
      <Stats tasks={tasks}/>
      <TaskList tasks={tasks} setTasks={toggleTask}/>
      <Goals />
    </main>
  )
}

export default App
