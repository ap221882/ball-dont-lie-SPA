import { useAppDispatch } from '../../../hooks/typesHooks';
import { Button } from '../../../components';
import { FaGreaterThan, FaLessThan } from '../../../assets/icons';
import { setPreviousPage, setNextPage } from '../../../slices/teamSlice';
import { IPageNavigatorProps } from './tableParts.type';
import { StyledPageNavigator } from '../tableContainer.styles';

const PageNavigator = ({ currentPage }: IPageNavigatorProps) => {
  const dispatch = useAppDispatch();

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setPreviousPage());
    }
  };

  const handleNextPage = () => {
    dispatch(setNextPage());
  };

  return (
    <StyledPageNavigator>
      <Button icon={<FaLessThan size={16} onClick={handlePreviousPage} />} />
      <Button icon={<span>{currentPage}</span>} />
      <Button icon={<span>{currentPage + 1}</span>} />
      <Button icon={<FaGreaterThan size={16} onClick={handleNextPage} />} />
    </StyledPageNavigator>
  );
};

export default PageNavigator;
