import React from "react";
import PropTypes from "prop-types";
import styles from "../../components/Section/Section.module.css";

const Section = ({ title, children }) => (
  <section>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;