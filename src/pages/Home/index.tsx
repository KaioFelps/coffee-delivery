import { Coffee, Package, ShoppingBag, ShoppingCart, Timer } from "phosphor-react";
import {
    AdvantagesText,
    BenefitsGrid,
    Col,
    MainContainer,
    HeaderGrid,
    RoundIcon,
    Row,
    HeaderColorBG
} from "./style";
import Art from "../../assets/Coffee art.png"
import CoffeeBackground from "../../assets/coffelist-background.svg"

export function Home() {
    return (
        <MainContainer>
            <>
                <HeaderColorBG Src={CoffeeBackground} />
                <HeaderGrid gap={56} templateColumn={[2, "1fr"]} className="wrapper">
                    <Col gap={66}>
                        <Col gap={16} className="titles">
                            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                        </Col>

                        <BenefitsGrid columnGap={40} rowGap={20}>
                            <Row className="advantages-icons" gap={12} align="center">
                                <RoundIcon color="bronze"><ShoppingCart size={16} weight="fill" /></RoundIcon>
                                <AdvantagesText>Compra simples e segura</AdvantagesText>
                            </Row>

                            <Row gap={12} align="center">
                                <RoundIcon color="gray"><Package size={16} weight="fill" /></RoundIcon>
                                <AdvantagesText>Embalagem mantém o café intacto</AdvantagesText>
                            </Row>

                            <Row gap={12} align="center">
                                <RoundIcon color="gold"><Timer size={16} weight="fill" /></RoundIcon>
                                <AdvantagesText>Entrega rápida e rastreada</AdvantagesText>
                            </Row>

                            <Row gap={12} align="center">
                                <RoundIcon color="purple"><Coffee size={16} weight="fill" /></RoundIcon>
                                <AdvantagesText>O café chega fresquinho até você</AdvantagesText>
                            </Row>
                        </BenefitsGrid>
                    </Col>

                    <img src={Art} alt="Cup of coffee with different types of coffee behind it" />
                </HeaderGrid>
            </>
        </MainContainer>
    )
}