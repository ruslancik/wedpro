import styled from 'styled-components'

export const ColorBadge = styled.span`
            display: inline-block;
            width: 1.6rem;
            height: 1.6rem;
            border-radius: 50%;
            background-color: ${ props => props.color};
`