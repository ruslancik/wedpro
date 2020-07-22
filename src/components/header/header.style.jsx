import styled from 'styled-components'

//Images
import shoesHero from '../../assets/shoes-hero.svg'
import vectorPink from '../../assets/vector2.svg'
import vectorYellow from '../../assets/vector1.svg'
import shadowEllipse from '../../assets/shadow-ellipse.svg'



export const HeroContainer = styled.div`
        position: absolute;
        width: 143rem;
        height: 128rem;
        top: 0rem;
        background: #283664;
        overflow-x: hidden;
        z-index: -2;

        @media screen and (min-width: 1440px) {
            width: 144rem;
        } 
        @media screen and (max-width: 1440px) {
        width: 143rem;
        }  



        @media screen and (max-width: 600px) {
        width: 100%;
        height: 121.6rem;
        } 
`


export const MotionBallRed = styled.div`
        position: absolute;
        width: 77.7rem;
        height: 77.8rem;
        left: 84.8rem;
        top: 34rem;
        z-index: -5;
        background: radial-gradient(71.47% 71.47% at 30.21% 28.53%, #F5405B 0%, #495889 100%);
        border-radius: 50%;
        animation: moveX1 30.05s linear 1.5s infinite alternate, moveY1 30.4s linear 1.5s infinite alternate;

        @keyframes moveY1 {
            from { top: 34rem; } to { top: 0; }
        }

        @keyframes moveX1 {
        from { left: 84.8rem; } to { left: 0; }
        }

        

        @media screen and (max-width: 600px) {
            width: 32.6rem;
            height: 32.6rem;
            top: 44.9rem;
            left: 9.1rem;
            @keyframes moveY1 {
                from { top: 44.9rem; } to { top: 0; }
            }

            @keyframes moveX1 {
            from { left: 9.1rem; } to { left: 0; }
            }
        }
`

export const MotionBallBlue = styled.div`
        position: absolute;
        width: 63.3rem;
        height: 63.3rem;
        left: -6.8rem;
        top: 55.9rem;
        z-index: -4;
        background: radial-gradient(71.47% 71.47% at 30.21% 28.53%, #43FFFF 0%, #495889 100%);
        border-radius: 50%;
        animation: moveX 25.05s linear 2s infinite alternate, moveY 25.4s linear 2s infinite alternate;


        @keyframes moveX {
        from { left: -6.8rem; } to { left: 75rem }
        }

        @keyframes moveY {
        from { top: 55.9rem; } to { top: 0; }
        }

        @media screen and (max-width: 600px) {
            width: 15.6rem;
            height: 15.6rem;
            left: -6.2rem;
            top: 39.5rem;

            @keyframes moveX {
                from { left: -6.2rem; } to { left: 15rem; }
            }
            
            @keyframes moveY {
                
                from { top: 39.5rem; } to { top: 0; }
            }
        }
`

export const VectorPink = styled.div`
        background: url(${vectorPink}) no-repeat;
        background-size: contain;
        position: absolute;
        width: 60.6rem;
        height: 15.845rem;
        left: 105.8rem;
        top: 25.7rem;
        @media screen and (max-width: 600px) {
            width: 19.429rem;
            height: 4.286rem;
            left: 28.2rem;
            top: 33.7rem;
        } 
`

export const VectorYellow = styled.div`
        background: url(${vectorYellow}) no-repeat;
        background-size: contain;
        position: absolute;
        width: 104.6rem;
        height: 25.3rem;
        left: 28.8rem;
        top: 27.8rem;
        @media screen and (max-width: 600px) {
            width: 28.571rem;
            height: 6.905rem;
            left: 11.8rem;
            top: 36.995rem;
        } 
`

export const HeroShoes = styled.div`
    background: url(${shoesHero}) no-repeat;
    background-size: contain;
    position: absolute;
    width: 56rem;
    height: 44.8rem;
    left: 67.2rem;
    top: 11.2rem;
    transition: all .3s;
    &:hover {
        top: 10.2rem;
    }
    @media screen and (max-width: 600px) {
        width: 28.8rem;
        height: 23.04rem;
        left: 1.6rem;
        top: 40.13rem;
        &:hover {
            top: 39rem;
        }
    }
`

