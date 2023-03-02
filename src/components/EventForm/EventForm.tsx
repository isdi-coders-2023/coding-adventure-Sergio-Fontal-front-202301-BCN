import Button from "../Button/Button";
import EventFormStyled from "./EventFormStyled";

const EventForm = (): JSX.Element => {
  return (
    <EventFormStyled className="event-form">
      <label htmlFor="email">Email</label>
      <input
        className="event-form__field"
        type="email"
        id="email"
        name="email"
        placeholder="Introduce your email"
        autoComplete="off"
        required
      />
      <span className="event-form__email-warning">Email is required</span>

      <label htmlFor="password">Password</label>
      <input
        className="event-form__field-password"
        type="password"
        id="password"
        name="password"
        placeholder="Introduce your password"
        required
      />
      <span className="event-form__password-warning">Password is required</span>

      <label htmlFor="image">Image</label>
      <input
        className="event-form__field-image"
        type="file"
        id="image"
        name="image"
        accept="image/*"
      />

      <Button text="Sign up" />
      <span className="event-form__submit-warning">
        Sorry, something went wrong
      </span>
    </EventFormStyled>
  );
};

export default EventForm;
