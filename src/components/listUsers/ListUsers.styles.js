import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const UsersItems = styled.ul`
    width: 100%;
`;

export const UserItem = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-right: 12px;
    margin-top: 12px;
`;

export const UserItemLeft = styled.div`
    width: 300px;
    display: flex;
    flex-direction: row;
    gap: 15px;
    align-items: center;
`;

export const UserItemImg = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f0f0f0;
`;

export const UserImg = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
    height: auto;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const UserLink = styled(NavLink)`
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    &:hover {
        text-decoration: underline;
    }
`;

export const ShowMoreButton = styled.button`
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

export const UsersListBox = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 65%;
    width: 70%;
    padding-right: 10px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: rgb(145, 144, 143);
    }

    &::-webkit-scrollbar-thumb {
        background-color: #fff;
        border-radius: 20px;
        border: 3px solid rgb(145, 144, 143);
    }
`;
