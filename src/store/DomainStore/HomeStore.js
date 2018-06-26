import { observable, action } from "mobx";

class HomeStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable userData = Object.create(null)
  @observable items = [];

  @action
  fetchItems(data) {
    this.items = data;
    this.isLoading = false;
  }

  @action
  setUser(data) {
    this.userData = data
  }
}

export default HomeStore;
