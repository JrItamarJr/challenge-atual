import React, { useState, useEffect } from "react";
import { useParams, } from 'react-router-dom';
import { Container, ContainerImage, ContainerProd, Row } from './styles'
import { Api } from "../../providers";
import { useNavigate } from 'react-router-dom';
import { iChallenge } from "../../interfaces";
import { Icon } from "../../components/Icon";
import formatCurrency from "../../utils/formatCurrency";


const InfoProd: React.FC = () => {
    const params = useParams();
    const [prods, setProds] = useState<iChallenge>({});
    const navigate = useNavigate();

    useEffect(() => {

        Api.get(`/products/${params.id}`).then((response) => setProds(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [params])



    function saveProdLocal() {

        var produtos = JSON.parse(localStorage.getItem('produtos') || "[]")
        var produto = {
            name: prods.name,
            description: prods.description,
            sales: prods.sales,
            image_url: prods.image_url,
            category: prods.category,
            id: prods.id,
            price_in_cents: prods.price_in_cents,
            created_at: prods.created_at,
        }
        produtos.push(produto)
        localStorage.setItem('produtos', JSON.stringify(produtos))
        navigate(`/MyCar`)

    }


    return (
        <div>

            <Row>
                <div className="return" onClick={() => navigate('/')}>
                    <Icon size={25} variant="return" />
                    <span className="return__span">Voltar</span>
                </div>
            </Row>
            <Container>
                <ContainerImage>
                    <img className="photo" src={prods.image_url} />
                </ContainerImage>
                <ContainerProd>
                    <div className="cardInfoProd">
                        <div className="cardInfoProd__infocategory">{prods.category === "mugs" ? "Canecas" : "Camisas"}</div>
                        <text className="cardInfoProd__infotitle">{prods.name}</text>
                        <h2 className="cardInfoProd__infoprice">{formatCurrency(Number(prods.price_in_cents))}</h2>
                        <div className="cardInfoProd__infofrete">*Frete de R$ 40,00 para todo o Brasil. Gratis para compras acima de R$ 900,00.</div>
                        <div className="cardInfoProd__infoDesc"> DESCRIÇÃO</div>
                        <div className="cardInfoProd__info">{prods.description}</div>
                        <div className="cardInfoProd__listPages" onClick={saveProdLocal}>
                            <Icon size={25} variant="shop_white" />
                            <span className="cardInfoProd__span">
                                ADICIONAR AO CARRINHO
                            </span>

                        </div>
                    </div>


                </ContainerProd>

            </Container>
        </div>
    );
}

export default InfoProd;