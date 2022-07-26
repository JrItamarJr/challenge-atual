import React, { useEffect, useMemo, useState } from 'react';
import { iChallenge } from '../../interfaces';
import formatCurrency from '../../utils/formatCurrency';
import { Icon } from '../Icon';
import SelectInput from '../SelectInput';
import quanties from '../../utils/quanties'
import { Container } from './styles';

const HistoryCardProd: React.FC<iChallenge> = ({ name, image_url, description, price_in_cents, id, sales }
) => {
    const [valorPros, setValorProd] = useState('')
    const [priceSelect, setPriceSelect] = useState<number>(250);


    const clickRemoverItens = () => {
        var getLocalStorage = JSON.parse(localStorage.getItem('produtos') || '[]');

        const index = getLocalStorage.findIndex((product) => product.id === id);
        console.log(index)
        if (index > -1) {
            getLocalStorage.splice(index, 1);
        }
        localStorage.setItem('produtos', JSON.stringify(getLocalStorage))



        // for (var i = 0; i < getLocalStorage.length; i++) {
        //     var Val = getLocalStorage[i]

        //     var newStorage = getLocalStorage.filter(function (r) { return r != id });
        //     localStorage.setItem('produtos', JSON.stringify(newStorage)); //Assign it back to LocalStorage.

        // }
    }

    const quantie = useMemo(() => {
        return quanties.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });
    }, []);

    const handlePriceproduct = (price: string) => {
        try {
            const sum = Number(price) * price_in_cents;
            setPriceSelect(sum);
        } catch {
            throw new Error('Quantidade selecionada é invalida')
        }
    }

    return (
        <Container >
            <div className='card'>
                <img className='card__image' src={image_url} ></img>
                <div>
                    <div className='card__group'>
                        <h2 className='card__name'>{name}</h2>
                        <button className='card__remove' onClick={() => clickRemoverItens()}>
                            <Icon variant='delete' size={25} />
                        </button>
                    </div>
                    <p className='card__description'>{description}</p>
                    <div className='card__bottom'>
                        <SelectInput options={quantie} onChange={(e) => handlePriceproduct(e.target.value)} defaultValue={0} />

                        <h2>{
                            priceSelect === 250 ?
                                formatCurrency(Number(price_in_cents)) :
                                formatCurrency(priceSelect)
                        }</h2>
                    </div>
                </div>
            </div >

        </Container>
    );
}

export default HistoryCardProd;