import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from 'react';
import { getAllCountries, createActivity } from '../redux/actions';
import "../styles/form.css"

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
        countryId: [],
    })

    const [country, setCountry] = useState([])

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleCountryId = (e) => {
        const alreadyExists = input.countryId.find(el => el === e.target.value)
        if(!alreadyExists){
            setInput({
                ...input,
                countryId: [...input.countryId, e.target.value]
            })
            const found = countries.find(el => el.id === e.target.value)
            setCountry([...country, found])
        } 
    }

    const handleDeleteCountry = (id) => {
        setInput({
            ...input,
            countryId: input.countryId.filter(el => el !== id)
        })
        let filtered = country.filter(el => el.id !== id)
        setCountry(filtered)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createActivity(input))
        setInput({
            name: "",
            duration: "",
            difficulty: "",
            season: "",
            countryId: [],
        })
        setCountry([])
        alert("Activity Created")
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="parent">
                <div className="div1">
                    <div className="nameForm">
                        <input type="text" name="name" id="name" value={input.name} onChange={(e) => handleChange(e)} required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="durationForm">
                        <input type="text" name="duration" id="duration" value={input.duration} onChange={(e) => handleChange(e)} required/>
                        <label htmlFor="duration">Duration</label>
                    </div>
                </div>
                <div className="div2">
                    <div className="difficultyForm">
                        <label htmlFor="difficulty">Difficulty</label>
                        <select name="difficulty" id="difficulty" value={input.difficulty} onChange={(e) => handleChange(e)} required>
                            <option value="" selected disabled >Select a difficulty</option>
                            <option value="1">Very Easy</option>
                            <option value="2">Easy</option>
                            <option value="3">Medium</option>
                            <option value="4">Hard</option>
                            <option value="5">Very Hard</option>
                        </select>
                    </div>
                    <div className="seasonForm">
                        <label htmlFor="season">Season</label>
                        <select name="season" id="season" value={input.season} onChange={(e) => handleChange(e)} required>
                            <option value="" selected disabled >Select a season</option>
                            <option value="winter">Winter</option>
                            <option value="spring">Spring</option>
                            <option value="summer">Summer</option>
                            <option value="autumn">Autumn</option>
                        </select>
                    </div>
                </div>
                <div className="div3">
                    <div className="countryForm">
                        <label htmlFor="countryId">Country</label>
                        <select name="countryId" value={input.countryId} onChange={(e) => handleCountryId(e)} required>
                            <option value="" selected disabled hidden>Select a Country</option>
                            {
                                countries.map(country => {
                                    return <option key={country.id} value={country.id}>{country.name} ({country.id})</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="div4">
                    <div className="selectedForm">
                        <h3>Selected countries:</h3>
                        {
                            country.length > 0 ?
                            country.map(el => {
                                return (
                                    <div key={el.id}>
                                        <p key={el.id}>{el.name}</p>
                                        <button onClick={() => handleDeleteCountry(el.id)}>X</button>
                                    </div>
                                )
                            })
                            : <></>
                        }
                    </div>
                    <div className="submitForm">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}