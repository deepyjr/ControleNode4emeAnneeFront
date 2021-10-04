import React from 'react'
import Cards from '../Components/Cards'

function Home() {
    const [body, setBody] = React.useState();
    const [getValue, setGetValue] = React.useState(true);
    const  myGames = [{
        id: 1,
        name: "Call Of duty",
        editor: "Wow",
        publishedYear: "2010",
        image: "BlackWidow-EndgameProfile.jpg",
        
    },
    {
        id: 51651684,
        name: "Wow",
        editor: "Wow",
        publishedYear:"2010",
        image: "BlackWidow-EndgameProfile.jpg",
        type:"multiplayer"
    },
    {
        id: 3,
        name: "Test",
        editor: "Wow",
        publishedYear: "2010",
        image: "BlackWidow-EndgameProfile.jpg",
        type:"multiplayer"
    }]

    React.useEffect(()=>{
        const buildCards = () => {
                const CardsGame = myGames.map((item, index)=>{
                    return <Cards name={item.name} publishedYear={item.publishedYear}>
                    </Cards>
                })
            setBody(CardsGame)
        }

        if(getValue){
            buildCards();
        }

    },[body])
    return (
        <div>
            {body}
        </div>
    )
}

export default Home
