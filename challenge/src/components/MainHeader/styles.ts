import styled from 'styled-components';

export const Container = styled.div`
    grid-area: MH;
    background-color: #FFFF;
    
    align-items: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding-left: 50px;
    padding-right: 50px;
    border-bottom: gray; 
    justify-content: space-between;

`;

export const Profile = styled.div`
    color: #5D5D6D;
    .title{
        font-size: 35px;
        cursor: pointer;
        font-family: 'Saira Stencil One', sans-serif ;
        height: 50px;
        width: 250px;
        background-color: transparent;
        transform: translateY(-8%);
        
        &__div{
            height: 50px;
            width: 250px;
            background-color: transparent;
            position: absolute;
            box-sizing:border-box;
            left:0px;
            transform: translateY(-110%);
            cursor: pointer;
        }
    }
    `;

export const Welcome = styled.h1``;

export const Controllers = styled.div`
display: flex;

.divInput{
    margin-right: 15px;
    width: 300px;
    padding-left: 10px;
    padding-right: 40px;
    background-color: #F0F0F5;
    border-radius: 5px;
    height: 30px;
    position: relative;
    
    &__inputText{
        color: #5D5D6D;
        font-size: 12px;
        width: 100%;
        height: 100%;
        background-color: transparent;
    }

    &__icon{
        height: 30px;
        width: 30px;
        background-color: transparent;
        padding: 7px;
        position: absolute;
        box-sizing:border-box;
        top:50%;
        left:270px;
        transform: translateY(-50%);
        cursor: pointer;
    }

    &__iconProd{
        background-color: red;
        color: white;
        opacity: .7;

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;

        border-radius: 100px;

        height: 15px;
        width: 15px;
        
        position: absolute;
        box-sizing:border-box;
        top:5.5%;

        left:calc(100% - 60px);
        transform: translateY(-50%);
        cursor: pointer;
        align-items: center;
    }
}

.divButton{
    cursor: pointer;
}


`;