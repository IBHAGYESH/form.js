export default class Storage {
  constructor(storageId) {
    this.storageId = storageId;
    this.initStore();
  }

  initStore = () => {
    if (!localStorage.getItem(this.storageId)) {
      localStorage.setItem(this.storageId, JSON.stringify([]));
    }
  };

  readStoreData = () => {
    return JSON.parse(localStorage.getItem(this.storageId)) || [];
  };

  storeRowDataToStore = (rowData) => {
    // fetch old data
    const store = this.readStoreData();

    const dataExists = store.find((data) => data.dataId.value === rowData.dataId.value);

    if (dataExists) {
      const newStore = store.map((data) => {
        if (data.dataId.value === rowData.dataId.value) {
          data = rowData;
        }
        return data;
      });
      localStorage.setItem(this.storageId, JSON.stringify(newStore));
      return newStore;
    }

    store.push(rowData);
    localStorage.setItem(this.storageId, JSON.stringify(store));
    return store;
  };

  deleteRowDataFromStore = (dataId) => {
    // fetch old data
    const store = this.readStoreData();

    const dataExists = store.find((data) => data.dataId.value === dataId);

    if (dataExists) {
      const newStore = store.filter((data) => data.dataId.value !== dataId);
      localStorage.setItem(this.storageId, JSON.stringify(newStore));
    }
  };
}
