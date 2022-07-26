import React, { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';
import { iChallenge } from "../../interfaces";
import { Icon } from "../Icon";

import {
    Container,
    Profile,
    Controllers,
} from './styles';

type ProdInfo = Array<iChallenge>

const MainHeader: React.FC = () => {
    const navigate = useNavigate();
    const [prods, setProds] = useState<ProdInfo>([])
    const [quantProd, setQuantProd] = useState("")
    const [busca, setBusca] = useState('')

    const getProd = () => {
        const get: string | null = localStorage.getItem('produtos');
        setProds(JSON.parse(get));
    }

    useEffect(() => {

        getProd()
        try {

            const contar = prods.filter(function (item) {
                if (item.id !== '') {
                    return true;
                } else {
                    return false;
                }
            }).length;
            setQuantProd(contar.toString())
            
        }
        catch {
            setQuantProd('0')
        }

    }, [getProd, busca]);
    return (
        <Container>
            <Profile>
                <div className="title">
                    <input type="text"
                        disabled={true}
                        value="capputeeno"
                        className="title" >
                    </input>
                    <div className="title__div" onClick={() => navigate('/')} />
                </div>
            </Profile>
            <Controllers>
                <div className="divInput">
                    <input type="text" placeholder="Procurando por algo específico?" onChange={(e) => setBusca(e.target.value)} className="divInput__inputText" />
                    <div className="divInput__icon">
                        <Icon size={15} variant="search" />
                    </div>

                </div>
                <div className="divButton" onClick={() => navigate(`/MyCar`)}>
                    <Icon size={25} variant="shop" />
                    {
                        quantProd !== "0" ?
                            <div className="divInput__iconProd">
                                {quantProd}
                            </div> :
                            <div></div>
                    }
                </div>
            </Controllers>

        </Container>
    );
}

export default MainHeader;