import styled from 'styled-components';

export const Form = styled.form`

    padding: 2% 5%;
    display: flex;
    gap: 25px;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        
    }
`;

export const Label = styled.label`

`;

export const Span = styled.span`
    display: block;
`;

export const Input = styled.input`
  width: 85%;
  padding: 0.5rem;
  border: none;
  border-radius: 0;
  background-color: transparent;
  outline: none;
  border-bottom: 2px solid #222;

  &::placeholder {
    color: #888;
  }

  &:focus {
    border-color: #007bff;

    &::placeholder {
      color: #007bff;
      font-weight: bold;
    }

    + ${Label} {
      color: #007bff;
      font-weight: bold;
    }
  }

  &:not(:placeholder-shown) + ${Label},
  &:focus + ${Label} {
    transform: translateY(-1rem);
    font-size: 0.75rem;
    color: #007bff;
    font-weight: bold;
  }

  &:focus:not(:read-write) {
    outline: none;
    box-shadow: none;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    }
`;

export const Select = styled(Input).attrs({ as: 'select' })`
    width: auto;
    &:hover{
        cursor: pointer;
    }
`;

export const Button = styled.button`
    padding: 10px;
    border: 2px solid #222;
    transition: color 0.2s  cubic-bezier(0.16, 0.88, 0.54, -0.46) 0s, background 0.5s ease-in, transform 0.2s ease-in-out;
    &:active{
        transform: scale(0.98);
    };
    &:hover{
        cursor: pointer;
        background: #222;
        color: whitesmoke;
    };
    
    @media screen and (max-width: 768px) {
        margin-top: 10px;
    }
`;
