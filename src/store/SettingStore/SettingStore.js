import { observable, action } from "mobx";

class SettingStore {
    @observable noti_email = false;
    @observable noti_phone = false;

    @action
    setNotification(key , value) {
        if(key === 'email') this.noti_email = value
        if(key === 'phone') this.noti_phone = value
    }
}

export default SettingStore