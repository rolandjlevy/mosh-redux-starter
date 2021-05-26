import { configureStore } from '@reduxjs/toolkit';

import reducer from './bugs-with-dux-and-toolkit';

export default function () {
  return configureStore({ reducer });
}