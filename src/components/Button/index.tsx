import { TouchableHighlightProps } from 'react-native';

import { Container, Title, ButtonTypeStyleProps } from './styles';

type Props = TouchableHighlightProps & {
    title: string;
    type?: ButtonTypeStyleProps;
};

export function Button({ title, type = 'PRIMARY', ...rest }: Props){
    return(
        <Container type={type}>
            <Title>
                {title}
            </Title>
        </Container>
    );
}