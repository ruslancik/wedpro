import React, {useState} from 'react'
import './collection.style.scss'
import shoes1 from '../../assets/nike-shoe1.svg'
import shoes2 from '../../assets/nike-shoe2.svg'
import shoes3 from '../../assets/nike-shoe3.svg'
import nikeRunner from '../../assets/nike-runner.svg'
import nikeLogo from '../../assets/nike-logo_torquese.svg'
import leftArr from '../../assets/left-arr.svg'
import rightArr from '../../assets/right-arr.svg'
import Rate from '../rate/rate.component'
import Size from '../size/size.component'
import Color from '../color/color.component'




class Collection extends React.Component {
  
      state = { 
        color: [
          '#00E0FF',
          '#FFB443',
          '#F5405B'
        ], 
        shoes : [
            shoes1,
            shoes2,
            shoes3
        ],
        current: 0, 
        isNext: true 
      };
      
        
    
    handlerPrev = () => {
      let index = this.state.current,
          length = this.state.color.length;
      
      if( index < 1 ) {
        index = length;
      }
      
      index = index - 1;
    
      this.setState({
        current: index,
        isNext: false
      });
    }
    
    handlerNext = () => {
      let index = this.state.current,
          length = this.state.color.length - 1;
      
      if( index == length ) {
        index = -1;
      }
      
      index = index + 1;
      
      this.setState({
        current: index,
        isNext: true
      });
    }
    

    handleClick = (shoes) => {
        return document.querySelector('#image').src=shoes;
    }
  
    
    render(){
      let index = this.state.current,
          isnext = this.state.isNext,
          color = this.state.color[index];
    
      return (
        <div className='collection'>
        <div className="collection_image-container" style={{backgroundColor: color}}>
            <span className='ellipse_mini-small'></span>
            <span className='ellipse_mini-big'></span>
            <img id='image' src={shoes1} alt="nike shoes"/>
            <span className="shadow_one"></span>
            <span className="shadow_two"></span>
            <div className="heart">
                <input type="checkbox" name="love" id="love" />
                <label htmlFor="love">
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 5.88971C18 8.05147 16.8303 9.82721 15.3486 11.2941C13.789 12.6838 11.7615 13.8419 9.81193 14.8456L9.5 15L9.18807 14.8456C7.23853 13.8419 5.21101 12.761 3.65138 11.2941C2.09174 9.82721 1 8.05147 1 5.88971C1 4.42279 1.54587 3.26471 2.32569 2.41544C3.1055 1.56618 4.19725 1.18015 5.28899 1.02574C6.84862 0.871324 8.56422 1.41176 9.57798 2.64706C10.4358 1.41176 12.1514 0.871324 13.711 1.02574C14.8028 1.18015 15.8945 1.56618 16.6743 2.41544C17.4541 3.26471 18 4.42279 18 5.88971Z" stroke="#495889" strokeWidth="2" strokeMiterlimit="10"/>
                    </svg>
                </label>
            </div>
        </div>
           <div className="collection_details">
               <div className='first_grid'>
                    <img className='nike_logo' src={nikeLogo} alt="nike logo"/>
                    <img className='nike_runner' src={nikeRunner} alt="nike runnerclick"/>
                    <span>Best fabric is used to <br/> produce these</span>
                    <div className='btn-container'>
                        <a className="btn btn-left" onClick={this.handlerPrev}><img className='left-arr' src={leftArr}/></a>
                        <a className="btn btn-right" onClick={this.handlerNext}><img className='right-arr' src={rightArr}/></a>
                    </div>
            </div>
            <div className="second_grid">
                    <Size/>
                    <Rate/> 
                    <Color value={this.state.shoes}/>
                </div>
            
            </div>
        </div>
      )
      }}
  export default Collection;