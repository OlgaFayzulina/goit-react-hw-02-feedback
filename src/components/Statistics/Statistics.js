import React from "react";
import PropTypes from "prop-types";
import styles from "../../components/Statistics/Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positiveFeedbackPercentage }) => (
  <section>
    <p className={styles.item}>
      Good: <span className={styles.option}>{good}</span>
    </p>
    <p className={styles.item}>
      Neutral: <span className={styles.option}>{neutral}</span>
    </p>
    <p className={styles.item}>
      Bad: <span className={styles.option}>{bad}</span>
    </p>
    <p className={styles.item}>
      Total: <span className={styles.option}>{total}</span>
    </p>
    <p className={styles.item}>
      Positive feedback: <span className={styles.option}>{positiveFeedbackPercentage}%</span> 
    </p>
  </section>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;