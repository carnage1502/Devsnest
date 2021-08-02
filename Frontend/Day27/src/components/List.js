import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deletItem } from "../Redux";

function List(props) {

    const dispatch = useDispatch()
    const todos = useSelector((state => state.todo))

    return (
        <div>
            {
                todos.map((todo, index) => (
                    <div key={index}>
                        <h3 style={{ display: 'inline-block' }}> {todo.title} </h3>
                        <button onClick={() => {
                            dispatch(deletItem(index))
                        }}
                        >
                            Delete
                        </button>
                    </div>

                ))
            }

        </div>
    );
}

export default List;