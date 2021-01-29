import PropTypes from 'prop-types';
import cssClasses from './Quote.module.scss';

const Quote = ({ quoteText, quoteAuthor }) => (
  quoteText && quoteAuthor &&
    <div className={cssClasses['Quote']}>
      <div className={cssClasses['Quote-text']}>"{quoteText}"</div>
      <div className={cssClasses['Quote-author']}>{quoteAuthor}</div>
    </div>
);

Quote.propTypes = {
  quoteText: PropTypes.string.isRequired,
  quoteAuthor: PropTypes.string.isRequired,
};

Quote.defaultProps = {
  quoteText: '',
  quoteAuthor: '',
};

export default Quote;
