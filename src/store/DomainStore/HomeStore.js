import { observable, action } from "mobx";

class HomeStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable user = Object.create(null)
  @observable items = [];

  @action
  fetchItems(data) {
    this.items = data;
    this.isLoading = false;
  }

  @action
  setUser(data) {
    this.user = data
  }
}

export default HomeStore;
