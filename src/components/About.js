import User from "./User";
import UserClass from "./UserClass";

const About = () => (
  <div>
    <h1>We are food ordering app</h1>
    <h2>Try our food! Order quickly</h2>

    {/* <User
      name="Adeeba Functional"
      location="Lucknow Functional"
      handle="@adeeba Functional"
    /> */}
    <UserClass
      name="Adeeba Class"
      location="Lucknow Class"
      handle="@adeeba Class"
    />
  </div>
);

export default About;
