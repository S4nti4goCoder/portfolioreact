import PropTypes from "prop-types";

const ProjecCard = ({ imgUrl, title, tags }) => {
  return (
    <div className="h-full mx-2 overflow-hidden bg-white shadow-md rounded-xl">
      <img
        src={imgUrl}
        alt={title}
        className="object-cover w-full h-72 md:h-80"
      />
      <div className="px-4 py-5">
        <h3 className="overflow-hidden text-base font-semibold line-clamp-2 text-ellipsis">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs bg-orange-100 rounded text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Agregar validación de props
ProjecCard.propTypes = {
  imgUrl: PropTypes.string.isRequired, // Validar que imgUrl sea una cadena y requerido
  title: PropTypes.string.isRequired, // Validar que title sea una cadena y requerido
  tags: PropTypes.arrayOf(PropTypes.string).isRequired, // Validar que tags sea un array de cadenas y requerido
};

export default ProjecCard;
