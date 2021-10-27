


export default function ActivityForm(){
    return (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="I.e: Surfing" />
                <label htmlFor="difficulty">Difficulty</label>
                <select name="difficulty" id="difficulty">
                    <option value="1">Very Easy</option>
                    <option value="2">Easy</option>
                    <option value="3">Medium</option>
                    <option value="4">Hard</option>
                    <option value="5">Very Hard</option>
                </select>
                <label htmlFor="duration">Duration</label>
                <input type="text" name="duration" id="duration" placeholder="I.e: 2 weeks" />
                <label htmlFor="season">Season</label>
                <select name="season" id="season">
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                </select>
                <label htmlFor="country">Country</label>
                <input type="text" name="country" id="country" placeholder="I.e: Spain" />
                <button>Add country</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}