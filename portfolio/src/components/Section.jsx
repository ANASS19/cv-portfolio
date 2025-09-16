import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const fadeConfig = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

const Section = ({ id, eyebrow, title, children }) => (
  <section id={id} className="section">
    <motion.div className="section-header" {...fadeConfig}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      <div className="section-line" />
    </motion.div>
    <motion.div className="section-body" {...fadeConfig}>
      {children}
    </motion.div>
  </section>
);

Section.propTypes = {
  id: PropTypes.string,
  eyebrow: PropTypes.string,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Section.defaultProps = {
  id: undefined,
  eyebrow: undefined
};

export default Section;
