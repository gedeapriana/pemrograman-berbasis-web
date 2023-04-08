import '../../css/Layouts/jumbotronCard.css';
import 'boxicons';

const JumbotronCard = (props) => {
  return (
      <section className={"jumbotron-card"}>
        <box-icon type="solid" name={props.Icon}></box-icon>
        <h3>{props.Header}</h3>
        <p>{props.Text}</p>
        <a href={props.Link }>Scroll<i className='bx bx-chevron-down' /></a>
      </section>
  )
}

export default JumbotronCard;