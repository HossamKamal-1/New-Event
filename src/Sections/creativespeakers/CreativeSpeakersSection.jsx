import { speakersList } from '../../constants/data';
import { CreativeSpeakersWrapper, SpeakersDesc, SpeakersIntro } from './style';
import Speaker from '../../components/speaker';
import SwiperList from '../../components/SwiperList';
import MainHeading from '../../components/mainheading';

function CreativeSpeakersSection() {
  return (
    <CreativeSpeakersWrapper id="speakers">
      <div className="container">
        <SpeakersIntro>
          <MainHeading>Creative Speakers</MainHeading>
          <SpeakersDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, Lorem
            ipsum dolor sit amet. fugiat!
          </SpeakersDesc>
        </SpeakersIntro>
        <SwiperList
          items={speakersList}
          swiperItem={(item) => <Speaker {...item} />}
        />
      </div>
    </CreativeSpeakersWrapper>
  );
}
export default CreativeSpeakersSection;
