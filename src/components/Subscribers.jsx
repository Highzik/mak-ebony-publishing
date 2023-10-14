import '/src/styles/subscribers.css'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'

const Subscribers = () => {
  const [subscribers, setSubscribers] = useState([
    { id: 1, name: 'isaac', email: 'ajadiisaac99@gmail.com' },
    { id: 2, name: 'olufemi', email: 'osonowoolufemi11@gmail.com' }
  ])
  const handleDelete = (id) => {
    const data = subscribers.filter(subscriber => subscriber.id !== id)
    setSubscribers(data);
  }
  return (
    <div className='container-fluid'>
      <div className="container">
        <h1>Subscribers</h1>
        {subscribers.map((subscriber => (
          <div className="container" key={subscriber.id}>
            <h2>{subscriber.name}</h2>
            <p>{subscriber.email}</p>
            <FaTimes style={defaultColor} onClick={() => handleDelete(subscriber.id)} />
          </div>
        )))}

      </div>
    </div >
  )
}

const defaultColor = {
  color: '#df4a5d',
  cursor: 'pointer',
}

export default Subscribers