import Overview from '../../components/overview';
import { OverviewWrapper } from './style';
import { overviewList } from '../../constants/data';
import RowList from '../../components/RowList';
function OverviewSection() {
  return (
    <OverviewWrapper id="overview">
      <div className="container">
        <RowList
          items={overviewList}
          renderItem={(item) => <Overview {...item} key={item.id} />}
        />
      </div>
    </OverviewWrapper>
  );
}
export default OverviewSection;
