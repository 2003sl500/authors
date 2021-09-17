import React, {useState, useEffect} from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = (props) => {
    const {id} = useParams()
    const [author, setAuthor] = useState('')
    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => setAuthor(res.data))
            .catch(err => console.log(err))
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, {fullName : author})
            .then(res => {
                return (
                    setAuthor(res.data.fullName),
                    history.push('/')
                )
            })
            .catch(err => console.log(err))
    }

    return (
        <div className = "App box">
            <Link to = "/">Home</Link>
            <p>Edit this author:</p>
            <form onSubmit = {onSubmitHandler}>
                <label htmlFor="name">Name:</label>&nbsp;&nbsp;
                <input type="text" name="name" id="name" onChange={(e) => setAuthor(e.target.value)} value={author.fullName}/>
                <br/><br/>
                &nbsp;&nbsp;<button type="reset" onClick = {() => history.push('/')}>Cancel</button>&nbsp;&nbsp;
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Edit
