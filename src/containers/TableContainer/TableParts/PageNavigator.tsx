import { useAppDispatch } from '../../../hooks/typesHooks';
import { Button } from '../../../components';
import { FaGreaterThan, FaLessThan } from '../../../assets/icons';
import {
  setPreviousPage,
  setNextPage,
  sortAscendinglyBy,
} from '../../../slices/teamSlice';
import { IPageNavigatorProps } from './tableParts.type';

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
    <>
      <Button icon={<FaLessThan onClick={handlePreviousPage} />} />
      <Button icon={<>{currentPage}</>} />
      <Button
        icon={
          <div onClick={() => dispatch(sortAscendinglyBy({ field: 'name' }))}>
            {'SORT'}
          </div>
        }
      />
      <Button icon={<>{currentPage + 1}</>} />
      <Button icon={<FaGreaterThan onClick={handleNextPage} />} />
    </>
  );
};

export default PageNavigator;
