import { useSelector } from 'react-redux';
import CenterBlockSearch from '../../components/centerBlock/CenterBlockHeader';
import { getSearchParams } from '../../redux/slices/searchParamsSlice';
import { useGetResultsSearchQuery } from '../../API/GitHubAPI';
import CenterBlockContainer from '../main-page/MainPage.styled';
import ListUsers from '../../components/listUsers/ListUsers';
import Pagination from '../../components/pagination/Pagination';

function ResultsSearchPage() {
    const { searchQuery, filteringByRepositories, idPage } =
        useSelector(getSearchParams);
    const {
        data: users,
        isLoading,
        error,
    } = useGetResultsSearchQuery({
        searchQuery,
        filteringByRepositories,
        idPage,
    });

    const MAXResponseSize = 30; // максимальный размер массива в ответе сервера
    const MAXTotalPage = 20; // максимальное количество страниц с результатами поиска
    const totalCountUsers = users?.total_count;

    const totalPages = () => {
        if (Math.ceil(totalCountUsers / MAXResponseSize) > MAXTotalPage) {
            return MAXTotalPage;
        }
        return Math.ceil(totalCountUsers / MAXResponseSize);
    };

    const numberOfPages = Array.from(
        { length: totalPages() },
        (_, index) => index + 1,
    );

    return (
        <>
            <CenterBlockContainer>
                <CenterBlockSearch heading="Результаты поиска" />
                {error?.status === 403 && (
                    <span style={{ color: 'red' }}>
                        Слишком частые запросы, поробуйте позже
                    </span>
                )}
                {isLoading ? (
                    <span>Загрузка...</span>
                ) : (
                    <ListUsers users={users} />
                )}
                <Pagination pages={numberOfPages} />
            </CenterBlockContainer>
        </>
    );
}

export default ResultsSearchPage;
