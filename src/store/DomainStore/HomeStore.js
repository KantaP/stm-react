import { observable, action } from "mobx";

class HomeStore {
  @observable hasErrored = false;
  @observable isLoading = true;
  @observable userData = Object.create(null)
  @observable items = [];
  @observable footerActive = ""
  @observable queryChild = ""

  @action 
  setFooter(footer) {
    this.footerActive = footer
  }

  @action
  setQueryChild(query) {
    this.queryChild = query
  }

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
