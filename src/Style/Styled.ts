import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const ButtonWrapper = styled.div`
    display: grid;
    width: 40%;
    max-width: 450px;
    height: 50%;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    @media screen and (max-width: 1024px) {
        max-width: 400px;
        width: 100%;
        margin: 0 auto;
    }
    @media screen and (max-width: 640px) {
        width: 98%;
        height: 50%
    }
`;

export const Button = styled.button`
    background-color: #333;
    border: none;
    color: #fff;
    font-size: 2rem;
    border-radius: 30px;
    cursor: pointer;
    transition: .5s;
    &:hover {
        background-image: linear-gradient(135deg, #f83600 0%, #f9d423 100%);
    }
    &:active {
        margin-left: 2px;
        margin-top: 2px;
        box-shadow: none;
    }
`;

export const TopButton = styled(Button)`
    font-size: 1.75rem;
`;

export const CalButton = styled(Button)`
    background-color: #f09a36;
`;

export const ZeroButton = styled(Button)`
    grid-column: 1/3;
`;

export const SearchBar = styled.input`
    width: 40%;
    max-width: 425px;
    height: 65px;
    margin-bottom: 25px;
    border-radius: 10px;
    font-size: 32px;
    border: none;
    text-align: right;
    padding-right: 20px;
    &:focus {
        outline: none;
    }
    @media screen and (max-width: 1024px) {
        width: 380px;
    }
    @media screen and (max-width: 480px) {
        max-width: 98%;
        width: 90%;
    }
`;