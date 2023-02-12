import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
    AdvantagesText,
    BenefitsGrid,
    Col,
    MainContainer,
    HeaderGrid,
    RoundIcon,
    Row,
    HeaderColorBG,
    MenuContainer
} from "./style";
import Art from "../../assets/Coffee art.png"
import CoffeeBackground from "../../assets/coffelist-background.svg"
import { ShopCard } from "../../componentes/ShopCard";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import type { CoffeePropsType } from "../../contexts/CoffeeContext";

export function Home() {
    const { coffeesData } = useContext(CoffeeContext)
    
    return (
        <MainContainer>
            <>
                <HeaderColorBG Src={CoffeeBackground} />
                <HeaderGrid gap="56px" templateColumn={[2, "1fr"]} className="wrapper">
                    <Col gap="55px">
                        <Col gap="16px" className="titles">
                            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                        </Col>

                        <BenefitsGrid columnGap="40px" rowGap="20px">
                            <Row className="advantages-icons" gap="12px" align="center">
                                <RoundIcon color="bronze"><ShoppingCart size={16} weight="fill" /></RoundIcon>
                                <AdvantagesText>Compra simples e segura</AdvantagesText>
                            </Row>

                            <Row gap="12px" align="center">
                                <RoundIcon color="gray"><Package size={16} weight="fill" /></RoundIcon>
                                <AdvantagesText>Embalagem mantém o café intacto</AdvantagesText>
                            </Row>

                            <Row gap="12px" align="center">
                                <RoundIcon color="gold"><Timer size={16} weight="fill" /></RoundIcon>
                                <AdvantagesText>Entrega rápida e rastreada</AdvantagesText>
                            </Row>

                            <Row gap="12px" align="center">
                                <RoundIcon color="purple"><Coffee size={16} weight="fill" /></RoundIcon>
                                <AdvantagesText>O café chega fresquinho até você</AdvantagesText>
                            </Row>
                        </BenefitsGrid>
                    </Col>

                    <img src={Art} alt="Cup of coffee with different types of coffee behind it" />
                </HeaderGrid>
            </>

            <Col className="wrapper" gap="3.375rem">
                <h2>Nossos Cafés</h2>
                <MenuContainer columnGap="32px" rowGap="40px">
                    {coffeesData.map((coffee: CoffeePropsType) => {
                        return (
                            <ShopCard
                                key={coffee.title}
                                title={coffee.title}
                                description={coffee.description}
                                labels={coffee.labels}
                                price={coffee.price}
                                image={coffee.image}
                            />
                        )
                    })}
                </MenuContainer>
            </Col>
        </MainContainer>
    )
}