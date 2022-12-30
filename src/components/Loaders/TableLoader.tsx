import React from 'react';
import styled from 'styled-components';

const StyledTableLoader = styled.div`
  min-height: 120vh;
  display: grid;
  place-items: center;
`;

const TableLoader = () => {
  return (
    <StyledTableLoader>
      <div className="loading"></div>;
    </StyledTableLoader>
  );
};

export default TableLoader;
