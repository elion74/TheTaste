
import "./Card.css"


type Props = {

  name:string, 
  img:string

}

function Card(props:Props) {
  return (
    <div className="card">


      <h1 className="heading">{props.name}</h1>

      <img className= "image" src = {props.img} />
      

    </div>
  )
}

export default Card