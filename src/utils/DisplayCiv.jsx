import React from 'react'

function Card({ label, content }) {
  return (
    <div className='bg-gray-100 rounded border border-gray-500 text-gray-500 p-2 mt-2'>
      <li>
        {label} {content}
      </li>
      {/* <ul>
        {civ.civilization_bonus.map(e => (
          <li key={e}>{e}</li>
        ))}
      </ul> */}
    </div>
  )
}

const DisplayCiv = ({ civ }) => {
  console.log(civ)
  return (
    <div className='w-96 mt-4'>
      {civ.name && (
        <>
          <div className='bg-gray-100 rounded border border-gray-500 text-gray-500 p-2'>
            <h1 className='text-3xl '>{civ.name}</h1>
            <p>Army type: {civ.army_type}</p>

            <ul>
              {civ.civilization_bonus.map(e => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
          <Card label={'Army type:'} content={civ.army_type} />
          <Card label={'Expansion:'} content={civ.expansion} />
          <Card label={'Team bonus:'} content={civ.team_bonus} />
        </>
      )}
    </div>
  )
}

export default DisplayCiv
