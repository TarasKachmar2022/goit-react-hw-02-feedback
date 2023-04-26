import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div>
      <p>{title}</p>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
