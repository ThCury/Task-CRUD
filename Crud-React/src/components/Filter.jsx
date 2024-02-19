
const Filter = (filter, setFilter) => {
    return (
        <div className="filter">
            <h2>Filter by:</h2>

            <div className="filter-option">
                <div>
                    <p>Status</p>
                    <select value={filter} onChange= {(e) => setFilter(e.target.value) } > 
                        <option value="All" >All</option>
                        <option value="Completed">Completed</option>
                        <option value="Incomplete">Incomplete</option>
                    </select>
                </div>

                <div>
                    <p>Alphabetical order:</p>
                    <button>A to Z</button>
                    <button>Z to A</button>
                </div>
            </div>
        </div>
    );
};

export default Filter; 