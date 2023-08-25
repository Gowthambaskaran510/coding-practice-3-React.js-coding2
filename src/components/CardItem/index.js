import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="paragraph">{description}</p>
      <img src={imgUrl} alt={title} className="card-img" />
    </li>
  )
}

export default CardItem
