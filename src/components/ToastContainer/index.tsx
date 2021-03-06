/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';

import Toast from './Toast';

import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((message) => (
        <Toast key={message.id} message={message}></Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
