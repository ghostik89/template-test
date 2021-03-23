import React from "react";
import {Container} from "@material-ui/core";
import Header from "../components/Header";

export const PageContainer = ({children}:{children:any}) => {
    return(
        <>
            <Header/>
            <Container>
                {children}
            </Container>
        </>
    )
}