import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [{
	path: '',
	title: 'Administrative Module',
	icon: 'mdi mdi-view-dashboard',
	class: 'has-arrow',
	extralink: false,
	submenu: [{
		path: '/configuration/roles',
		title: 'Roles',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/role-rights',
		title: 'Role Rights',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/specialities',
		title: 'Specialities',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/patient-categories',
		title: 'Patient Categories',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/charge-categories',
		title: 'Charge Category',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/charge-items',
		title: 'Room Charge Item',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}]
}, {
	path: '',
	title: 'User Module',
	icon: 'mdi mdi-account-settings-variant',
	class: 'has-arrow',
	extralink: false,
	submenu: [{
		path: '/configuration/user-registration',
		title: 'User Registration',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/user-roles',
		title: 'User Roles',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/user-branches',
		title: 'User Branches',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}]
}, {
	path: '',
	title: 'Ward Management',
	icon: 'fas fa-wheelchair',
	class: 'has-arrow',
	extralink: false,
	submenu: [{
		path: '/configuration/floors',
		title: 'Floors',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/wards',
		title: 'Wards',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/bed-types',
		title: 'Bed Type',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/room',
		title: 'Room',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/room-and-bed-type',
		title: 'Room & Bed Type',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}]
}, {
	path: '',
	title: 'Charges Configuration',
	icon: 'fas fa-rupee-sign',
	class: 'has-arrow',
	extralink: false,
	submenu: [{
		path: '/configuration/room-charges',
		title: 'Room Charge',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/charges-per-category',
		title: 'Charge For Category',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}]
}, {
	path: '',
	title: 'Doctor’s Configuration',
	icon: 'fas fa-user-md',
	class: 'has-arrow',
	extralink: false,
	submenu: [{
		path: '/configuration/doctor-schedule',
		title: 'Doctor Schedule',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}]
}, {
	path: '',
	title: 'Miscellaneous',
	icon: 'mdi mdi-hospital-building',
	class: 'has-arrow',
	extralink: false,
	submenu: [{
		path: '/configuration/alerts',
		title: 'Alerts',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/internal-code-settings',
		title: 'Internal Code Settings',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/master-countries',
		title: 'Master Country',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/master-states',
		title: 'Master State',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/master-cities',
		title: 'Master City',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/patient-grouping',
		title: 'Patient Grouping',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}]
}, {
	path: '/configuration/vital-management',
	title: 'Vitals Management',
	icon: 'mdi mdi-heart-pulse',
	class: '',
	extralink: false,
	submenu: []
}, {
	path: '',
	title: 'Pharmacy Management',
	icon: 'mdi mdi-settings',
	class: 'has-arrow',
	extralink: false,
	submenu: [{
		path: '/configuration/brands',
		title: 'Brand',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/brand-representatives',
		title: 'Brand Rep',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/products',
		title: 'Products',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/suppliers',
		title: 'Supplier',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/patient-groups',
		title: 'Patient Group',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '/configuration/hsn-codes',
		title: 'HSN Code',
		icon: 'mdi mdi-adjust',
		class: '',
		extralink: false,
		submenu: []
	}, {
		path: '',
		title: 'Prod & Brand Config.',
		icon: 'mdi mdi-wrench',
		class: 'has-arrow',
		extralink: false,
		submenu: [{
			path: '/configuration/brand-divisions',
			title: 'Brand Division',
			icon: 'mdi mdi-adjust',
			class: '',
			extralink: false,
			submenu: []
		}, {
			path: '/configuration/drug-classes',
			title: 'Drug Class',
			icon: 'mdi mdi-adjust',
			class: '',
			extralink: false,
			submenu: []
		}, {
			path: '/configuration/generic-names',
			title: 'Generic Names',
			icon: 'mdi mdi-adjust',
			class: '',
			extralink: false,
			submenu: []
		}, {
			path: '/configuration/drug-and-generic',
			title: 'Drug Class & Generic',
			icon: 'mdi mdi-adjust',
			class: '',
			extralink: false,
			submenu: []
		}, {
			path: '/configuration/routes',
			title: 'Routes',
			icon: 'mdi mdi-adjust',
			class: '',
			extralink: false,
			submenu: []
		}, {
			path: '/configuration/product-types',
			title: 'Product Type',
			icon: 'mdi mdi-adjust',
			class: '',
			extralink: false,
			submenu: []
		}, {
			path: '/configuration/vats',
			title: 'Vat',
			icon: 'mdi mdi-adjust',
			class: '',
			extralink: false,
			submenu: []
		}, {
			path: '/configuration/gst',
			title: 'Gst',
			icon: 'mdi mdi-adjust',
			class: '',
			extralink: false,
			submenu: []
		}, {
			path: '/configuration/packing-unit',
			title: 'Packing Unit',
			icon: 'mdi mdi-adjust',
			class: '',
			extralink: false,
			submenu: []
		}]
	}]
}];
