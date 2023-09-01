
function TripCard({placeImg,placeName,placeNumber}) {
  return (
    <div className="search__place">
    <img src={placeImg} alt="" />
    <div className="place__details">
        <h3>{placeName}</h3>
        <span>{placeNumber}</span>
    </div>
</div>
  )
}

export default TripCard