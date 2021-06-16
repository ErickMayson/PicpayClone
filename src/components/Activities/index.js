import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { 
        Container,
        Header,
        Title,
        Card,
        CardHeader,
        Avatar,
        Description,
        Bold,
        CardBody,
        UserName,
        CardFooter,
        Details,
        Value,
        Divider,
        Date,
        Actions,
        Option,
        OptionLabel,

} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities(){
    return(
        <Container>
            <Header>
                <Title>
                    Atividades
                </Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@Fulaano</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Fulaninho</UserName>
                </CardBody>
                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>

                        <Divider/>
                        <FontAwesome5 name="unlock-alt" size={13} color="rgba(255,255,255,0.4)" />
                        <Date>há 1 hora</Date>
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={20} color="rgba(255,255,255,0.4)" />
                        </Option>
                        <OptionLabel>0</OptionLabel>
                        <Option>
                        <MaterialCommunityIcons name="heart-outline" size={20} color="rgba(255,255,255,0.4)" />
                        </Option>
                        <OptionLabel>0</OptionLabel>
                    </Actions>
                </CardFooter>

            </Card>
        </Container>
    );
}