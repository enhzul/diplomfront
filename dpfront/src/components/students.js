import React from "react";
import Root from "./Root";
import TableList from "./dashboard/table";
import styled from "styled-components";

const Students = () => {


    return(
        <Root>
            <Container>
                <div className="mainTable">
               
                <form >
                <input type="text" placeholder="Хайх"/>
                <select>
                    <option>Нэр</option>
                    <option>Код</option>
                </select>
               </form>
                <TableList >
                    <div className="table"></div>
                </TableList>
                </div>
            </Container>
        </Root>
    )
}
export default Students;

const Container = styled.div`
    .mainTable{
        padding: 10px;
    
    }
    .table{
        width: 80%;
    }
`;