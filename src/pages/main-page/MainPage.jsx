import CenterBlockSearch from '../../components/centerBlock/CenterBlockHeader';
import CenterBlockContainer from './MainPage.styled';

function MainPage() {
    return (
        <CenterBlockContainer>
            <CenterBlockSearch heading="Поиск пользователей GitHub" />
        </CenterBlockContainer>
    );
}

export default MainPage;
