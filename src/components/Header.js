import React from 'react'
import styled from 'styled-components'

export const Header = () => {
    return (
        <Container>
            <LogoContainer>
                <img src="/images/logo.svg" />
            </LogoContainer>
            <Menu>
                <a href='#'> Model S </a>
                <a href='#'> Model Y </a>
                <a href='#'> Model 3 </a>
                <a href='#'> Model X </a>
                <a href='#'> Solar Roof </a>
                <a href='#'> Solar Panel </a>
            </Menu>
        </Container>
    )
}


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    top: 0;
    right: 0;
    left: 0;

`

const LogoContainer = styled.div`

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center; 

       a { 
        text-transform: uppercase;
        padding: 0 20x;
        font-weight: 600;
        flex-wrap: nowrap;
        }
`