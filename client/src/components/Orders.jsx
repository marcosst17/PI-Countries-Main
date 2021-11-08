

export default function Orders({handleComposeSearch}){
    const handleSort = (e) => {
        handleComposeSearch(e)
    }

    return (
        <div>
            <p className="mainText">ORDER BY</p>
            <select onChange={e => handleSort(e)} defaultValue="ASC">
                <option value="name_ASC">Name Asc</option>
                <option value="name_DESC">Name Desc</option>
                <option value="population_ASC">Population Asc</option>
                <option value="population_DESC">Population Desc</option>
            </select>
        </div>
    );
}