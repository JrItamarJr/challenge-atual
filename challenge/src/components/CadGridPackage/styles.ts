import styled, { keyframes } from 'styled-components';

interface ITagProps {
    color: string;
}
const animate = keyframes`

    0% {
        transform: translateX(-100px);
    }
    50%{
    }
    100%{
        transform: translateX(0px);
    }
`;

export const ContainerImg = styled.div`
height: 100px;
width: 100px;
`;

export const ContainerProds = styled.div``;

export const Container = styled.li`

    margin: 20px 0px;

    .card{
        overflow: hidden;
     //   box-shadow: 0 2px 20px $clr-gray300;
        border-radius: 10px;
        display: flex;
        color: gray;
        background-color: white;
        cursor: pointer;
        height: 230px;

        &__image {
            height: 100%;
            width: 38%;
            object-fit: cover;
        }

        &__group{
            padding: 15px 15px;
            display: flex;
            justify-content: space-between;

        }

        &__info{
            font-size: 25px;

        }

        &__description{
            font-size: 15px;
            padding: 15px;
            height: 100px;

        }

        &__remove{
            background-color: transparent;
        }

        &__bottom{
            /* height: 5rem; */
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            padding: 15px;
        }
    }
    
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    align-items: center;
    transition: all .3s;
    position: relative;
    animation: ${animate} .5s ease;
    
    &:hover {
        transform: translateX(10px);
    }

    `;

