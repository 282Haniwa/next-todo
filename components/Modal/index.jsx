import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';

const Modal = styled.div`
  position: fixed;
  min-height: 100px;
  min-width: 200px;
  background-color: ${props => props.theme.colors.paper};
  ${props => {
    let style;
    switch (props.position) {
      case 'top':
        style = css`
          top: 0;
          left: 0;
          width: 100vw;
        `;
        break;
      case 'bottom':
        style = css`
          left: 0;
          bottom: 0;
          width: 100vw;
        `;
        break;
      case 'left':
        style = css`
          top: 0;
          left: 0;
          height: 100vh;
        `;
        break;
      case 'right':
        style = css`
          top: 0;
          right: 0;
          height: 100vh;
        `;
        break;
      case 'center':
      default:
        style = css`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
        break;
    }
    return style;
  }}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default props => {
  const { position = 'center', open = false, onClose, ...other } = props;

  const handleClose = reason => event => {
    onClose && onClose(event, reason);
  };

  useEffect(() => {
    const handleEscapeKeyDown = event => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      // escapeキーが押されたら
      if (event.keyCode === 27) {
        handleClose('escapeKeyDown')(event);
      }
    };

    document.addEventListener('keydown', handleEscapeKeyDown);
    return () => {
      removeEventListener('keydown', handleEscapeKeyDown);
    };
  });

  return (
    <div hidden={!open}>
      <Overlay onClick={handleClose('overlayClick')} />
      <Modal position={position} {...other} />
    </div>
  );
};
