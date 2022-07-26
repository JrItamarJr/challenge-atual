import styled from "styled-components";



export const Container = styled.div`

/*   color variables */
$clr-primary: #d50000;
$clr-primary-hover: #29e6a7;
$clr-primary-dark: #039d69;
$clr-gray100: #f9fbff;
$clr-gray150: #f4f6fb;
$clr-gray200: #eef1f6;
$clr-gray300: #e1e5ee;
$clr-gray400: #767b91;
$clr-gray500: #4f546c;
$clr-gray600: #2a324b;
$clr-gray700: #161d34;

/*   border radius */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
 
}

body {
  font-family: 'Century Gothic', sans-serif;
  margin: 2rem;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
  gap: 2rem;
  justify-content: center;
}

.card {
    overflow: hidden;
    box-shadow: 0 2px 20px $clr-gray300;
    border-radius: 7px;
    display: flex;
    background-color: white;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;


  &__image {
    height: 17rem;
    width: 100%;
    object-fit: cover;
  }
  
  font-family: 'Century Gothic';
  &__title {
    padding: 1rem;
    text-align: start;
    color: #41414D;
    font-size: 15px;
    ::after {
        content: '';
        display: block;
        margin: 5px auto;
        border-bottom: 1px solid #41414D;
        opacity: .4;
    }

  }

  &__description {
    padding: 0 1rem;
    color: #41414D;
font-weight: bold;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:hover &__btn {
    background: $clr-primary;
    color: white;
  }
}


`;
export const ContImg = styled.image`

`;

export const CardBody = styled.div`
    
`;

export const a = styled.image`

`;
export const b = styled.image`

`;

