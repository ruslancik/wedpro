import React from 'react'

//style
import {
    Container,
    ColorBadge,
    ColorContent,
    ColorSelContainer,
    ColorItemContainer
} from './color.style'

const Color = ({value}) => {

    const handleClick = (value) => {
        return document.querySelector('#image').src=value;
    }

    return (
        <Container >
            <ColorContent>Color Choise</ColorContent>
            <ColorSelContainer>
                <ColorItemContainer onClick={() => handleClick(value[0])}>
                    <ColorBadge color='#0051C9' />
                    <ColorBadge color='#FFB443' />
                </ColorItemContainer>                
                <ColorItemContainer onClick={() => handleClick(value[1])}>
                    <ColorBadge color='#0051C9' />
                    <ColorBadge color='#262E4D' />
                </ColorItemContainer>                
                <ColorItemContainer onClick={() => handleClick(value[2])}>
                    <ColorBadge color='#FFFFFF' />
                    <ColorBadge color='#362A52' />
                </ColorItemContainer>                
            </ColorSelContainer>
        </Container>
    )
}

export default Color;