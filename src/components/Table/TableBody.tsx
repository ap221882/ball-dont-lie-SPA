import React from 'react';
import { ITeam } from '../../types';

type Props = {
  data: ITeam;
};

const TableBody = ({
  data: { name, city, abbreviation, conference, division },
}: Props) => {
  return (
    <tbody>
      <tr>
        <th>{name}</th>
        <td>{city}</td>
        <td>{abbreviation}</td>
        <td>{conference}</td>
        <td>{division}</td>
      </tr>
    </tbody>
  );
};

export default TableBody;
