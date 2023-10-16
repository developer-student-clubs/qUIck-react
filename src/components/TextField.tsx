import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0;
`;

const Label = styled.label`
    font-weight: bold;
    margin-bottom: 5px;
`;

const Input = styled.input`
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const Required = styled.span`
    content: '*';
    color: red;
    padding-left: 5px;
`;

const Error = styled.div`
    color: red;
    font-size: 12px;
    margin-top: 5px;
`;

interface ITextFieldProps extends React.AllHTMLAttributes<HTMLInputElement> {
    label?: string;
    required?: boolean;
    errorMessages?: string;
}

export const TextField: React.FunctionComponent<ITextFieldProps> = (props) => {
    const { label, required } = props;
    return (
        <Root>
            {label && (
                <Label>
                    {label} {required && <Required>*</Required>}
                </Label>
            )}
            <Input type="text" />
            <Error>{props.errorMessages && <div>{props.errorMessages}</div>}</Error>
        </Root>
    );
};
