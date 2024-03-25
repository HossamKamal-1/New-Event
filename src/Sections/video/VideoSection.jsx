import {
  VideoContainer,
  VideoContent,
  VideoDescWrapper,
  VideoTitle,
  VideoWrapper,
} from './style';

function VideoSection() {
  return (
    <VideoWrapper className="video-section" id="video">
      <div className="container">
        <VideoContent>
          <VideoDescWrapper>
            <h2 className="video-header">WATCH VIDEO</h2>
            <VideoTitle className="Video-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, eaque! Consequatur, eaque! Consequatur, eaque!
            </VideoTitle>
            <p className="Video-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              suscipit quis praesentium numquam aspernatur? Minima?Lorem ipsum
              dolor sit amet.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              suscipit quis praesentium numquam aspernatur? Min Lorem ipsum
              dolor sit amet consectetur adipisicing elit.
            </p>
          </VideoDescWrapper>
          <VideoContainer>
            <iframe
              title="watch"
              src="https://www.youtube.com/embed/QPO6PfTdYrI"
              width="100%"
              height="345px"
            ></iframe>
          </VideoContainer>
        </VideoContent>
      </div>
    </VideoWrapper>
  );
}
export default VideoSection;
