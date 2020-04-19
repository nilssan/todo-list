import { v4 as uuidv4 } from 'uuid';

export const FORM_INITIAL_STATE = [
  {
    key: uuidv4(),
    title: 'Default row',
    date: '2020-04-15',
    completed: 'false',
    dataIndex: 0,
  },
];
