function Goals() {
  return (
    <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        Goals
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        No goals added yet.
      </p>

      <button className="mt-4 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
        Add Goal
      </button>
    </section>
  )
}

export default Goals