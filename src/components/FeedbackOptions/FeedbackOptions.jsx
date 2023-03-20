import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const firstLetterToUppercase = name => name[0].toUpperCase() + name.slice(1);

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonList}>
      {options.map(option => (
        <button
          type="button"
          key={option}
          name={option}
          className={css.button}
          onClick={onLeaveFeedback}
        >
          {firstLetterToUppercase(option)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};





























// import React from "react";


// const FeedBack = ({ onCountGood, onCountNeutral, onCountBad }) => {
//     return(
//     <div className="FeedBack">
//             <p className="FeedBack__title">Please leave feedback</p>
//              <button type="button" className="FeedBack__button"
//                 onClick={onCountGood}
                
//             >Good</button>
//             <button type="button" className="FeedBack__button"
//                 onClick={onCountNeutral}
                
//             >Neutral</button>
//             <button type="button" className="FeedBack__button"
//                 onClick={onCountBad}
                
//             >Bad</button>
//         </div>
//     )
// }

// // class FeedBack extends React.Component {
  

// // render() {
// //     return (
// //         <div className="FeedBack">
// //             <p className="FeedBack__title">Please leave feedback</p>
// //             <button type="button" className="FeedBack__button"
// //                 onClick={this.countGood}
                
// //             >Good</button>
// //             <button type="button" className="FeedBack__button"
// //                 onClick={this.countNeutral}
                
// //             >Neutral</button>
// //             <button type="button" className="FeedBack__button"
// //                 onClick={this.countBad}
                
// //             >Bad</button>
// //         </div>
// //     )
// // }
// // }
// export default FeedBack;