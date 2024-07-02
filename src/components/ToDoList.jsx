function ToDoList() {
    const tasks = [
        { id: 1, text: "Aprender react!", status: "Feito!" },
        { id: 2, text: "Construir um projeto simples!", status: "Feito!" },
        { id: 3, text: "Entender Props e State!", status: "Feito!" },
        { id: 4, text: "Enviar para o GitHub!", status: "A fazer.." },
        { id: 5, text: "Entregar Atividade!", status: "A fazer.." }
    ]
    return (
        <section className="table-container">
            <h1>Lista de Tarefas React!</h1>
            <ul className="table">
                <li className="table-header">
                    <span>ID</span>
                    <span>Tarefa</span>
                    <span>Status</span>
                </li>
                {tasks.map(task => (
                    <li className="table-item" key={task.id}>
                        <span>{task.id}</span>
                        <span>{task.text}</span>
                        <span>{task.status}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ToDoList;