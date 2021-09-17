import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
    const [authors, setAuthors] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const history = useHistory();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => setAuthors(res.data))
            .catch((err) => console.log(err));
    }, [trigger]);

    const deleteHandler = (id) => {
        axios
            .delete("http://localhost:8000/api/authors/" + id)
            .then((res) => setTrigger(!trigger))
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <div id = "link">
            <Link to="/new" id = "link">Add new author</Link>
            </div>
            <p id = "para">We have quotes by:</p>
            {authors.map((author, index) => {
                return (
                    <div className = "App">
                        <table>
                            <tr>
                                <th>Author</th>
                                <th>Actions available</th>
                            </tr>
                            <tr>
                                <td>
                                <p key={index}>
                                    &nbsp;
                                    {author.fullName}
                                </p>
                                </td>
                                <td>
                                <button
                                    id = "btn1"
                                    onClick={() =>
                                        history.push(`/edit/${author._id}`)
                                    }
                                >
                                    Edit
                                </button>
                                &nbsp;
                                <button
                                    id = "btn2"
                                    onClick={() => deleteHandler(author._id)}
                                >
                                    Delete
                                </button>
                                </td>
                                
                            </tr>
                        </table>
                    </div>
                );
            })}
        </div>
    );
};

export default Dashboard;
