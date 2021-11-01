

export default function Orders(/* {handleSort} */){
    return (
        <div>
            <p>Order By:</p>
            <select>
                <option selected /* onClick={() => handleSort()} */>Name Asc</option>
                <option /* onClick={() => handleSort()} */>Name Desc</option>
                <option /* onClick={() => handleSort()} */>Population Asc</option>
                <option /* onClick={() => handleSort()} */>Population Desc</option>
            </select>
        </div>
    );
}