function Stats( { tasks }) {
    const totalTasks = tasks.length
    const completedTasks = tasks.filter((task) => task.completed).length
    const openTasks = totalTasks - completedTasks

    return(
        <section>
            <h2>Overview</h2>

            <div>
                <div>
                    <h3>Tasks</h3>
                    <p>{totalTasks}</p>
                </div>

                <div>
                    <h3>Completed</h3>
                    <p>{completedTasks}</p>
                </div>

                <div>
                    <h3>Goals</h3>
                    <p>{openTasks}</p>
                </div>
            </div>
        </section>
    )
}

export default Stats