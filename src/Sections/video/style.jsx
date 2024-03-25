import styled from "@emotion/styled";
import theme from "../../theme-config";

const VideoWrapper = styled('section')`
  label: video-wrapper;
  padding: 80px 0;
`;
const VideoContent = styled('div')`
  label: video-content;
  display: flex;
  gap: 2rem;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
const VideoDescWrapper = styled('div')`
  label: video-desc;
  color: ${theme.gray};
  font-size: 18px;
  flex: 1;
`;
const VideoContainer = styled('div')`
  label: Video-desc;
  flex: 1;
`;
const VideoTitle = styled('span')`
  label: Video-title;
  font-weight: bold;
`;
export {VideoWrapper,VideoContent,VideoDescWrapper,VideoContainer,VideoTitle}