import React from "react";
// import PropTypes from "prop-types";
import classNames from "classnames";

export const Button = ({ children, onClick, className, disabled, active, ...attrs }) => {
  const onClickAction = (e) => {
    if (disabled) {
      e.preventDefault();
    } else {
      return onClick(e);
    }
  };

  const classes = classNames("btn", className, { active });

  const Tag = attrs.href ? "a" : "button";

  return (
    <Tag {...attrs} className={classes} disabled={disabled} onClick={onClickAction}>
      {children}
    </Tag>
  );
};

// Button.PropTypes = {
//   children: PropTypes.node,
//   onClick: PropTypes.func,
//   classNames: PropTypes.string,
//   disabled: PropTypes.bool,
//   active: PropTypes.bool,
// };

Button.defaultProps = {
  children: "Default button",
  onClick: () => {},
  classNames: "",
  disabled: false,
  active: false,
};
