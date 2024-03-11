import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CardUserBox = styled.div`
    display: flex;
    width: 550px;
    position: absolute;
    top: -10px;
    border-radius: 15px;
    padding: 10px;
    padding-right: 15px;
    background-color: rgb(41 41 41);
    align-items: center;
    gap: 15px;
    z-index: 3;
`;

export const ModalBtnClose = styled.div`
    width: 23px;
    height: 23px;
    position: absolute;
    top: -2px;
    right: -11px;
    z-index: 3;
    cursor: pointer;
`;

export const UserInfo = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
`;

export const ModalBtnCloseLine = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    &::after,
    &::before {
        content: '';
        position: absolute;
        width: 15px;
        height: 2px;
        border-radius: 2px;
        background-color: #d9d9d9;
        top: 47%;
        right: -4px;
    }

    &::before {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    &::after {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
`;

export const UserItemLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
`;

export const UserItemImg = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #f0f0f0;
`;

export const UserImg = styled.img`
    display: block;
    width: 80px;
    border-radius: 50%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const UserLink = styled(NavLink)`
    font-size: 14px;
    color: #a3a1a1;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-decoration: underline;

    &:hover {
        color: #ffffff;
    }
`;

export const UserTextSpan = styled.span`
    color: #a3a1a1;
    font-size: 14px;
`;
