import { useEffect, useState } from "react";

import Api from "../../providers";

import { List } from "../../components/List/list";
import { useChallenge } from '../../hooks'
import { iChallenge } from "../../interfaces";

import {
    Container,
    Filters,
    Pages,
    ContentHeader,
    ListPage,
    PagesBotton
} from "./styles";

const Home: React.FC = () => {


    const { tasks, getAll } = useChallenge();
    const [busca, setBusca] = useState('')
    const buscaProd = localStorage.getItem('busca')
    const prodSearch = tasks.filter((prods) => prods.category.includes(busca.toLowerCase()))

    const [itensPerPage, setItensPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(0)
    const pages = Math.ceil(tasks.length / itensPerPage)


    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;

    const currentItens = prodSearch.slice(startIndex, endIndex);
    const currentAllItens = tasks.slice(startIndex, endIndex);


    const filtrar = tasks.filter
    const [query, setQuery] = useState("");
    const [data, setData] = useState<iChallenge>([]);


    useEffect(() => {

        const fetchData = async () => {
            const res = await Api.get(`/products/${query}`);
            setData(res.data);
        };
        if (query.length === 0 || query.length > 2) fetchData();
        getAll();
    }, [getAll, query])




    const handlePageSelect = (page: number) => {
        try {
            setCurrentPage(page)
        }
        catch {
            throw new Error('Pagina selecionada invalida.')
        }
    }

    return (
        <Container>
            <ContentHeader>
                <Filters>
                    <button
                        type="button"
                        className={`
                    tag-filter 
                    tag-filter-recurrent`}
                        onClick={() => { setBusca('') }}>
                        TODOS OS PRODUTOS
                    </button>
                    <button
                        type="button"
                        className={`
                    tag-filter 
                    tag-filter-recurrent`}
                        onClick={() => { setBusca('t-shirts') }}>
                        CAMISETAS
                    </button>
                    <button
                        type="button"
                        className={`
                    tag-filter 
                    tag-filter-recurrent`}
                        onClick={() => { setBusca('mugs') }}>
                        CANECAS
                    </button>
                </Filters>
                <Pages>
                    <div className="pages">
                        <div>
                            {Array.from(Array(pages), (item, index) => {
                                return <button
                                    className="listPages"
                                    value={(index)}
                                    onClick={(e) => handlePageSelect(Number(e.target.value))}>{index}</button>
                            })}
                            <button className="listPages" value={-1} onClick={(e) => handlePageSelect(Number(e.target.value))}> {'<'} </button>
                            <button className="listPages" value={+1} onClick={(e) => handlePageSelect(Number(e.target.value))}> {'>'} </button>
                        </div>
                    </div>
                </Pages>
            </ContentHeader>
            <ListPage>
                <List items={
                    busca === '' ?
                        currentAllItens :
                        currentItens} />
            </ListPage>
            <PagesBotton>
                <p></p>
                <div className="pages">
                    <div>
                        {Array.from(Array(pages), (item, index) => {
                            return <button
                                className="listPages"
                                value={(index)}
                                onClick={(e) => handlePageSelect(Number(e.target.value))}>{index}</button>
                        })}
                        <button className="listPages" value={-1} onClick={(e) => handlePageSelect(Number(e.target.value))}> {'<'} </button>
                        <button className="listPages" value={+1} onClick={(e) => handlePageSelect(Number(e.target.value))}> {'>'} </button>
                    </div>
                </div>
            </PagesBotton>
        </Container>
    );
}

export default Home;