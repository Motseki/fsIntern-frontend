import React from 'react';

const MaskedParagraph = ({ text }) => {
  const length = text.length;
  const middleIndex = Math.floor(length / 2);
  const maskedMiddle = '*'.repeat(5);
  const firstHalf = text.substring(0, middleIndex - 2);
  const secondHalf = text.substring(middleIndex + 3);
  const styledText = firstHalf + maskedMiddle.substring(0, 2) + `<span style="margin-left: 5px;"></span>` + maskedMiddle.substring(2) + secondHalf;

  return (
    <p className='ct' dangerouslySetInnerHTML={{__html: styledText}} />
  );
};

export default MaskedParagraph;