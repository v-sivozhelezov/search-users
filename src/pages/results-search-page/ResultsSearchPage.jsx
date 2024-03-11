import { useSelector } from 'react-redux';
import CenterBlockSearch from '../../components/centerBlock/CenterBlockHeader';
import { getSearchParams } from '../../redux/slices/searchParamsSlice';
import { useGetResultsSearchQuery } from '../../API/GitHubAPI';
import CenterBlockContainer from '../main-page/MainPage.styled';
import ListUsers from '../../components/listUsers/ListUsers';

function ResultsSearchPage() {
    const { searchQuery, filteringByRepositories } =
        useSelector(getSearchParams);
    const { data: users, isLoading } = useGetResultsSearchQuery({
        searchQuery,
        filteringByRepositories,
    });

    return (
        <>
            <CenterBlockContainer>
                <CenterBlockSearch heading="Результаты поиска" />
                {isLoading ? (
                    <span>Загрузка...</span>
                ) : (
                    <ListUsers users={users} />
                )}
            </CenterBlockContainer>
        </>
    );
}

export default ResultsSearchPage;
