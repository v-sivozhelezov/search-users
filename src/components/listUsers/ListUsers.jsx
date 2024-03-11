import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getSearchParams } from '../../redux/slices/searchParamsSlice';
import * as S from './ListUsers.styles';
import CardUser from '../cardUser/CardUser';

export default function ListUsers(props) {
    const users = props?.users?.items;
    const [idShowCardUser, SetIdShowCardUser] = useState('');

    const { filteringByRepositories, ascendingFilter } =
        useSelector(getSearchParams);

    const displayedUsers = () => {
        if (users && filteringByRepositories && ascendingFilter) {
            const sortarr = [...users];
            return sortarr.reverse();
        }
        return users;
    };

    return (
        <S.UsersListBox>
            <S.UsersItems>
                {displayedUsers()?.map((user) => {
                    return (
                        <li key={user?.id}>
                            <S.UserItem>
                                <S.UserLink target="_blank" to={user?.html_url}>
                                    <S.UserItemLeft>
                                        <S.UserItemImg>
                                            <S.UserImg
                                                src={user?.avatar_url}
                                                alt="avatar"
                                            />
                                        </S.UserItemImg>
                                        <p>{user?.login}</p>
                                    </S.UserItemLeft>
                                </S.UserLink>
                                <S.ShowMoreButton
                                    type="button"
                                    onClick={() => SetIdShowCardUser(user?.id)}
                                >
                                    Показать больше информации
                                </S.ShowMoreButton>
                                {idShowCardUser === user.id && (
                                    <CardUser
                                        user={user}
                                        handleCloseCardUser={() => {
                                            SetIdShowCardUser('');
                                        }}
                                    />
                                )}
                            </S.UserItem>
                        </li>
                    );
                })}
            </S.UsersItems>
        </S.UsersListBox>
    );
}
