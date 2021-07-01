import React, { useState } from 'react';

import { Feather, FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { Switch } from 'react-native';


import { 
    Wrapper,
    Header,
    HeaderContainer,
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketButton,
    UseTicketLabel,
    UseTicketContainer,

} from './styles';

import creditCard from '../../images/credit-card.png';


export default function Wallet() {
    const [isVisible, setIsVisible] = useState(true);
    const [useBalance, setUseBalance] = useState(true);

    function handleToggleVisibitity() {
        setIsVisible((prevState) => !prevState);
    }

    function handleToggleUseBalance(){
        setUseBalance((prevState) => !prevState);
    }

    return(
        <Wrapper>
            <Header 
            colors={
                useBalance ? ['#52e78c', '#1ab563']
                : ['#d3d3d3','#868686']
            }>
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>
                            R$ <Bold>{isVisible ? '0,00' : '----'} </Bold>
                        </Value>
                    <EyeButton onPress= {handleToggleVisibitity}>
                        <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="white" />
                    </EyeButton>
                    </BalanceContainer>
                    <Info>
                       Seu saldo está rendendo 100% do CDI
                    </Info>
                    <Actions>
                        <Action>
                            <FontAwesome5 name="money-bill-wave" size={24} color="white" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <MaterialCommunityIcons name="bank-minus" size={28} color="white" />    
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>
                    </Actions>
                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>Usar Saldo ao pagar</UseBalanceTitle>
                <Switch
                    value={useBalance}
                    onValueChange={handleToggleUseBalance}
                /> 
            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle> Forma de pagamento</PaymentMethodsTitle>
                <Card>
                    <CardBody>
                    <CardDetails>
                         <CardTitle>
                            Cadastre seu cartão de credito
                        </CardTitle>
                            <CardInfo> 
                                Cadastre seu cartão de credito 
                                para poder fazer pagamentos mesmo
                                quando não tiver saldo no seu PicPay
                            </CardInfo>
                    </CardDetails>
                  <Img source = {creditCard} resizeMode='contain'/>
                </CardBody>
                <AddButton>
                    <AntDesign name="pluscircleo" size={30} color="#0DB060" />
                    <AddLabel>Adicionar Cartão de crédito</AddLabel>
                </AddButton>
                
                </Card>
                <UseTicketContainer>
                    <UseTicketButton>
                    <MaterialCommunityIcons name="ticket-confirmation-outline" size={20} color="#0db060" />
                    <UseTicketLabel>Usar código promocional</UseTicketLabel>
                    </UseTicketButton>
                </UseTicketContainer>
            </PaymentMethods>

        </Wrapper>
    );
}