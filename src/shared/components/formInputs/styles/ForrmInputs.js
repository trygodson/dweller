import styled from 'styled-components/macro';
import { Field } from 'formik';

export const InputField = styled(Field)``;

export const InputCheckBox = styled(Field)``;
export const IconWrapper = styled.div``;
export const Item = styled.div`
  padding: 12px 15px;
  border-radius: 7px;
`;

export const FormGroup = styled.div`
  background-color: #e5ebf0;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  border-radius: 7px;

  &:hover {
    background-color: #d2d6da;
  }
`;
