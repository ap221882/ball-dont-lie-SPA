import { StyledTable } from './table.style';

type ITableProps = {};

const Table = (props: ITableProps) => {
  return (
    <StyledTable>
      <table>
        <thead>
          <tr>
            <th>Band</th>
            <th>Year formed</th>
            <th>No. of Albums</th>
            <th>Most famous song</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Buzzcocks</th>
            <td>1976</td>
            <td>9</td>
            <td>Ever fallen in love (with someone you shouldn't've)</td>
          </tr>
          <tr>
            <th>The Clash</th>
            <td>1976</td>
            <td>6</td>
            <td>London Calling</td>
          </tr>
          <tr>
            <th>The Stranglers</th>
            <td>1974</td>
            <td>17</td>
            <td>No More Heroes</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total albums</th>
            <td>77</td>
          </tr>
        </tfoot>
      </table>
    </StyledTable>
  );
};

export default Table;
