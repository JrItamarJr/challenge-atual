import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import { iChallenge } from "../../interfaces";
import { Icon } from "../../components/Icon";
import HistoryCardProd from "../../components/CadGridPackage";
import formatCurrency from "../../utils/formatCurrency";

import {
    Container,
    InfoProdsCar,
    ListProdsCar,
    ContainerProds,
    Row,
    MenuItemLink
} from './styles'


type ProdInfo = Array<iChallenge>
const MyCar: React.FC = () => {
    const navigate = useNavigate();
    const [prods, setProds] = useState<ProdInfo>([])
    const [somaProd, setSomaProd] = useState<number>()
    const [quantProd, setQuantProd] = useState("")


    const getProd = () => {
        const get: string | null = localStorage.getItem('produtos');
        setProds(JSON.parse(get));
    }
    

    useEffect(() => {


        try {
            getProd();
            let soma = 0;

            const contar = prods.filter(function (item) {
                if (item.id !== '') {
                    return true;
                } else {
                    return false;
                }
            }).length;

            prods.map(function (item) {
                for (let i = 0; i < prods.length; i++) {
                    soma += item.price_in_cents
                }
            });
            setQuantProd(contar.toString());
            setSomaProd(soma);

            // localStorage.setItem('total', somaProd);
        } catch {

        }
    }, [prods, getProd]);

    return (
        <Container>
            <ContainerProds>
                <Row>
                    <div className="return" onClick={() => navigate('/')}>
                        <Icon size={25} variant="return" />
                        <span className="return__span">Voltar</span>
                    </div>
                </Row>
                <Row>
                    <div className="carrinho" onClick={() => getProd()}>
                        SEU CARRINHO
                    </div>
                    <div className="totalCarrinho">
                        Total ({quantProd} produtos)
                        <text className="carrinho_text">
                            {formatCurrency(Number(somaProd))}
                        </text>
                    </div>
                </Row>

                <ListProdsCar>
                    {quantProd == '' ?
                        <h1>SEM ITENS NO CARRINHO</h1>
                        :
                        prods && prods.map((item, index) => (
                            <div>
                                <HistoryCardProd key={index} {...item} />
                            </div>
                        ))
                    }
                </ListProdsCar>
            </ContainerProds>
            <InfoProdsCar>
                <div className="resumoProd">
                    <h2 className="resumoProd__title">
                        RESUMO DO PEDIDO
                    </h2>
                    <div className="resumoProd__sub">
                        <span>
                            Subtotal de Produtos
                        </span>
                        <span>
                            {formatCurrency(Number(somaProd))}
                        </span>
                    </div>
                    <div className="resumoProd__entrega">
                        <span>
                            Entrega
                        </span>
                        <span>
                            R$ 40,00
                        </span>
                    </div>
                    <div className="resumoProd__separator">

                    </div>
                    <div className="resumoProd__total">
                        <h3>Total </h3>
                        <span>
                        {formatCurrency(Number(somaProd) + 40)}
                        </span>
                    </div>

                </div>
                <div className="resumoProd__listPages" onClick={() => { }}>
                    <Icon size={25} variant="shop_white" />
                    <span className="resumoProd__span">
                        FINALIZAR A COMPRA
                    </span>

                </div>

                <div className='infoBottom'>
                    <MenuItemLink href="/">
                        AJUDA
                    </MenuItemLink>
                    <MenuItemLink href="/">
                        REEMBOLSOS
                    </MenuItemLink>
                    <MenuItemLink href="/">
                        ENTREGAS E FRETE
                    </MenuItemLink>
                    <MenuItemLink href="/">
                        TROCAS E DEVOLUÇÕES
                    </MenuItemLink>

                </div>
            </InfoProdsCar>
        </Container >
    );
}

export default MyCar;