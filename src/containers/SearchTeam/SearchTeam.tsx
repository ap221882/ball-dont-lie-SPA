import { useRef, FormEvent } from 'react';

import { filterTeams, getTeams, setPageData } from '../../slices/teamSlice';
import { useAppDispatch } from '../../hooks/typesHooks';
import { Input } from '../../components';
import { StyledAdvancedSearch } from './searchTeam.type';

/**
 * COMPONENT TO IMPLEMENT ADVANCED SEARCH, I.E., SEARCH THROUGH ALL TEAMS
 */

const SearchTeam = () => {
  const dispatch = useAppDispatch();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInputRef.current?.value === '') {
      dispatch(getTeams());
    }
    dispatch(filterTeams(searchInputRef.current?.value as string));
    dispatch(setPageData());
  };

  return (
    <StyledAdvancedSearch onSubmit={handleSubmit}>
      <Input type="text" name="search" ref={searchInputRef} />
    </StyledAdvancedSearch>
  );
};

export default SearchTeam;
