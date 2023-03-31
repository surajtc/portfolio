import { Vote } from "@/types";

interface Storage {
  state: boolean;
  key: string;
  data: Vote;
}

export const handleStorage = ({ state, key, data }: Storage) => {
  if (state) {
    localStorage.setItem(key, JSON.stringify(data));
  } else {
    localStorage.removeItem(key);
  }
};

export const getLocalStorage = (key: string) => !!localStorage.getItem(key);
