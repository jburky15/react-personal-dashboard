import { useState } from 'react'

function Goals({ goals, addGoal, updateGoal, deleteGoal }) {
  const [title, setTitle] = useState('')
  const [target, setTarget] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (!title.trim() || !target || Number(target) <= 0) {
      return
    }

    addGoal({
      title: title.trim(),
      target: Number(target),
    })

    setTitle('')
    setTarget('')
  }

  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-slate-900">
          Goals
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Track progress toward the things you want to accomplish.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mb-6 flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Goal name..."
          className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />

        <input
          type="number"
          min="1"
          value={target}
          onChange={(event) => setTarget(event.target.value)}
          placeholder="Target"
          className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 sm:w-28"
        />

        <button
          type="submit"
          className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Add Goal
        </button>
      </form>

      {goals.length === 0 ? (
        <p className="rounded-lg bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
          No goals yet.
        </p>
      ) : (
        <div className="space-y-4">
          {goals.map((goal) => {
            const percentage = Math.min(
              Math.round((goal.progress / goal.target) * 100),
              100
            )

            return (
              <div
                key={goal.id}
                className="rounded-lg border border-slate-200 p-4"
              >
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-slate-800">
                      {goal.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {goal.progress} / {goal.target}
                    </p>
                  </div>

                  <button
                    onClick={() => deleteGoal(goal.id)}
                    className="text-sm font-medium text-slate-400 hover:text-red-600"
                  >
                    Delete
                  </button>
                </div>

                <div className="mb-3 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-indigo-600 transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    {percentage}% complete
                  </span>

                  <button
                    onClick={() => updateGoal(goal.id)}
                    disabled={goal.progress >= goal.target}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    + Progress
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Goals