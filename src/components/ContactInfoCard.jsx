import PropTypes from 'prop-types';

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 px-4 py-3 mb-5 border border-orange-100 rounded bg-orange-50">
      <div className="flex items-center justify-center w-10 h-10 text-xl text-white rounded-lg bg-gradient-primary">{icon}</div>
      <p className="text-xs text-secondary md:text-sm">{text}</p>
    </div>
  );
};

ContactInfoCard.propTypes = {
  icon: PropTypes.node.isRequired, 
  text: PropTypes.string.isRequired, 
};

export default ContactInfoCard;
