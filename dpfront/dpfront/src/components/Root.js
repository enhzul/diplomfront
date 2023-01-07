import React from 'react';
import styled from 'styled-components';
import Layout from './layout';

const Root = (props) => {
    return (
        <Container>
            <Layout children={props.children}/>
        </Container>
    );
};

export default React.memo(Root);

const Container = styled.div `
    background: rgba(227, 235, 246, 1);
`