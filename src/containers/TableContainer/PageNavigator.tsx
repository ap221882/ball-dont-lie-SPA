import { useAppDispatch } from '../../hooks/typesHooks';
import { Button } from '../../components';
import { FaGreaterThan, FaLessThan } from '../../assets/icons';
import { setPreviousPage, setNextPage } from '../../slices/teamSlice';

type IPageNavigatorProps = {
  currentPage: number;
};

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
      <Button icon={<>{currentPage + 1}</>} />
      <Button icon={<FaGreaterThan onClick={handleNextPage} />} />
    </>
  );
};

export default PageNavigator;
