import { useEffect, useState } from 'react'

import Header from './components/Header'
import Stats from './components/Stats'
import TaskList from './components/TaskList'
import Goals from './components/Goals'

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    return savedTasks ? JSON.parse(savedTasks) : []
  })

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      ))
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

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const [goals, setGoals] = useState(() => {
  const savedGoals = localStorage.getItem('goals')

  return savedGoals ? JSON.parse(savedGoals) : []
  })

  useEffect(() => {
      localStorage.setItem('goals', JSON.stringify(goals))
  }, [goals])

  function addGoal(goalData) {
    const newGoal = {
      id: Date.now(),
      title: goalData.title,
      target: goalData.target,
      progress: 0,
    }

    setGoals([...goals, newGoal])
  }

  function updateGoal(id) {
    setGoals(
      goals.map((goal) => 
        goal.id === id
      ? {
          ...goal, 
          progress: Math.min(goal.progress + 1, goal.target),
        }
      : goal
      )
    )
  }

  function deleteGoal(id) {
    setGoals(goals.filter((goal) => goal.id !== id))
  }

  return (
    <main className='min-h-screen bg-amber-50'>
      <div className='mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8'>
        <Header />
        <Stats tasks={tasks} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          addTask={addTask}
          deleteTask={deleteTask}
        />
        <Goals 
          goals={goals}
          addGoal={addGoal}
          updateGoal={updateGoal}
          deleteGoal={deleteGoal}
        />
      </div>
    </main>
  )
}

export default App
