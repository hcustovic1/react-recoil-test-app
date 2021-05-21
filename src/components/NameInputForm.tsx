import React from 'react';
import styled from 'styled-components';

export default function NameInputForm() {
    const StyledTextInputContainer = styled.div`
        display: flex;
        flex-direction: column;
    `;

    const StyledTextInputLabel = styled.label`
        font-size: 20px;
        margin: 10px 0px;
    `;

    const StyledStartForm = styled.form`
        display: flex;
    `;

    const StyledTextInput = styled.input`
        padding: 15px;
        font-size: 40px;
    `;

    const StyledSubmitButtonContainer = styled.div`
        display: flex;
        align-items: flex-end;
    `;

    const StyledSubmitButton = styled.button`
        height: 80px;
        padding: 15px;
        border-radius: 50%;
        width: 80px;
        margin-left: 25px;
        cursor: pointer;
    `;

    return (
        <StyledStartForm>
            <StyledTextInputContainer>
                <StyledTextInputLabel htmlFor="name-input">Space Cadet Name</StyledTextInputLabel>
                <StyledTextInput id="name-input" />
            </StyledTextInputContainer>
            <StyledSubmitButtonContainer>
                <StyledSubmitButton>START</StyledSubmitButton>
            </StyledSubmitButtonContainer>
        </StyledStartForm>
    );
}
