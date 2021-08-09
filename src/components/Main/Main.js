import Card from '../Card/Card';


function Main(props) {

/*   function handlclick(e) {
    debugger

    console.log(pictures.link);
  } */

  return (
    <main className="main">

      <div className="column">
        {
          props.cards.map((card) =>{
            return (
              <Card
                link={card.link}
                name={card.name}
                tag={card.tag}
              />
            )
          })
        }
      </div>

      <div className="column">
        {
          props.cards.map((card) =>{
            return (
              <Card
                link={card.link}
                name={card.name}
                tag={card.tag}
              />
            )
          })
        }
      </div>

      <div className="column">
        {
          props.cards.map((card) =>{
            return (
              <Card
                link={card.link}
                name={card.name}
                tag={card.tag}
              />
            )
          })
        }
      </div>


    </main>
  );
}


export default Main;
