import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { getAllCountries } from '../redux/actions';

export default function ActivityForm(){
    let countries = useSelector(state => state.countries);
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllCountries())
        // eslint-disable-next-line
    }, [])
    
    const [input, setInput] = useState({
        name: "",
        duration: "",
        difficulty: "",
        season: "",
        countryId: "",
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="I.e: Surfing" value={input.name} onChange={(e) => handleChange(e)} />
                <label htmlFor="difficulty">Difficulty</label>
                <select name="difficulty" id="difficulty" value={input.difficulty} onChange={(e) => handleChange(e)}>
                    <option value="1">Very Easy</option>
                    <option value="2">Easy</option>
                    <option value="3">Medium</option>
                    <option value="4">Hard</option>
                    <option value="5">Very Hard</option>
                </select>
                <label htmlFor="duration">Duration</label>
                <input type="text" name="duration" id="duration" placeholder="I.e: 2 weeks" value={input.duration} onChange={handleChange} />
                <label htmlFor="season">Season</label>
                <select name="season" id="season" value={input.season} onChange={handleChange} >
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                </select>
                <label htmlFor="countryId">Country</label>
                {/* <input type="text" name="country" id="country" placeholder="I.e: Spain" /> */}
                <select name="countryId" id="country" value={input.countryId} onChange={handleChange} >
                    {
                        countries.map(country => {
                            return <option key={country.id} value={country.id}>{country.name}</option>
                        })
                    }
                </select>
                <button>Add country</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}