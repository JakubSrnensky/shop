
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faXmark } from '@fortawesome/free-solid-svg-icons'
import Container from '../Container/Container'
import Button from '../Button/Button'
import Title from '../Title/Title'
import Fieldset from '../Fieldset/Fieldset'
import { typeCoffe, continents } from '../../library/constans'
import './Filter.scss'


export default function Filter() {

  const [ filter, setFilter ] = useState<boolean>(false)
  const [ category, setCategory ] = useState<any>([...typeCoffe])
  const [ continent, setContinent ] = useState<any>([...continents])

  const handlerCLickFilterClose = () => {
    setFilter(false)
  }

  const handlerCLickFilterOpen = () => {
    setFilter(true)
  }
  
  const handlerClickCategory = (event: any) => {
    if(event.target.checked){
      setCategory([...category, event.target.name])
    } else {
      setCategory(
        category.filter((filter: string) => filter !== event.target.name)
      )
    }
  }

  const handlerClickContinent = (event: any) => {
    if(event.target.checked){
      setContinent([...continent, event.target.name])
    } else {
      setContinent(
        continent.filter((filter: string) => filter !== event.target.name)
      )
    }
  }

  const priceRange = (event: any) => {
    console.log("range", event.target.value)
  }

  return (
    <React.Fragment>
      <Button onClick={handlerCLickFilterOpen} className="filter-buttonOpen" >
        <FontAwesomeIcon icon={faSort} />
      </Button>

      <div className={`filter ${filter ? 'isActive' : ''}`} >
        <button onClick={handlerCLickFilterClose} className="filter-buttonClose">
          <FontAwesomeIcon icon={faXmark} />
        </button>

        <Container>
          <Title as="h1" alignCenter >Druh kávy</Title>

          <Title as="h3">Filtrace dle druhu kávy</Title>
          <div className="filter-grid">
            {typeCoffe.map((type: any, index: number) =>
              <Fieldset 
                key={index} 
                as="input" 
                type="checkbox"
                className="checkbox"
                name={type}
                label={type}
                onClick={handlerClickCategory}
              />
            )}
          </div>

          <Title as="h3">Filtrace dle země sběru</Title>
          <div className="filter-grid">
            {continents.map((type: any, index: number) => 
              <Fieldset 
                key={index} 
                as="input" 
                type="checkbox"
                className="checkbox"
                name={type}
                label={type}
                onClick={handlerClickContinent}
              />
            )}
          </div>
          
          <Title as="h3">Filtrace dle ceny</Title>
          <input 
            type="range" 
            id="price" 
            name="price" 
            min="0" 
            max="100"
            value="0"
            className="filter-priceRange"
            onChange={priceRange}
          />

          <input 
            type="range" 
            id="price" 
            name="price" 
            min="0" 
            max="100"
            value="100"
            className="filter-priceRange"
            onChange={priceRange}
          />
        </Container>

      </div>
    </React.Fragment>
  )
}