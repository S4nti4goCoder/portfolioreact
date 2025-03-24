import PropTypes from "prop-types";

const StatInfoCard = ({ count, label }) => {
  return (
    <div className="flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[#caf0f8] to-[#ffffff] rounded-[14px] p-5">
      <h4 className="text-4xl font-medium md:text-5xl text-secondary">
        {count}
      </h4>
      <p className="text-sm md:text-[16px] font-normal text-black leading-6 whitespace-pre-line">
        {label}
      </p>
    </div>
  );
};

// Validación de Props con prop-types
StatInfoCard.propTypes = {
  count: PropTypes.number.isRequired, // Valida que 'count' sea un número y obligatorio
  label: PropTypes.string.isRequired, // Valida que 'label' sea una cadena y obligatorio
};

export default StatInfoCard;
