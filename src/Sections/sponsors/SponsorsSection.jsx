import RowList from '../../components/RowList';
import MainHeading from '../../components/mainheading';
import {
  Img,
  SponsorDesc,
  SponsorHeadingWrapper,
  SponsorSectionWrapper,
} from './style';
import { sponsorsList } from '../../constants/data';
function SponsorsSection() {
  return (
    <SponsorSectionWrapper id="sponsors">
      <div className="container">
        <SponsorHeadingWrapper>
          <MainHeading>Our Sponsors</MainHeading>
          <SponsorDesc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            vel.
          </SponsorDesc>
        </SponsorHeadingWrapper>
        <div className="sponsor-content">
          <RowList
            items={sponsorsList}
            renderItem={(item) => (
              <div className="img-wrapper" key={item.id}>
                <Img src={item.img} alt={item.alt} />
              </div>
            )}
          />
        </div>
      </div>
    </SponsorSectionWrapper>
  );
}
export default SponsorsSection;
