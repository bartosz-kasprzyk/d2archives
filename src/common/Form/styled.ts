import styled from 'styled-components';
import Backdrop from '../../images/ValueBox/box_background.webp'
import Frame from '../../images/UI/frame.png'
import ButtonLeft from "../../images/ScrollButton/button_left.webp"
import ButtonRight from "../../images/ScrollButton/button_right.webp"
import ButtonMid from "../../images/ScrollButton/button_mid.webp"

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.black.deep};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalWindow = styled.div`
  background: ${({ theme }) => theme.color.black.deep};
  background-image: url(${Backdrop});
  background-repeat: repeat;
  background-size: cover;
  background-position: center center;
  background-blend-mode: overlay;
  border: 10px solid transparent;
  border-image: url(${Frame}) 30 stretch;
  border-radius: 0 10px 10px 0;
  padding: 20px 30px;
  border-radius: 8px;
  max-width: 500px;
  width: 95%;
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    padding: 10px 20px 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-family: 'AvQest', sans-serif;
  margin-top: 10px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.grey.dark};
`;

export const Input = styled.input`
  background: ${({ theme }) => theme.color.black.light};
  background-image: url(${Backdrop});
  background-repeat: repeat;
  background-size: cover;
  background-position: center center;
  background-blend-mode: overlay;
  color: ${({ theme }) => theme.color.white.soft};
  padding: 8px;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.color.black.dark};
  border-radius: 4px;
  transition: filter 0.2s linear;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.black.dark};
    background: ${({ theme }) => theme.color.black.light};
    background-image: url(${Backdrop});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    filter: brightness(1.7);
  }

  &:hover:not(:focus) {
    filter: brightness(1.1);
  }
`;

export const TextArea = styled.textarea`
  background: ${({ theme }) => theme.color.black.light};
  background-image: url(${Backdrop});
  background-repeat: repeat;
  background-size: cover;
  background-position: center center;
  background-blend-mode: overlay;
  color: ${({ theme }) => theme.color.white.soft};
  height: 150px;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid ${({ theme }) => theme.color.black.dark};
  border-radius: 4px;
  resize: vertical;
  transition: filter 0.2s linear;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.color.black.dark};
    background: ${({ theme }) => theme.color.black.light};
    background-image: url(${Backdrop});
    background-repeat: repeat;
    background-size: cover;
    background-position: center center;
    background-blend-mode: overlay;
    filter: brightness(1.7);
  }

  &:hover:not(:focus) {
    filter: brightness(1.1);
  }
`;

export const SubmitButtonWrapper = styled.div`
  margin-top: 15px;
  padding: 3px;
  height: 48px;
  background: 
        url(${ButtonLeft}) left center no-repeat,
        url(${ButtonRight}) right center no-repeat,
        url(${ButtonMid}) center repeat-x;
  background-size: auto 100%, auto 100%, auto 100%;
  border: none;
  filter: brightness(0.9);
  
  @media (max-width: ${({ theme }) => theme.breakpoint.phone}) {
    height: 43px;
  }
`;

export const SubmitButton = styled.button`
  font-family: 'AvQest', sans-serif;
  width: 100%;
  padding: 10px;
  background: 
        url(${ButtonLeft}) left center no-repeat,
        url(${ButtonRight}) right center no-repeat,
        url(${ButtonMid}) center repeat-x;
  background-size: auto 100%, auto 100%, auto 100%;
  color: ${({ theme }) => theme.color.gold};
  border: none;
  font-size: 18px;
  cursor: pointer;
  transition: filter 0.2s linear;

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    transform: scale(0.99, 0.97);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.phonePortrait}) {
    font-size: 15px;
  }
`;