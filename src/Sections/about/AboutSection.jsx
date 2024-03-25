import AboutImage from '../../assets/images/about-us.jpg';
import {
  AboutContent,
  AboutDescWrapper,
  AboutImgWraper,
  AboutImgWrapper,
  AboutTitle,
  AboutWrapper,
} from './style';
function AboutSection() {
  return (
    <AboutWrapper id="about">
      <div className="container">
        <AboutContent>
          <AboutDescWrapper>
            <AboutTitle className="about-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, eaque! Consequatur, eaque! Consequatur, eaque!
            </AboutTitle>
            <p className="about-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              suscipit quis praesentium numquam aspernatur? Minima?Lorem ipsum
              dolor sit amet.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              suscipit quis praesentium numquam aspernatur? Min Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
          </AboutDescWrapper>
          <AboutImgWrapper>
            <img src={AboutImage} alt="about-img" width="100%" />
          </AboutImgWrapper>
        </AboutContent>
      </div>
    </AboutWrapper>
  );
}
export default AboutSection;
