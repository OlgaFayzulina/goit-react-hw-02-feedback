import React from 'react';
import PropTypes from "prop-types";
import shortid from "shortid";
import styles from "../../components/FeedbackOptions/FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map((option) => (
    <button className={styles.button}
      key={shortid.generate()}
      type="button"
      onClick={onLeaveFeedback(option)}>
      {option}
    </button>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;