export const EllipsePink = styled.div`
        position: absolute;
        width: 6.6rem;
        height: 6.6rem;
        left: 70.8rem;
        top: 16.6rem;

        background: #FF439D;
        border-radius: 50%;
        @media screen and (max-width: 600px) {
            width: 3.4rem;
            height: 3.4rem;
            left: 25.6rem;
            top: 18.7rem;
        }
`

export const EllipseBlur = styled.div`
        position: absolute;
        width: 28.2rem;
        height: 28.2rem;
        left: 71.8rem;
        top: 11.5rem;
        z-index: -9;
        background: linear-gradient(94.67deg, #576799 0%, #495889 100%);
        opacity: 0.99;
        filter: blur(15px);
        border-radius: 50%;
        @media screen and (max-width: 600px) {
            width: 15rem;
            height: 15rem;
            left: 27.4rem;
            top: 16.6rem;
        }
`

export const Blur = styled.div`
        position: absolute;
        width: 15rem;
        height: 15rem;
        left: 120.9rem;
        top: 21.2rem;

        background: rgba(255, 255, 255, 0.25);
        border: .1rem solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        backdrop-filter: blur(1rem);

        border-radius: 12.2rem;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        @media screen and (max-width: 600px) {
            width: 6.5rem;
            height: 6.5rem;
            left: 29rem;
            top: 31.9rem;
        }
`

export const MotionBlur = styled.div`
        position: absolute;
        width: 9.6rem;
        height: 9.6rem;
        left: 67rem;
        top: 42.4rem;
        z-index: 9999999;

        background: rgba(255, 255, 255, 0.25);
        border: .1rem solid rgba(255, 255, 255, 0.2);
        box-sizing: border-box;
        backdrop-filter: blur(1rem);
        /* Note: backdrop-filter has minimal browser support */

        border-radius: 4.8rem;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        animation: moveX2 15.05s linear 2.5s infinite alternate, moveY2 15.4s linear 2.5s infinite alternate;

        @keyframes moveY2 {
            from { top: 42.4rem; } to { top: 0; }
        }

        @keyframes moveX2 {
        from { left: 67rem; } to { left: 0; }
        }

        @media screen and (max-width: 600px) {
        width: 4.9rem;
        height: 4.9rem;
        left: 2.5rem;
        top: 56.7rem;

        @keyframes moveY2 {
            from { top: 56.7rem; } to { top: 0; }
        }

        @keyframes moveX2 {
        from { left: 2.5rem; } to { left: 29rem; }
        }
    }   
`

export const NewestShoes = styled.div`
        background-size: contain;
        position: absolute;
        left: 42.1rem;
        top: 95.2rem;
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: 800;
        font-size: 4.8rem;
        line-height: 150%;
        text-transform: uppercase;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: #ffffff;
        @media screen and (max-width: 600px) {
            width: 23.4rem;
            height: 14.4rem;
            left: 1.6rem;
            top: 80.7rem;

        }
`

export const RotateImage = styled.div`
        width: 100%;
        height: 25.2rem;
        background-size: contain;
        position: relative;
        top: 23.7rem;
        left: 102rem;
        overflow: hidden;

        @media screen and (max-width: 600px) {
            height: 10.8rem;
            left: 22rem;
            top: 48rem;
           } 
` 

export const ImageContainer = styled.img`
        width: auto;
        height: 100%;
`

export const EllipseShadow = styled.div`
    background: url(${shadowEllipse}) no-repeat;
    background-size: contain;
    width: 26.8rem;
    height: 25.8rem;
    position: absolute;
    left: 67.8rem;
    top: 50.8rem;
    z-index: -1;

    @media screen and (max-width: 600px) {
        width: 15.6rem;
        height: 10.3rem;
        left: 1.143rem;
        top: 60.7rem;
    }
    
`

export const Shadow = styled.div`
    position: absolute;
    width: 48.226rem;
    height: 4.6rem;
    left: 74.314rem;
    top: 53.302rem;
    filter: blur(50px);
    background: #222222;
    transform: rotate(-12.46deg);
    z-index: 1;

    @media screen and (max-width: 600px) {
        width: 24.802rem;
        height: 2.366rem;
        left: 6.259rem;
        top: 62.354rem;
        filter: blur(50px);
    }
 `