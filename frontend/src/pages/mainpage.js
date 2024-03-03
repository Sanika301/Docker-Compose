import { React, useEffect, useState } from 'react'
import axios from 'axios'
import "../assets/app.css"

export default function Mainpage() {
  const [task, setName] = useState('')
  const [description, setEmail] = useState('')
  const [data, setData] = useState([])
  const Submit = async () => {
    try {
      if (task === '' || description === '') {
        alert('Please fill all the fields')
      }
      else {
        const body = { task, description }
        await axios.post('http://localhost:5000/insert', body);
        setName('');
        setEmail('');
        getData()
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  const Delete = async (id) => {
    try {
      const body = { id }
      console.log(body)
      const response = await axios.post('http://localhost:5000/delete', body)
      console.log(response)
      getData()
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get')
      setData(response.data)
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <div className='container'>
      <div className='login-box'>
        <h2>Task Manager</h2>
        <div className='user-box'>
          <input
            type="text"
            name="USENAME"
            value={task}
            required
            onChange={(e) => setName(e.target.value)} />
          <label>Task</label>
        </div>
        <div className='user-box'>
          <input
            type="text"
            name="EMAIL"
            value={description}
            required
            onChange={(e) => setEmail(e.target.value)} />
          <label>Description</label>
        </div>
        <button type="submit" onClick={Submit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Add Task
        </button>
      </div>
      <div>
        {data.map((item) => (
          <div className='cardbody' key={item._id}>
            <div className='card'>
              <div>
                <div>
                  <p><b>Task: </b>{item.task}</p>
                  <p><b>Task Description: </b>{item.description}</p>
                </div>
              </div>
              <button type="submit" onClick={() => Delete(item._id)}>
                Task Done
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
