/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import { useTransition } from 'react-spring';
import Toast from './Toast';

import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messageWithTransistions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messageWithTransistions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item}></Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
