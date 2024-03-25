import { MainTitle } from './style';

function MainHeading({ children }) {
  const [firstTerm, ...rest] = children.split(' ');
  return (
    <MainTitle>
      {firstTerm} <span>{rest.join(' ')} </span>
    </MainTitle>
  );
}
export default MainHeading;
