import './SearchBox.css'

const SearchBox = ({searchInput, setSearchInput, handleSearch}) => {
  return (
    <div className='Search-box'>
        <label className='search-label' htmlFor='search'>Search: </label>
        <input 
        type='text' 
        id='search'
        className='search-input'
        value={searchInput} 
        onChange={(e) => {
            setSearchInput(e.target.value)
        }}
        placeholder='Search for a movie' 
        />
        <button 
        type='submit' 
        className='search-button'
        disabled={!searchInput.trim()}
        onClick={(e) => handleSearch(e)}
        >Search</button>
    </div>
  )
}

export default SearchBox
