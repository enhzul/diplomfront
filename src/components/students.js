import React from "react";
import Root from "./Root";
import TableList from "./dashboard/table";
import styled from "styled-components";

const Students = () => {


    return(
        <Root>
            <Container>
                <div className="mainTable">
                <TableList/>
                </div>
            </Container>
        </Root>
    )

}

export default Students;



const Container = styled.div`
    font-family: "Inter", sans-serif;
    font-family: "Roboto", sans-serif;
    /* display: flex; */
    gap: 15px;
    height: 100%;
    .mainTable{
        padding: 10px;
    }
   
`;