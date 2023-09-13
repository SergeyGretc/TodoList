import React, { useCallback, useEffect, useState } from "react";

type RBprops = {
  onClick: () => Promise<void>;
  iconName?: string;
  iconSize?: string;
  className?: string;
  children?: React.ReactNode;
};
const RemoveButton: React.FC<RBprops> = ({
  onClick,
  iconName,
  iconSize,
  children,
  className,
}) => {
  const [icon, setIcon] = useState(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleClick = () => {
    if (disabled) return;

    setDisabled(true);
    onClick().then(() => setDisabled(false));
  };

  const renderLoader = useCallback(() => {
    if (disabled) {
      return (
        <div
          className="spinner-border"
          style={{ display: "inline-flex", width: "24px", height: "24px" }}
          role="status"
        />
      );
    }
  }, [disabled]);

  const renderIcon = useCallback(() => {
    if (disabled) return null;

    if (icon) {
      return (
        <div
          dangerouslySetInnerHTML={{ __html: icon }}
          className="d-flex align-items-center justify-content-center"
          style={{
            width: iconSize || "24px",
            height: iconSize || "24px",
          }}
        />
      );
    }
  }, [disabled, icon, iconSize]);

  useEffect(() => {
    if (iconName) {
      import(`!!raw-loader!./icons/${iconName}.svg`).then((module) => {
        setIcon(module.default);
      });
    }
  }, [iconName]);

  return (
    <button
      className={["btn", "ms-auto", "d-flex", "align-items-center", className]
        .filter(Boolean)
        .join(" ")}
      style={{ opacity: disabled ? 0.6 : 1, gap: "8px" }}
      onClick={handleClick}
    >
      {children}
      {renderLoader()}
      {renderIcon()}
    </button>
  );
};

export default RemoveButton;
