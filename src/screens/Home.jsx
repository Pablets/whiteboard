import * as React from 'react'
import DisplayCiv from '../utils/DisplayCiv'
import { ErrorBoundary } from 'react-error-boundary'
import axios from 'axios'
import Autocomplete from './Autocomplete'

function DisplayCivilizations({ civName }) {
  const [state, setState] = React.useState({
    status: 'idle',
    civ: null,
    error: null,
  })

  const { status, civ, error } = state

  React.useEffect(() => {
    if (!civName) return

    setState({ status: 'pending' })
    axios
      .get(
        `https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${civName}`
      )
      .then(function (response) {
        console.log(response.data)
        console.log(response.status)
        console.log(response.statusText)
        console.log(response.headers)
        console.log(response.config)

        const { data } = response
        return data
      })
      .then(civ => {
        setState({ status: 'success', civ })
      })
      .catch(function (error) {
        if (('error response', error.response)) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log('error', error)
          // console.log(error.response.data)
          // console.log(error.response.status)
          // console.log(error.response.headers)
          setState({
            status: 'rejected',
            error,
          })
        } else if (error.request) {
          // console.log('error', error)
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          // console.log('error request', error.request)
          return setState({ status: 'rejected', error })
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
      })
  }, [civName])

  if (status === 'rejected') {
    throw error
  } else if (status === 'idle') {
    return ''
  } else if (status === 'success') {
    return <DisplayCiv civ={civ} />
  } else if (status === 'pending') {
    return <div>Searching...</div>
  } else {
    throw error
  }
}

// function SearchCivilization({ parentSubmitHandler }) {
//   const [civ, setCiv] = React.useState('')

//   function handleSubmit(e) {
//     e.preventDefault()
//     parentSubmitHandler(civ)
//   }

//   return (
//     <div>
//       {/* <form className=' text-white' onSubmit={handleSubmit}>
//         <input
//           className='bg-gray-100 border rounded  px-2 py-1 outline-none text-gray-600'
//           id='search'
//           placeholder='Search for civilizations'
//           value={civ}
//           onChange={e => setCiv(e.target.value)}
//         /> */}

//       {/* <button
//           className='ml-2 bg-green-200 text-gray-700 font-semibold px-2 py-1 rounded'
//           type='submit'>
//           Search
//         </button>
//       </form> */}
//     </div>
//   )
// }

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      {error.response.status && <pre>error code: {error.response.status}</pre>}
      <pre>{error.response.data.message}</pre>
      <button
        className='rounded bg-gray-500 text-gray-100 px-2 py-1 mt-2'
        onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  )
}

const Home = () => {
  const [civName, setCivName] = React.useState('')

  function parentSubmitHandler(newCivName) {
    setCivName(newCivName)
  }

  return (
    <div className='ml-8 mt-24'>
      {/* <SearchCivilization parentSubmitHandler={parentSubmitHandler} /> */}
      <Autocomplete parentSubmitHandler={parentSubmitHandler} />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          setCivName('')
        }}
        resetKeys={civName}>
        <DisplayCivilizations civName={civName} />
      </ErrorBoundary>
    </div>
  )
}

export default Home
