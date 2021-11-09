

export default function ActivityDetails({details}) {
    return (
        <div>
            {
                details.length > 0 ?
                details.map(el => {
                    return (
                        <div className="activitiesDiv" key={el.id}>
                            <h2 key={el.id}>{el.name}</h2>
                            <h2>Difficulty: {el.difficulty}</h2>
                            <h2>{el.duration}</h2>
                            <h2>{el.season}</h2>
                        </div>
                    )
                })
                : <h3>No Activities</h3>
            }
        </div>
    )
}