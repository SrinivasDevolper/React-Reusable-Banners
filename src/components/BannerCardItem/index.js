import './index.css'

const BannerCardItem = props => {
  const {containerDetails} = props
  const {headerText, description, className} = containerDetails
  return (
    <li className={className}>
      <div className="list-content">
        <h1 className="list-heading">{headerText}</h1>
        <p className="list-para">{description}</p>
        <button className="list-button">show More</button>
      </div>
    </li>
  )
}
export default BannerCardItem
