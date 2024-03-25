import {
  Input,
  IntroDesc1,
  IntroDesc2,
  IntroHeading,
  IntroWrapper,
  RegisterContent,
  RegisterFormWrapper,
  RegisterWrapper,
  SubmitBtn,
} from './style';

function RegisterSection() {
  return (
    <RegisterWrapper id="register">
      <div className="container">
        <RegisterContent>
          <IntroWrapper>
            <IntroHeading>
              Register <span>Here</span>
            </IntroHeading>
            <IntroDesc1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              earum consectetur omnis atque explicabo quis debitis numquam
              quisquam veniam in.
            </IntroDesc1>
            <IntroDesc2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto qui vero est nostrum quisquam ipsam tenetur
              exercitationem delectus nam rem? Nobis libero, expedita maxime
              ullam nesciunt quia perspiciatis vitae veritatis!
            </IntroDesc2>
          </IntroWrapper>
          <RegisterFormWrapper>
            <form>
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Last Name" />
              <Input type="tel" placeholder="Phone Number" />
              <Input type="email" placeholder="Email Address" />
              <SubmitBtn>Register</SubmitBtn>
            </form>
          </RegisterFormWrapper>
        </RegisterContent>
      </div>
    </RegisterWrapper>
  );
}
export default RegisterSection;
