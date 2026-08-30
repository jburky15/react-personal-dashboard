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
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function addTask(taskData) {
    const newTask = {
      id: Date.now(),
      title: taskData.title,
      priority: taskData.priority,
      completed: false,
    }

    setTasks([...tasks, newTask])
  }

  return (
    <main>
      <Header />
      <Stats tasks={tasks} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        addTask={addTask}
      />
      <Goals />
    </main>
  )
}

export default App
