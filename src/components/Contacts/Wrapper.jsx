import PT from 'prop-types';
import css from './Wrapper.module.css';

const Wrapper = ({ children, styles, ...otherProps }) => {
  return (
    <div className={`${css.Wrapper} ${styles}`} {...otherProps}>
      {children}
    </div>
  );
};
export default Wrapper;

Wrapper.propTypes = {
  children: PT.node.isRequired,
  styles: PT.string,
  otherProps: PT.object,
}

