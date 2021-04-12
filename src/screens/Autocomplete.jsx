import React from 'react'

const civilizationsHarcodedList = [
  'Aztecs',
  'Britons',
  'Byzantines',
  'Celts',
  'Chinese',
  'Franks',
  'Goths',
  'Huns',
  'Japanese',
  'Koreans',
  'Mayans',
  'Mongols',
  'Persians',
  'Saracens',
  'Spanish',
  'Teutons',
  'Turks',
  'Vikings',
  'Berbers',
  'Burmese',
  'Ethiopians',
  'Goths',
  'Incas',
  'Indians',
  'Italians',
  'Japanese',
  'Khmer',
  'Magyars',
  'Malians',
  'Portuguese',
  'Slavs',
  'Vietnamese',
]

const Autocomplete = ({ parentSubmitHandler }) => {
  const [state, setState] = React.useState({
    name: '',
    filteredList: '',
  })

  const { name, filteredList } = state

  function handleSubmit(e) {
    e.preventDefault()
    parentSubmitHandler(name)
  }

  React.useEffect(() => {
    if (name && name.length) {
      setState({
        name,
        filteredList: civilizationsHarcodedList.filter(civ =>
          civ.toLowerCase().includes(name)
        ),
      })
    }
  }, [name])

  const isRendered = filteredList && filteredList.length !== 0

  return (
    <div className='my-8'>
      <form className=' text-white' onSubmit={handleSubmit}>
        <input
          className='w-64 bg-gray-100 border rounded  px-2 py-1 outline-none text-gray-600'
          id='search'
          placeholder='Search for civilizations'
          value={state.name}
          onChange={e => setState({ name: e.target.value })}
        />
        <button disabled={name === ''} className={greenButton} type='submit'>
          Search
        </button>
      </form>
      <div>
        <div className={`relative ${!isRendered ? 'overflow-hidden' : null}`}>
          <div className='absolute rounded-b-xl overflow-hidden border'>
            <ul className='bg-gray-100 pb-2' listbox='true'>
              {isRendered &&
                filteredList.map((civ, i) => (
                  <li key={`${civ}${i}`} className='overflow-hidden'>
                    <button
                      className='pl-2 w-64 text-gray-800 text-left hover:bg-gray-200'
                      type='button'
                      id={`${civ}${i}`}
                      aria-selected='true'
                      role='option'
                      onClick={() => setState({ name: civ })}
                      placeholder={civ}
                      defaultValue={civ}>
                      {civ}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const greenButton =
  'ml-2 bg-green-200 text-gray-700 font-semibold px-2 py-1 rounded'

export default Autocomplete
