import formatCurrency from "../../utils/formatCurrency";
import { CardBody, Container, ContImg } from "./styles"
import { useNavigate } from 'react-router-dom';
import { iChallenge } from "../../interfaces";

export const CardGrid: React.FC<iChallenge> = ({ name, image_url, price_in_cents, id }) => {

    const navigate = useNavigate();

    const navigateInfoProd = (idItem: string) => {
        navigate(`/InfoProd/${idItem}`)
    };

    return (
        <Container>
            <CardBody>
                <div className="card" onClick={(e) => navigateInfoProd(id)}>
                    <img src={image_url} className="card__image" />
                    <text className="card__title">{name}</text>
                    <text className="card__description">{formatCurrency(Number(price_in_cents))}</text>
                    <br/>
                </div>
            </CardBody>
        </Container>
    );
};