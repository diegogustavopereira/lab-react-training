import './IdCards.css';

function IdCard(){
    const person = [
        {lastName:'Doe', 
        firstName:'John',
        gender:'male',
        height: 1.78,
        birth: "1992-07-14",
        picture:"https://randomuser.me/api/portraits/men/44.jpg"},

        {lastName:'Delores',
        firstName:'Obrien',
        gender:'female',
        height: 1.72,
        birth: "1988-05-11",
        picture:"https://randomuser.me/api/portraits/women/44.jpg"
        }
    ]
    
    const cards = person.map((person, index) => {
        // let dt = person.birth.DateTimeFormat('en-US', { weekday:'short', month:'short', day:'2-digit', year:'numeric'});
        // console.log(dt);
        
        return (
            <article className='card' key={ index }>
                <section className='picture' alt="picture">
                    <img src = {person.picture} />
                </section>

                <section className='dados'>
                    <p><b>First name: </b>{ person.firstName }</p>
                    <p><b>Last name: </b>{ person.lastName }</p>
                    <p><b>Gender: </b>{ person.gender }</p>
                    <p><b>Height: </b>{ person.height }</p>
                    <p><b>Birth: </b>{ person.birth }</p>
                </section>
            </article>
        )
    }); 

    return (
        <div className='lista'>
            { cards }
        </div>
    )
   
}

export default IdCard;



