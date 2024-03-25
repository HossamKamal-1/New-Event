import styled from '@emotion/styled';

function RowList({ items, renderItem }) {
  console.log(items, renderItem);
  const listItems = items.map((item) => renderItem(item));
  return <List>{listItems}</List>;
}
const List = styled('div')`
  label: row-list;
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media (max-width: 992px) {
    & {
      flex-wrap: wrap;
    }
  }
`;
export default RowList;
