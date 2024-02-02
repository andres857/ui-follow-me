import { atom, } from 'nanostores'; 
import { type APIResponseUbications } from '../src/types/api';

interface CounterState {
  count: number;
}

export const counterStore = atom<CounterState>({
  count: 0 
});

export const ubications = atom<APIResponseUbications>({
  id: 0,
  name: ''
})

