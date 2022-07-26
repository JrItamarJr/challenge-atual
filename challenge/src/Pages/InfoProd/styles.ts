import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const ContainerImage = styled.div`
justify-content: space-between;
display: flex;
    .photo{
    background-size: cover; 
    height: 95%;
    width: 99%;
    border-radius: 7px;
}
`;

export const ContainerProd = styled.div`
flex-direction: column;
justify-content: space-between;
width: calc(100% - 50%);

.cardInfoProd {
    padding-left: 20px;
    color: gray;
    justify-items: start;


  &__infocategory {
      margin-bottom: 15px;
  }
  &__infofrete {
      margin-bottom: 50px;
      font-size: 12px;
  }

&__infotitle{
    margin-bottom: 15px;
    font-size: 40px;
}

&__infoprice{
    color: black;
    margin-bottom: 30px;

}


&__infoDesc{
    font-size: 20px;
    margin-bottom: 12px;
    
}
&__info{
    font-size: 17px;
    margin-bottom: px;
    height: 245px;

}


    &__listPages{
        border-radius: 5px;
        color: white;    
        background-color: #003C5C;;
        width: 100%;
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

`;

export const Row = styled.div`
    .return{
        font-family: 'Century Gothic';
        font-size: small;
        cursor: pointer;
        color: gray;
        width: 100px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    
        &__span{
            margin-left: 5px;

}
    }
`;
