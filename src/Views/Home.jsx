import React from 'react'
import Cards from '../Components/Cards/Cards'
import "../App.css"
function Home() {
    const [body, setBody] = React.useState();
    const [getValue, setGetValue] = React.useState(true);
    const  myGames = [{
        id: 1,
        name: "Call Of duty",
        editor: "Wow",
        publishedYear: "2010",
        image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/hub/meta-imgs/vg-meta-image.jpg",
        type:"multiplayer"
    },
    {
        id: 51651684,
        name: "World of Warcraft",
        editor: "Blizard",
        publishedYear:"2010",
        image: "https://static1.millenium.org/articles/9/36/96/19/@/1396116-sl-art-article_m-2.jpg",
        type:"multiplayer"
    },
    {
        id: 3,
        name: "New World",
        editor: "Amazon",
        publishedYear: "2010",
        image: "https://img.gaming.gentside.com/s3/frgsg/jeux-video/default_2021-09-30_e8d7c75a-e008-4159-b5a4-c63aec143b32.jpeg",
        type:"multiplayer"
    }]

    React.useEffect(()=>{
        const buildCards = () => {
                const CardsGame = myGames.map((item, index)=>{
                    return <Cards className="card" id={item.id} editor={item.editor} type={item.type} image={item.image} name={item.name} publishedYear={item.publishedYear}>
                    </Cards>
                })
            setBody(CardsGame)
        }
        if(getValue){
            buildCards();
            setGetValue(false);
        }

    },[body])
    return (
        <div className="containerCards">
            {body}
        </div>
    )
}

export default Home
