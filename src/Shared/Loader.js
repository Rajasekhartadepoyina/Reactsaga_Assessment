import React from "react";
import PropTypes from "prop-types";
import { Spinner, Button } from 'react-bootstrap'

/**
 * Mount the <CircularProgress> tag of material UI if loading is true else nothing
 * @param {Props} props - Component props which has loading true/false
 */
const Loader = (props) => {
    return props.loading && <Button variant="primary" className="loader">
        <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
        />
        Loading...
    </Button>
};


Loader.propTypes = {
    loading: PropTypes.bool,
};

Loader.defaultProps = {
    loading: false,
};

export default Loader;
