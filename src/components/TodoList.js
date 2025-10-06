import React, { useState } from 'react';

function TodoList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask(''); // Clear the input field
        }
    };
    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };
    return (

       <>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-black to-black px-4">
    <div className="flex flex-col items-center w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        Liste des tâches
      </h5>

      <div className="flex flex-col items-center w-full">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Ajouter une tâche"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                     focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3 
                     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                     dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <button
          onClick={handleAddTask}
          type="submit"
          className="text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 
                     hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                     dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
                     px-5 py-2.5 w-1/2 text-center transition-all"
        >
          Ajouter
        </button>
      </div>

      <div className="mt-5 w-full max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700">
        <ul className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-center text-gray-500 italic">Aucune tâche pour le moment.</p>
          ) : (
            tasks.map((task, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 dark:bg-gray-700 
                           border border-gray-200 dark:border-gray-600 
                           px-3 py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-gray-800 dark:text-gray-100 font-medium truncate">
                  {task}
                </span>

                <button
                  onClick={() => handleDeleteTask(index)}
                  className="text-white bg-red-600 hover:bg-red-700 
                             focus:ring-4 focus:outline-none focus:ring-red-300 
                             font-medium rounded-lg text-xs px-3 py-1 transition-all"
                >
                  Supprimer
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  </div>
</>

    );
}
export default TodoList;