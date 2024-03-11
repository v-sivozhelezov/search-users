import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIdPage } from '../../redux/slices/searchParamsSlice';
import * as S from './Pagination.styles';

export default function Pagination(props) {
    const { pages } = props;
    const dispatch = useDispatch();

    return (
        <S.PagesBox>
            {pages?.map((page) => {
                return (
                    <Link
                        key={page}
                        style={{ color: '#fff' }}
                        to={`/results/${page}`}
                        onClick={() => {
                            dispatch(setIdPage(page));
                            localStorage.setItem('idPage', page);
                        }}
                    >
                        <S.PageItem>{page}</S.PageItem>
                    </Link>
                );
            })}
        </S.PagesBox>
    );
}
