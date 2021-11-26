const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <img className="img-card" src={props.img} alt={props.title} />
      <p className="title-card">{props.title}</p>
      <p className="date-card">{props.date}</p>
    </div>
  );
};

export default MovieCard;
