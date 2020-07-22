import React from 'react'
import './rate.style.scss'

const Rate = () => {
    return (
        <div>
            <div className="rate">
            <span className='review_text'>Reviews</span>
               <input type="radio" name="stars" id="star-2" />
                <input type="radio" name="stars" id="star-3" />
                <input type="radio" name="stars" id="star-4" />
                <input type="radio" name="stars" id="star-5" />

                <section>
                <label htmlFor="star-1">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" stroke="#D9DCE4" strokeWidth="2" stroklinecap="round" stroklinejoin="round"/>
                    </svg>
                </label>
                <label htmlFor="star-2">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" stroke="#D9DCE4" strokeWidth="2" stroklinecap="round" stroklinejoin="round"/>
                    </svg>
                </label>
                <label htmlFor="star-3">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" stroke="#D9DCE4" strokeWidth="2" stroklinecap="round" stroklinejoin="round"/>
                    </svg>
                </label>
                <label htmlFor="star-4">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" stroke="#D9DCE4" strokeWidth="2" stroklinecap="round" stroklinejoin="round"/>
                    </svg>
                </label>
                <label htmlFor="star-5">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z" stroke="#D9DCE4" strokeWidth="2" stroklinecap="round" stroklinejoin="round"/>
                    </svg>
                </label> 
                </section>
            </div>
        </div>
    )
}

export default Rate;
