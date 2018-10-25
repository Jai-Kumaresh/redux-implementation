import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import * as moment from 'moment';

@Injectable({
	providedIn: 'root'
})
export class HMSService {

	baseUrl = environment.baseUrl;
	accessToken = localStorage.getItem('access_token');

	constructor(private http: HttpClient) {}

	httpOptions = {
		headers: new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
			'x-domain-path': window['origin']
		})
	};

	// Authentication Proccess

	getMethod (reqPath) {
		var curPath = window['location']['pathname'].replace(/\//g, '.');
		curPath = curPath[0] == '.' ? curPath.substring(1, curPath.length) : curPath;
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', curPath);
		// console.log(curPath)
		this.accessToken = localStorage.getItem('access_token');
		if (this.accessToken) {
			if (reqPath.indexOf('?') != -1) {
				return this.http.get(this.baseUrl + reqPath + '&access-token=' + this.accessToken, this.httpOptions);
			} else {
				return this.http.get(this.baseUrl + reqPath + '?access-token=' + this.accessToken, this.httpOptions);
			}
		} else {
			return this.http.get(this.baseUrl + reqPath, this.httpOptions);
		}
	}

	postMethod (reqPath, paramDatas) {
		var curPath = window['location']['pathname'].replace(/\//g, '.');
		curPath = curPath[0] == '.' ? curPath.substring(1, curPath.length) : curPath;
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', curPath);
		this.accessToken = localStorage.getItem('access_token');
		if (this.accessToken) {
			if (reqPath.indexOf('?') != -1) {
				return this.http.post(this.baseUrl + reqPath + '&access-token=' + this.accessToken, paramDatas, this.httpOptions);
			} else {
				return this.http.post(this.baseUrl + reqPath + '?access-token=' + this.accessToken, paramDatas, this.httpOptions);
			}
		} else {
			return this.http.post(this.baseUrl + reqPath, paramDatas, this.httpOptions);
		}
	}

	putMethod (reqPath, paramDatas) {
		var curPath = window['location']['pathname'].replace(/\//g, '.');
		curPath = curPath[0] == '.' ? curPath.substring(1, curPath.length) : curPath;
		var reqTime = new Date();
		this.httpOptions.headers = this.httpOptions.headers.set('request-time', moment().format('YYYY-MM-DD hh:mm:ss'));
		this.httpOptions.headers = this.httpOptions.headers.set('config-route', curPath);
		this.accessToken = localStorage.getItem('access_token');
		if (this.accessToken) {
			if (reqPath.indexOf('?') != -1) {
				return this.http.put(this.baseUrl + reqPath + '&access-token=' + this.accessToken, paramDatas, this.httpOptions);
			} else {
				return this.http.put(this.baseUrl + reqPath + '?access-token=' + this.accessToken, paramDatas, this.httpOptions);
			}
		} else {
			return this.http.put(this.baseUrl + reqPath, paramDatas, this.httpOptions);
		}
	}

}
