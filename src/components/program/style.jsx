import styled from '@emotion/styled';

const ProgramWrapper = styled('div')`
  label: program-wrapper;
  display: flex;
  padding: 10px;
  gap: 3rem;
`;
const ProgramInfoWrapper = styled('div')`
  label: program-info-wrapper;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const ProgramIconWrapper = styled('div')`
  label: program-icon-wrapper;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const ImageWrapper = styled('div')`
  label: speaker-image-wrapper;
  width: 150px;
`;
const Image = styled('img')`
  label: speaker-image;
  border-radius: 50%;
  width: 100%;
`;
export { ProgramWrapper, ImageWrapper, ProgramInfoWrapper, ProgramIconWrapper, Image };
