import styled from 'styled-components'


export const Title = styled.h1`
  font-size: 45px;
  letter-spacing: 4px;
  text-align: center;
  color: rgb(234, 131, 34);
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 30%);
  justify-content: center;
  margin: auto;
  position: relative;
  top: 40px;
  li {
    color: rgb(255, 255, 255);
    margin-bottom: 15px;
    cursor: pointer;
    padding: 7px;
    font-size: 30px;
    text-transform: uppercase;
    span {
      &:hover {
        & ~ div {
          transform: rotate(-5deg) scale(1);
          opacity: 1;
        }
      }
    }
    .img-cont {
      position: absolute;
      width: 300px;
      transform: translateX(100px) scale(0.8);
      opacity: 0;
      transition: 0.6s;
      img {
        border: 1px solid rgb(255, 255, 255, 0.5);
        width: 100%;
        border-radius: 15px;
      }
    }
  }
`;
export const Small = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 30%);
  justify-content: center;
  position: relative;
  top: 40px;
  li {
    color: rgb(255, 255, 255);
    margin-bottom: 15px;
    cursor: pointer;
    padding: 7px;
    font-size: 30px;
    text-transform: uppercase;
    span {
      &:hover {
        & ~ div {
          transform: rotate(-5deg) scale(1);
          opacity: 1;
        }
      }
    }
    .img-cont {
      position: absolute;
      width: 100px;
      transform: translateX(100px) scale(0.8);
      opacity: 0;
      transition: 0.6s;
      img {
        border: 1px solid rgb(255, 255, 255, 0.5);
        width: 100%;
        border-radius: 15px;
      }
    }
  }
`;