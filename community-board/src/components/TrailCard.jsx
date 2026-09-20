function TrailCard({ trail }) {
  const { name, location, distance, type, difficulty, elevation, blurb, mapUrl } =
    trail;

  return (
    <article className={`trail-card difficulty-${difficulty.toLowerCase()}`}>
      <div className="trail-card__top">
        <div className="trail-card__badge">{difficulty}</div>
        <span className="trail-card__location">{location}</span>
      </div>
      <h2 className="trail-card__name">{name}</h2>
      <dl className="trail-card__stats">
        <div>
          <dt>Distance</dt>
          <dd>{distance}</dd>
        </div>
        <div>
          <dt>Type</dt>
          <dd>{type}</dd>
        </div>
        <div>
          <dt>Elevation gain</dt>
          <dd>{elevation}</dd>
        </div>
      </dl>
      <p className="trail-card__blurb">{blurb}</p>
      <a
        className="trail-card__link"
        href={mapUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View trail map ↗
      </a>
    </article>
  );
}

export default TrailCard;
