import React, { ReactNode } from "react";

import { TestGrid } from "./styles";
import MainHeader from "../MainHeader";
import Content from "../Content/Index";

type Props = {
    children?: React.ReactNode
};


const GridLayout: React.FC<Props> = ({ children }) => {
    return (
        <TestGrid>
            <MainHeader />
            <Content>
                {children}
            </Content>
        </TestGrid>
    );

}

export default GridLayout;