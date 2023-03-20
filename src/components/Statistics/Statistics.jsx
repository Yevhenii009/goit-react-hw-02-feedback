import React from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const isStatToShow = good || neutral || bad;
  return (
    <div className={css.statistic}>
      {isStatToShow ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
























// import FeedBack from "components/FeedBack/FeedBack";
// import React from "react";


// class Statistics extends React.Component {
// state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positivePercentage: 0,
// }

    
//     countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };
    
// // countTotalFeedback = () => 
// //         this.setState(prevState => ({
// //         total: prevState.good + prevState.neutral + prevState.bad
// //         }))
    
// // countPositiveFeedbackPercentage = () =>
    

// countGood = () => 
// this.setState(prevState => ({
//     good: prevState.good + 1,
//     }))

    
// countNeutral = () => 
// this.setState(prevState => ({
//     neutral: prevState.neutral + 1,
//     }))

    
// countBad = () => 
// this.setState(prevState => ({
//     bad: prevState.bad + 1,
//     }))


//     render() {
//         return (
            
        
//     <>
// <FeedBack
//         onCountGood={this.countGood}
//         onCountNeutral={this.countNeutral}
//         onCountBad={this.countBad}
//       />
   

//             <div>
//                 <p>Statistics</p>
//                 <ul>
//                     <li className="">Good: {this.state.good}</li>
//                     <li className="">Neutral: {this.state.neutral}</li>
//                     <li className="">Bad: {this.state.bad}</li>
//                     <li className="">Total: {this.state.total}</li>
//                     <li className="">Positive feedback: {this.state.positivePercentage}%</li>
//                 </ul>
//             </div>
//            </>
//         )
//     }
// }
// export default Statistics;