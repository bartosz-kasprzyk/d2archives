import {
    ModalOverlay,
    ModalWindow,
    FormContainer,
    Label,
    Input,
    TextArea,
    SubmitButton,
    CloseButton,
    SubmitButtonWrapper,
} from './styled';

interface FormProps {
    onClose?: () => void
}

export const Form = ({ onClose }: FormProps) => {
    return (
        <ModalOverlay onClick={onClose}>
            <ModalWindow onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <FormContainer action="https://formspree.io/f/mbljgekl" method="POST">
                    <Label htmlFor="email">Your email (optional):</Label>
                    <Input type="email" name="email" id="email" />

                    <Label htmlFor="message">Feedback:</Label>
                    <TextArea name="message" id="message" required></TextArea>

                    <SubmitButtonWrapper>
                        <SubmitButton type="submit">send feedback</SubmitButton>
                    </SubmitButtonWrapper>
                </FormContainer>
            </ModalWindow>
        </ModalOverlay>
    );
};