import styled from 'styled-components/macro';
export const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding:165px 45px;
    
`;

export const Title = styled.h1`
    color:white;
    
    font-size: 50px;
    font-weight: 500;
    width:100%;
    margin:auto;
    text-align:center;
   

    @media(max-width: 600px){
        font-size: 35px;
    }
`;

export const SubTitle = styled.h2`
    color:white;
    max-width: 640px;
    font-size: 26px;
    font-weight: normal;
    width:100%;
    margin:auto;
    text-align:center;
    

    @media(max-width: 600px){
        font-size: 20px;
    }

`;