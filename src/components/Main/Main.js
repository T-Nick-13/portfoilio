import Card from '../Card/Card';


function Main(props) {



  return (
    <main className="main">

      <div className="column">
        {
          props.column1.map((card) =>{
            return (
              <Card
                link={card.link}
                name={card.name}
                tag={card.tag}
                key={card.name}
                onCardClick={props.handleCardClick}
                onTagClick={props.handleTagClick}

              />
            )
          })
        }
      </div>

      <div className="column">
        {
          props.column2.map((card) =>{
            return (
              <Card
                link={card.link}
                name={card.name}
                tag={card.tag}
                key={card.name}
                onCardClick={props.handleCardClick}
              />
            )
          })
        }
      </div>

      <div className="column">
        {
          props.column3.map((card) =>{
            return (
              <Card
                link={card.link}
                name={card.name}
                tag={card.tag}
                key={card.name}
                onCardClick={props.handleCardClick}
              />
            )
          })
        }
      </div>


    </main>
  );
}


export default Main;
