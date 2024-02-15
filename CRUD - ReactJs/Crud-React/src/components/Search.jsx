
const Search = ({search, setSearch}) => {
    return (
        <div className="search-container">

            <h2>Pesquisar</h2>
            <input type="text" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search here..."/>

        </div>
    );
};

export default Search; 