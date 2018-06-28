import MainStore from "../store/DomainStore/HomeStore";
import LoginStore from "../store/ViewStore/LoginViewStore";
import SettingStore from "../store/SettingStore/SettingStore"

export default function() {
	const mainStore = new MainStore();
	const loginForm = new LoginStore();
	const settingStore = new SettingStore();
	return {
		loginForm,
		mainStore,
		settingStore
	};
}
