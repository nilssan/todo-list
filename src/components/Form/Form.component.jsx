import React, { useState, useContext } from 'react';
import { Button, Form, Row, Typography } from 'antd';

import { openNotification } from '../../utils/functions/openNotification';

import { FormInput } from './FormInput.component';

import { TodoContext } from '../../App';

const { Title } = Typography;

export const TodoForm = () => {
  // Could replace useState with useReducer but I decided to keep things simple
  const [form, setForm] = useState();
  const [date, setDate] = useState();
  const [, dispatchTodos] = useContext(TodoContext);

  const hasDate = date ? true : false;

  const formSubmit = () => {
    if (form) {
      dispatchTodos({ type: 'ADD_TODO', payload: [form, date] });
    } else {
      openNotification('bottomLeft', 'Title must be a minimum of 5 letters');
    }
  };

  return (
    <>
      <Form onFinish={formSubmit}>
        <Title data-testid="todo">
          Add item 
        </Title>
        <Row type="flex" justify="center">
          <FormInput data-testid="todo" setForm={setForm} />
        </Row>
        <Row> 
          <Button type="primary" htmlType="submit" block>
            Add TODO
          </Button>
        </Row>
      </Form>
    </>
  );
};
