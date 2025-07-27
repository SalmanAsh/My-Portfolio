import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const Name = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '6rem' : '5rem'};
`;

export const Hr = styled.hr`
  width: 500px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #ffffffff;
`;
