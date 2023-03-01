import Button from "../Button/Button";

const EventForm = (): JSX.Element => {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Introduce your email"
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Introduce your password"
        required
      />

      <label htmlFor="image">Image</label>
      <input type="file" id="image" name="image" accept="image/*" />

      <Button text="Sign up" />
    </form>
  );
};

export default EventForm;
