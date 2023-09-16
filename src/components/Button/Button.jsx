import PropTypes from 'prop-types'

export const Button = ({ handleClickRender }) => (
    <div>
        <button type="button" onClick={handleClickRender}>
            Load more
        </button>
    </div>
);

Button.propTypes = {
    handleClickRender: PropTypes.func.isRequired,
}