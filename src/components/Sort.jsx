import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

const defaultProps = {
    placeholder: '',
    value: '',
    onChange: () => {},
};

const Button = glamorous.button(({ theme }) => ({
    flex: '0 0 auto',
    width: '10%',
    padding: '16px 24px',
}));

const Menu = glamorous.menu(({ theme }) => ({
    flex: '0 0 auto',
    width: '10%',
    padding: '16px 24px',
    // fontSize: 20,
    // fontWeight: 500,
    // color: theme.textColor,
    // border: 'none',
    // boxShadow: `0 1px 0 ${theme.dividerColor}`,
    // outline: 0,
    // zIndex: 0,

    // '&::placeholder': {
    //     color: theme.placeholderTextColor,
    // },
}));

const Item = glamorous.menuitem(({ theme }) => ({

}));



function Sort({ placeholder, list, handleClick, handleClose }) {
    return (
        <div>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Dashboard
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <Item onClick={handleClose}>Profile</Item>
            <Item onClick={handleClose}>My account</Item>
            <Item onClick={handleClose}>Logout</Item>
        </Menu>
        </div>
    );
}

Sort.propTypes = propTypes;
Sort.defaultProps = defaultProps;

export default Sort;
