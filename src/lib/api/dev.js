import axios from 'axios';
import {API_BASE_URL} from '../../constants';

// IoT Hub로 데이터 연결 가능한 디바이스 스캔 요청
export const scanDev = (hubIp, hubPort) => {
	let hubURL = `http://${hubIp}:${hubPort}/hub/scan`
	//let hubURL = `${API_BASE_URL}/hub/scan`
	return axios.get(hubURL)
	.then(res => {
		console.log('Axios :: Scan Devs =====');
		console.log(res.data);
		console.log('res.data');
		return res;
	})
}

// IoT Hub로 디바이스 연결 요청
export const connectDev = (hubIp, hubPort, macAddr) => {
	const hubURL = `http://${hubIp}:${hubPort}/hub/connect/${macAddr}`;
	//const hubURL = `${API_BASE_URL}/hub/connect/${macAddr}`;
	return axios.post(hubURL)
	.then(res => {
		console.log('Axios :: Connect Dev =====');
		console.log(res.data);
		return res;
	})
}

// HubAdminPage로 왔을때 IoT Hub로 이미 연결된 디바이스 목록을 요청
export const requestConnectedDevs = (hubIp, hubPort) => {
	const hubURL = `http://${hubIp}:${hubPort}/dev/detail`;
	//const hubURL = `${API_BASE_URL}/dev/detail`;
	console.log('HubIp ', hubIp);
	console.log('hubPort ', hubPort);
	return axios.get(hubURL)
	.then(res => {
		console.log('Axios :: Request Connected Devs =====');
		console.log(res.data);
		return res;
	})
}

// 스킬 서버로 부터 장비의 디테일한 정보를 얻어옴
export const getDevDetail = (devType) => {
	const hubURL = `${API_BASE_URL}/hub/devs/${devType}`;
	console.log('AuthKey, ', devType);
	return axios.get(hubURL)
	.then(res => {
		console.log('Axios :: Get Dev Detail =====');
		console.log(res.data);
		return res;
	})
}