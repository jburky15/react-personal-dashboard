function Stats( { tasks }) {
    const totalTasks = tasks.length
    const completedTasks = tasks.filter((task) => task.completed).length
    const openTasks = totalTasks - completedTasks

    return(
        <section className="mb-8">
            <h2 className="mb-4 text-lg font-semibold text-slate-900">
                Overview
            </h2>

            <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-sm font-medium text-slate-500">
                        Tasks
                    </h3>
                    <p className="mt-2 text-3xl font-bold text-indigo-700">
                        {totalTasks}
                    </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-sm font-medium text-slate-500">
                        Completed
                    </h3>
                    <p className="mt-2 text-3xl font-bold text-emerald-600">
                        {completedTasks}
                    </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-sm font-medium text-slate-500">
                        Incomplete
                    </h3>
                    <p className="mt-2 text-3xl font-bold text-red-600">
                        {openTasks}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Stats