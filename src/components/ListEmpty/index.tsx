import { Container, Massage } from './styles';

type Props = {
    message: string;
}

export function ListEmpty({ message }: Props){
    return(
        <Container>
            <Massage>
                {message}
            </Massage>
        </Container>
    );
}