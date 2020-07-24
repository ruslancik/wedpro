import styled from 'styled-components'

export const ColorBadge = styled.span`
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background-color: ${ props => props.color};
`

export const ColorContent = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 170%;
    display: flex;
    align-items: center;
    margin: 2.9rem 0 1.8rem 0;
    color: #283664;
`

export const ColorSelContainer = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const ColorItemContainer = styled.li`
    width: 6rem;
    height: 3.2rem;
    border-radius: 30px;
    margin-right: 1.2rem;
    background-color: #D9DDE6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:hover {
    border: 2px solid #283664;
    background-color: #EDEFF4;
    }
`

export const Container = styled.div``;

