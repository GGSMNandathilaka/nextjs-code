import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const { title, image, address, description } = props.meetup;
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favourites</button>
      </div>
    </li>
  );
}

export default MeetupItem;
