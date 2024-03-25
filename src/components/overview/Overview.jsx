import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Description, OverviewWrapper, Title } from './style';
function Overview({ icon, title, description }) {
  return (
    <OverviewWrapper>
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={icon} size="3x" color="#f2545f" />
      </div>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </OverviewWrapper>
  );
}
export default Overview;
