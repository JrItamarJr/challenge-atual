import styled from 'styled-components';

export const Container = styled.div`

`;
export const ContentHeader = styled.div`
flex-direction: roews;
justify-content: space-between;
display: flex;
padding-top: 1px;

`;

export const Filters = styled.div`

    width: 100%;
    font-size: 12px;
    display: flex;
    
    margin-bottom: 30px;

    .tag-filter {
        font-size: 13px;
        font-weight: 500;

        background: none;
        color: black;

        margin: 0 10px;
        
        opacity: .7;
        transition: opacity .3s;

        &:hover {
            opacity: .9;
        }
    }

    .tag-actived::after {
        content: '';
        display: block;
        width: auto;
        margin: 0 auto;
        border-bottom: 2px solid #FFB05C;    
    }
`;

export const Pages = styled.div`
width: 250px;



    .listPages{
        margin-left: 2px;
        border-radius: 5px;
        color: gray;    
        background-color: #E9E9EA;;
        width: 25px;
        height: 25px;
    }
`;
export const ListPage = styled.main`


`;


export const PagesBotton = styled.div`

justify-content: space-between;
display: flex;
width: 100%;
margin-top: 30px;
    .listPages{
        margin-left: 2px;
        border-radius: 5px;
        color: gray;    
        background-color: #E9E9EA;;
        width: 25px;
        height: 25px;
        

        
    }
`;