
import PropTypes from 'prop-types'

export const ImageGalleryItem = ({id, smallUrl, tags, handleImageItemClick }) => (
    <li
        key={id}
        data-id={id}
        onClick={handleImageItemClick}
    >
        <img src={smallUrl} alt={tags} data-id={id} />
    </li>
);

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    smallUrl: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    handleImageItemClick: PropTypes.func.isRequired,
};