import { useRef, FormEvent } from 'react';

import { filterTeams, getTeams, setPageData } from '../../slices/teamSlice';
import { useAppDispatch } from '../../hooks/typesHooks';
import { Input } from '../../components';
import { StyledAdvancedSearch } from './searchTeam.type';
import { AiOutlineSearch } from '../../assets/icons';

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
      <div className="search__bar">
        <div className="search__icon__container">
          <AiOutlineSearch size={32} />
        </div>
        <Input type="text" name="search" ref={searchInputRef} />
      </div>
    </StyledAdvancedSearch>
  );
};

export default SearchTeam;
