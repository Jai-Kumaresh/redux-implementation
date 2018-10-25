import { Injectable } from '@angular/core';

import { HMSService } from '../../services/hms.service';

@Injectable()
export class AuthService {

	constructor(private hmsService: HMSService) {}

	getTenantLists () {
		return this.hmsService.getMethod('IRISORG/web/v1/default/get-tenant-list');
	}

	loginAuthenticate (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/user/login', paramDatas);
	}

	siteLogout () {
		return this.hmsService.postMethod('IRISORG/web/v1/user/logout', {});
	}

	forgetPassword (paramDatas) {
		return this.hmsService.postMethod('IRISORG/web/v1/user/request-password-reset', paramDatas)
	}

}
