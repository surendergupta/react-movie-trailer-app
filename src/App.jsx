import { useCallback, useState } from 'react'
import movieTrailer from 'movie-trailer'
import { ClipLoader } from 'react-spinners';
import SearchBox from './Components/SearchBox/SearchBox';
import { ReactPlayerSimple, ReactPlayerCustomControls} from './Components/ReactPlayerBox/ReactPlayerBox'

import './App.css'
function App() {
  const [searchInput, setSearchInput] = useState('pushpa')
  const [trailerUrl, setTrailerUrl] = useState('')
  const [movieTitle, setMovieTitle] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [useCustomControls, setUseCustomControls] = useState(false);

  const handleSearch = useCallback((e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    if (!searchInput.trim()) {
      setError('Please enter a valid movie name.');
      return;
    }
    movieTrailer(searchInput).then((url) => {
      if (!url) {
        setError('No trailer found')
        setLoading(false)
        return
      }
      setMovieTitle(searchInput)
      setTrailerUrl(url)
      setLoading(false)
    }).catch((err) => {
      setError('Something went wrong. Please try another movie.')
      console.error(err)
      setLoading(false)
    }) 
    setSearchInput('')
  }, [searchInput])
  return (
    <>
      <div className='App'>
        <h1>React Movie Trailer App</h1>
        <SearchBox searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch} />
        <hr />
        <div className='movie-trailer-box'>
        {error && <p className='error-message'>{error}</p>}
        <button className='toggle-button' onClick={() => setUseCustomControls(prev => !prev)}>
          {useCustomControls ? 'Use Default Controls' : 'Use Custom Controls'}
        </button>
        {loading ? (<ClipLoader color="#36d7b7" size={50} />) : trailerUrl && (
          <div className="player-wrapper">
            { 
              useCustomControls 
                ? <ReactPlayerCustomControls trailerUrl={trailerUrl} movieTitle={movieTitle} /> 
                : <ReactPlayerSimple trailerUrl={trailerUrl} movieTitle={movieTitle} />
            }  
          </div>
        )}
        </div>        
        <hr />
        <p>&copy; 2025. Testing React Movie Trailer App</p>
        <hr />
      </div>        
    </>
  )
}

export default App
