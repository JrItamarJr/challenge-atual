import styled from 'styled-components';

export const Container = styled.div`
grid-area: CT;
background-color:#F0F0F5;
color: white;


height: calc(100vh - 65px); 
overflow-y:  scroll;

padding: 25px;

::-webkit-scrollbar{
    width: 10px;
}
::-webkit-scrollbar-thumb{
    background-color: transparent;
    border-radius: 10px;
}
::-webkit-scrollbar-track{
    background-color: transparent;
    border-radius: 10px;
}

`;