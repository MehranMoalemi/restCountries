import {create} from 'zustand';


const useStore = create<StoreStateTypes>((set) => ({
  filter: '',
  search: '',
  setFilter: (filter) => set({ filter }),
  setSearch: (search) => set({ search }),
}));

export default useStore;
