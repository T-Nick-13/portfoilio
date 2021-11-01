import Card from '../Card/Card';


function Main(props) {

  return (
    <main className="main">
      {props.pic.map((card) =>{
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
      })}
    </main>
  );

}


export default Main;
