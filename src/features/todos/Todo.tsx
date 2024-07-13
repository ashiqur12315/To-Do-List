import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleTask, deleteTask, updateTask } from './todoSlice';
import { RootState } from '../../app/store';
import { FaEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { FaClipboardList, FaPencilAlt } from "react-icons/fa";


// The Todo component manages and displays the task/todo list
const Todo: React.FC = () => {
    const [task, setTask] = useState('');
    const todoList = useSelector((state: RootState) => state.todoR.todo); // Get todo state from the redux store
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editTask, setEditTask] = useState('');
    const dispatch = useDispatch();

    // Handle adding a new task/todo in the redux store
    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task));
            setTask('');
        }
    };

    // Handle editing state for a specific task/todo
    const handleEditTask = (taskId: number, taskText: string) => {
        setEditingId(taskId);
        setEditTask(taskText);
    };

    // Handle Update task/todo in the redux store
    const handleUpdateTask = () => {
        if (editTask.trim() && editingId !== null) {
            dispatch(updateTask({ id: editingId, text: editTask }));
            setEditingId(null);
            setEditTask('');
        }
    };
    console.log(todoList)

    return (
        <div className="w-full max-w-screen-xl p-4 bg-white rounded shadow-lg border-green-300 border min-h-screen">
            <div className="text-2xl font-bold mb-4 flex gap-4 items-center justify-center bg-green-200 rounded-full">
                <FaPencilAlt className='text-green-600' />
                <span>My To-Do List</span>
                <FaClipboardList className='text-green-600' />
            </div>
            <div className="flex mb-8 gap-3">
                <input
                    type="text"
                    className="flex-grow px-4 py-2 border rounded-r-full rounded-l-full border-green-400 focus:outline-none shadow-lg shadow-green-300"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add your new task here...."
                />
                <button
                    className="px-4 py-2 bg-green-400 text-white rounded-full"
                    onClick={handleAddTask}
                >
                    <b>Add Task</b>
                </button>
            </div>

            {/* List of todo/task */}
            <ul>
                {
                    todoList.map(todo => (
                        <li key={todo.id} className="flex justify-between items-center mb-2 border border-green-200 rounded-full px-3 py-2 border-b-4 ">
                            {
                                editingId === todo.id ?
                                    <>
                                        <input
                                            type="text"
                                            className="flex-grow px-2 py-1 focus:outline-none"
                                            value={editTask}
                                            onChange={(e) => setEditTask(e.target.value)}
                                        />
                                        <button
                                            className="ml-2 px-4 py-1 bg-green-500 text-white rounded-full"
                                            onClick={handleUpdateTask}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="ml-2 px-4 py-1 bg-gray-500 text-white rounded-full"
                                            onClick={() => setEditingId(null)}
                                        >
                                            Cancel
                                        </button>
                                    </>
                                    :
                                    <>
                                        <span
                                            className={`flex-grow ${todo.isCompleted ? 'line-through' : ''}`}
                                        >
                                            {todo.task}
                                        </span>
                                        <button
                                            className="ml-4 border-2  border-green-300 text-green-300 w-6 h-6 rounded-full flex items-center justify-center "
                                            onClick={() => dispatch(toggleTask(todo.id))}
                                        >
                                            {todo.isCompleted ? <FaCheck className='text-green-300' /> : ''}
                                        </button>
                                        <button
                                            className="ml-4 text-blue-500"
                                            onClick={() => handleEditTask(todo.id, todo.task)}
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            className="ml-4 text-red-500"
                                            onClick={() => dispatch(deleteTask(todo.id))}
                                        >
                                            <RiDeleteBinLine />
                                        </button>
                                    </>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Todo;
