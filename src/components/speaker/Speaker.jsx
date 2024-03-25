import { SpeakerWrapper } from './style';
function Speaker({ image, imageAlt, jobTitle, name }) {
  return (
    <SpeakerWrapper>
      <img src={image} alt={imageAlt} width="100%" />
      <h3 className="speaker-name">{name}</h3>
      <span className="speaker-job">{jobTitle}</span>
    </SpeakerWrapper>
  );
}
export default Speaker;
