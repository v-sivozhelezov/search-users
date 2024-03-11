/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as S from './CenterBlockHeader.styles';
import {
    getSearchParams,
    setAscendingFilter,
    setFilteringByRepositories,
    setSearchQuery,
} from '../../redux/slices/searchParamsSlice';

export default function CenterBlockHeader(props) {
    const { searchQuery, filteringByRepositories, ascendingFilter } =
        useSelector(getSearchParams);
    const [searchText, setSearchText] = useState(searchQuery);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleExecuteSearch = () => {
        if (!searchText) {
            setError('Введите параметры поиска');
            return;
        }
        setError('');
        localStorage.setItem('searchQuery', searchText);
        localStorage.setItem('idPage', 1);
        dispatch(setSearchQuery(searchText));
        navigate('/results/1');
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleExecuteSearch();
        }
    };

    return (
        <>
            <S.CenterBlockHeading>{props.heading}</S.CenterBlockHeading>
            <S.CenterBlockSearchString>
                <S.SearchSVG>
                    <use xlinkHref="/img/icon/sprite.svg#icon-search" />
                </S.SearchSVG>
                <S.SearchText
                    type="search"
                    placeholder="Введите логин пользователя"
                    name="search"
                    value={searchText}
                    onChange={(event) => {
                        setError('');
                        setSearchText(event.target.value);
                    }}
                    onKeyDown={(event) => handleKeyDown(event)}
                />
                {searchQuery && (
                    <S.ClearButton
                        type="button"
                        onClick={() => setSearchText('')}
                    >
                        <S.ClearButtonImg
                            src="/img/icon/clear.png"
                            alt="clear"
                        />
                    </S.ClearButton>
                )}
                <S.SearchButton
                    type="button"
                    onClick={() => handleExecuteSearch()}
                >
                    Найти
                </S.SearchButton>
            </S.CenterBlockSearchString>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.SearchSort>
                <div>
                    <input
                        id="html"
                        checked={filteringByRepositories}
                        type="checkbox"
                        onChange={(event) => {
                            localStorage.setItem(
                                'filteringByRepositories',
                                event.target.checked,
                            );
                            dispatch(
                                setFilteringByRepositories(
                                    event.target.checked,
                                ),
                            );
                        }}
                    />
                    <S.SearchSortLabel htmlFor="html">
                        Отсортировать по количеству репозиториев
                    </S.SearchSortLabel>
                </div>
                {filteringByRepositories ? (
                    <>
                        <div>
                            <input
                                type="radio"
                                id="decreasing"
                                name="sort"
                                readOnly
                                checked={!ascendingFilter}
                                onClick={() => {
                                    localStorage.setItem(
                                        'ascendingFilter',
                                        false,
                                    );
                                    dispatch(setAscendingFilter(false));
                                }}
                            />
                            <S.SearchSortLabel htmlFor="decreasing">
                                по убыванию
                            </S.SearchSortLabel>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="increase"
                                readOnly
                                checked={ascendingFilter}
                                name="sort"
                                onClick={() => {
                                    localStorage.setItem(
                                        'ascendingFilter',
                                        true,
                                    );
                                    dispatch(setAscendingFilter(true));
                                }}
                            />
                            <S.SearchSortLabel htmlFor="increase">
                                по возрастанию
                            </S.SearchSortLabel>
                        </div>
                    </>
                ) : (
                    ''
                )}
            </S.SearchSort>
        </>
    );
}
