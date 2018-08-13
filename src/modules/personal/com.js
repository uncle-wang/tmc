import {api} from './../../service';
export default {
	data: function() {
		return {
		};
	},
	methods: {
		logout: function() {
			api.logout();
		}
	},
	filters: {
		cut: function(tel) {
			if (tel) {
				tel = tel.toString();
				return tel.substr(7);
			}
			return '';
		}
	}
};
