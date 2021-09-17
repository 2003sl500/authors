import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'

const AddNew = () => {

    const [author, setAuthor] = useState('')
    const history = useHistory()



    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/authors/', {fullName: author})
            .then((res) => history.push('/'))
            .catch((err) => console.log(err))
    }

    return (
        <div className = "App box">
            <Link to = "/">Home</Link>
            <p>Add a new author:</p>
            <form onSubmit = {onSubmitHandler}>
                <label htmlFor="name">Name:</label>&nbsp;&nbsp;
                <input type="text" name="name" id="name" onChange={(e) => setAuthor(e.target.value)}/>
                <br/><br/>
                &nbsp;&nbsp;<button type="reset" onClick = {() => history.push('/')}>Cancel</button>&nbsp;&nbsp;
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddNew