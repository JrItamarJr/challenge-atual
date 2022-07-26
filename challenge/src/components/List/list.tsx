import React from "react";
import { CardGrid, ListItemProps } from "../CardGridHome"
import { Container } from "./styles";

type ListProps = {
    items: ListItemProps[];
}

export const List: React.FC<ListProps> = ({ items }) => {
    
    return (
        <Container>
            {items.map((item, index) => (
                <CardGrid key={index} {...item} />
            ))}
        </Container>
    )
}