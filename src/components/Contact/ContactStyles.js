import styled from 'styled-components';

export const GridContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  max-width: 800px;
  width: 100%;
  background: #02001d;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
  color: #e4dede;
  margin: 60px auto;
  border: 2px groove #3b3b5c;

  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: 640px) {
    padding: 1.8rem;
    margin: 40px 16px;
    border-radius: 12px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Field = styled.input`
  width: 100%;
  height: 48px;
  background: #f9f9f9;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  padding: 0 14px;
  font-size: 15px;
  color: #222;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #4f477a;
    box-shadow: 0 0 0 3px rgba(79, 71, 122, 0.2);
    outline: none;
  }
`;

export const FieldMess = styled.textarea`
  width: 100%;
  min-height: 160px;
  background: #f9f9f9;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  padding: 14px;
  font-size: 15px;
  color: #222;
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #4f477a;
    box-shadow: 0 0 0 3px rgba(79, 71, 122, 0.2);
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 52px;
  background: #4f477a;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.4s ease, transform 0.2s;

  &:hover {
    background: #383061;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;


