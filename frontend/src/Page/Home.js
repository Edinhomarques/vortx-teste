import React, { useState, useEffect } from 'react';
import './Home.css';
import Form from '../components/Form/Form';
import { useInput } from '../components/Form/hooks/useInput';
import axios from 'axios';
import Animation from '../components/Animation/Animation';
import Card from '../components/Card/Card'
const Home = () => {
  const [depot, setDepot] = useInput('')
  const [destination, setDestination] = useInput('')
  const [minutes, setMinutes] = useInput('')
  const [loading, setLoading ] = useState(false)
  const [plans, setPlans] = useState([])

  async function handleApi(event){
    try {  
      event.preventDefault()
      const response = await axios.post('http://localhost:3001/calculatePlan',{depot, destination, minutes})
      const data = response.data
      setLoading(true)
      console.log(data.withoutPlan)
      setPlans([...data])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex">
      <section className="form__section">
        <Form 
         depot={depot} 
        destination={destination} 
        minutes={minutes}
        handleDepot={setDepot}
        handleDestination={setDestination}
        handleMinutes={setMinutes}
        handleApi={(event) => handleApi(event)}/>
      </section>
      <aside className={ loading ? 'list__grid' : ''}>
        {loading ? (plans.map( (plan, index) => {
          return <Card key={index} plan={plan}/>
        })) : <Animation /> }
        
      </aside>
    </div>
  )
}


export default Home