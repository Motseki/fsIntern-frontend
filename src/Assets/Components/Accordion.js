import React from 'react';

function Accordion(props) {
  const { title, children } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const handleAccordionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleAccordionClick}>
        <span>{title}</span>
        <span className="icon">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;