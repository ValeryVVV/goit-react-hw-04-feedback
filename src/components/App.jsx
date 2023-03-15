import React, { Component } from "react";
import { FeedbackOptions } from "./Feedback/FeedbackOptions/FeedbackOptions";
import { Notification } from "./Feedback/Notification/Notification";
import { Section } from "./Feedback/Section/Section";
import { Statistics } from "./Feedback/Statistics/Statistics";
import style from './Feedback/Feedback.module.css';
import { useState } from "react";


function App() {
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

      const onLeaveFeedback = option => {
        switch(option) {
            case 'good': 
                setGood( prevState => prevState + 1 );
            break;
            case 'neutral': 
            setNeutral( prevState => prevState + 1 );
            break;
            case 'bad': 
            setBad( prevState => prevState + 1 );
            break;

            default: throw new Error();
        }
      };

      const countTotalFeedback = () => {
        return good + neutral + bad;

      }

      const countPositiveFeedbackPercentage = () => {
        return Math.round(( good / countTotalFeedback()) * 100);
      }
        
        return(
            <div className={style.container}>
                <div className={style.wrapper}>
                    <Section title="Please leave feedback" >
                        <div className={style.buttonContent}>
                        <FeedbackOptions options={Object.keys({ good, neutral, bad })} onLeaveFeedback={onLeaveFeedback}/>
                        </div>
                    </Section>

                    <Section title="Statistics">
                    {countTotalFeedback() > 0 ? (
                        <Statistics 
                            good={good} 
                            neutral={neutral} 
                            bad={bad} 
                            total={countTotalFeedback()} 
                            positivePercentage={countPositiveFeedbackPercentage()} 
                        />

                    ) : (
                        <Notification message="There is no feedback" />
                    )
                    }
                    </Section>
                </div>
            </div>
        );
}

export default App;
