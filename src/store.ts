import { atom } from 'nanostores'; 

interface CounterState {
  count: number;
}

export const counterStore = atom<CounterState>({
  count: 0 
});

