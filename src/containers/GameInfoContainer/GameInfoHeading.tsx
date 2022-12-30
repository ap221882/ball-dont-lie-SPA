import React from 'react';

type Props = {
  fullName?: string;
  totalCount?: number;
};

const GameInfoHeading = ({ fullName, totalCount }: Props) => {
  return (
    <article>
      <p>
        Team full name: <span>{fullName}</span>
      </p>
      <p>
        Total Games in 2021: <span>{totalCount}</span>
      </p>
    </article>
  );
};

export default GameInfoHeading;
