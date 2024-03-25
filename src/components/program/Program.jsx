import {
  Image,
  ImageWrapper,
  ProgramIconWrapper,
  ProgramInfoWrapper,
  ProgramWrapper,
} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarked } from '@fortawesome/free-solid-svg-icons';
function Program(props) {
  return (
    <ProgramWrapper>
      <ImageWrapper>
        <Image src={props.programSpeakerImage} alt={props.alt} />
      </ImageWrapper>
      <div>
        <ProgramInfoWrapper>
          <ProgramIconWrapper>
            <FontAwesomeIcon icon={faClock} size="xs" /> {props.programTime}
          </ProgramIconWrapper>
          <ProgramIconWrapper>
            <FontAwesomeIcon icon={faMapMarked} size="xs" />
            {props.programRoomNum}
          </ProgramIconWrapper>
        </ProgramInfoWrapper>
        <h2 className="program-title">{props.programTitle}</h2>
        <span className="program-by">By {props.programSpeakerName}</span>
        <p className="program-desc">{props.programDesc}</p>
      </div>
    </ProgramWrapper>
  );
}
export default Program;
