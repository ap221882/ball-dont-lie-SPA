import React from 'react';
import { useTranslation } from 'react-i18next';

interface IGameInfoHeadingProps {
  fullName?: string;
  totalCount?: number;
}

const GameInfoHeading = ({ fullName, totalCount }: IGameInfoHeadingProps) => {
  const { t } = useTranslation();

  return (
    <article>
      <p>
        {t('drawerLabels.header.label1')}: <span>{fullName}</span>
      </p>
      <p>
        {t('drawerLabels.header.label2')}: <span>{totalCount}</span>
      </p>
    </article>
  );
};

export default GameInfoHeading;
