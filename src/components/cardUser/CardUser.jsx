import { useGetUserInfoQuery } from '../../API/GitHubAPI';
import * as S from './CardUser.styles';

export default function CardUser(props) {
    const { user, handleCloseCardUser } = props;
    const { data: userInfo, isLoading } = useGetUserInfoQuery(user?.login);
    console.log(userInfo);

    return (
        <S.CardUserBox>
            <S.UserItemImg>
                <S.UserImg src={user?.avatar_url} alt="avatar" />
            </S.UserItemImg>
            <S.ModalBtnClose>
                <button
                    style={{ border: 'none' }}
                    type="button"
                    onClick={handleCloseCardUser}
                >
                    {' '}
                    <S.ModalBtnCloseLine />
                </button>
            </S.ModalBtnClose>
            <S.UserInfo>
                <p>
                    <S.UserTextSpan>Логин:</S.UserTextSpan> {user?.login}
                </p>
                {isLoading ? (
                    'Загрузка...'
                ) : (
                    <>
                        <p>
                            <S.UserTextSpan>Полное имя:</S.UserTextSpan>{' '}
                            {userInfo?.name}
                        </p>
                        <p>
                            <S.UserTextSpan>О себе:</S.UserTextSpan>{' '}
                            {userInfo?.bio}
                        </p>
                        <p>
                            <S.UserTextSpan>Местоположение:</S.UserTextSpan>{' '}
                            {userInfo?.location}
                        </p>
                        <p>
                            <S.UserTextSpan>
                                Количество репозиториев:
                            </S.UserTextSpan>{' '}
                            {userInfo?.public_repos}
                        </p>
                        <p>
                            <S.UserTextSpan>
                                Количество подписчиков:
                            </S.UserTextSpan>{' '}
                            {userInfo?.followers}
                        </p>
                    </>
                )}
                <S.UserLink target="_blank" to={user?.html_url}>
                    <p>Перейти на страницу в GitHub</p>
                </S.UserLink>
            </S.UserInfo>
        </S.CardUserBox>
    );
}
