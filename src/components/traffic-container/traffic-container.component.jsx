import React from 'react'

const TrafficContainer = ({trafficAddresses}) => {
  return (
    <div className='traffic-container'>
      {trafficAddresses.map(trafficAddress => {
        <TrafficCard key={trafficAddress.address} item={trafficAddress} />
      })}
    </div>
  )
}

export default TrafficContainer
