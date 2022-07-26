import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap; 
`;


export const Row = styled.div`
    .carrinho{
        font-size: 25px;
        margin-top: 15px;
    }
    .totalCarrinho{
        font-size: 13px;
        margin-top: 5px;
        &__text{
            
        }
    }

    .return{
        border-radius: 5px;
        cursor: pointer;
        color: gray;
        width: 100px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    
        &__span{
            margin-left: 5px;

}
    }
`;

export const ListProdsCar = styled.div``;


export const InfoProdsCar = styled.div`
    background-color: white;
    flex-direction: column;
    justify-content: flex-end;
    width: calc(100% - 68%);
    border-radius: 5px;
    height: calc(100vh - 120px);

    .resumoProd{

        padding: 20px;
        
        &__title{
            flex-direction: column;
            justify-content: space-between;
        }
        
        &__sub{
            margin-top: 40px;
            margin-right: 20px;
            flex-direction: row;
            justify-content: space-between;
            display: flex;
        }
        
        &__entrega{
            margin-right: 20px;
            margin-top: 20px;

            display: flex;
            flex-direction: row;
            justify-content: space-between;

        }

        &__separator{
            
            ::after {
                content: '';
                display: block;
                margin: 15px auto;
                border-bottom: 1px solid #41414D;
                opacity: .4;
            }
        }

        &__total{
            margin-right: 20px;
            margin-top: 20px;

            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        &__listPages{
            margin: 20px;
            border-radius: 5px;
            color: white;    
            background-color: #87C244;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

        }

        &__span{
            margin-left: 15px;
        color: white;
        }
    }
    .infoBottom{
        margin: 20px;
        margin-top: 140px;
        justify-content: flex-end;
    }

`;
export const ContainerProds = styled.div`
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 35%);
`;

export const MenuItemLink = styled.a`

    color: gray;
    text-decoration: none;
font-size: 15px;
margin: 5px;
display: flex;
    align-items: center;

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }
`;