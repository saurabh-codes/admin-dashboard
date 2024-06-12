import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCouch } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
  return (
    <div className='cards'>
        <div className='card-logo'><FontAwesomeIcon icon={props.icon} /></div>
        <div className='card-content-1'>{props.money} </div>
        <div className='card-content-2'>{props.moneyValue} </div>
        <div className='card-content-3'> <span>{props.percentage} </span>{props.time} </div>
    </div>
  )
}

export default Card