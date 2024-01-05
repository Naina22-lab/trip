import Card from './Card'
import './Tours.css'

function Tours({tours,removeTour}){
    return (
        <div className='wrapper'>
            <div>
            <h2>Trip with Nainaa  </h2>
            </div>
            <div className='cardContainer'>
                {
                    tours.map((tour) =>{
                        return <Card {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;