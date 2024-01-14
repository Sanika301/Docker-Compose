import { React, useEffect, useState } from 'react'
import axios from 'axios'
import "../assets/app.css"

export default function Mainpage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState([])
  const Submit = async () => {
    try {
      if (name === '' || email === '') {
        alert('Please fill all the fields')
      }
      else {
        const body = { name, email }
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
        <h2>Create User</h2>
        <div className='user-box'>
          <input
            type="text"
            name="USENAME"
            value={name}
            required
            onChange={(e) => setName(e.target.value)} />
          <label>Name</label>
        </div>
        <div className='user-box'>
          <input
            type="text"
            name="EMAIL"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)} />
          <label>Email</label>
        </div>
        <button type="submit" onClick={Submit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </div>
      <div>
        {data.map((item) => (
          <div className='cardbody' key={item._id}>
            <div className='card'>
              <div>
                <div>
                  <p><b>Name: </b>{item.name}</p>
                  <p><b>Email: </b>{item.email}</p>
                </div>
              </div>
              <button type="submit" onClick={() => Delete(item._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}