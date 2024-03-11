import styled from 'styled-components';

export const CenterBlockHeading = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    text-align: center;
    letter-spacing: -0.8px;
    margin-bottom: 30px;
`;

export const CenterBlockSearchString = styled.div`
    width: 70%;
    border-bottom: 1px solid #4e4e4e;
    margin-bottom: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
`;
export const SearchSVG = styled.svg`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    stroke: #ffffff;
    fill: transparent;
`;

export const SearchText = styled.input`
    -webkit-box-flex: 100;
    -ms-flex-positive: 100;
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 5px 10px 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;

    &:focus {
        outline: none;
    }

    &::-webkit-search-cancel-button {
        -webkit-appearance: none;
    }
`;

export const ClearButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 5px;
    right: 80px;
`;

export const ClearButtonImg = styled.img`
    height: 25px;
    width: 25px;
    cursor: pointer;
`;

export const ErrorMessage = styled.span`
    color: red;
    margin-bottom: 10px;
`;

export const SearchButton = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 1px solid rgb(78, 78, 78);
    padding: 4px 10px;
    border-radius: 5px;
    color: #ffff;

    &:hover {
        background-color: #fff;
        color: rgb(24, 24, 24);
    }
`;

export const SearchSort = styled.form`
    width: 70%;
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 15px;
`;

export const SearchSortLabel = styled.label`
    padding-left: 5px;
`;
