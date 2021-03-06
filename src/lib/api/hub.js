import axios from 'axios';
import ip from 'ip';
import publicIp from 'public-ip';
import { 
    HUB_EXTERNAL_PORT,
    API_BASE_URL
} from '../../constants';

// https://backend-intro.vlpt.us/6/01.html / https://velopert.com/3401

//skill 서버로 데이터 전송
export const registerHub = (hubInfo) => {
    const baseURL = `${API_BASE_URL}/hub`
    return axios
        .post(baseURL, hubInfo)
        .then(res => {
            console.log(res);
            return res;
        });
}


//허브 정보 조회
export const scanHub = () => {
    return publicIp.v4().then(natAddress => {
        console.log(ip.address());
        const baseURL = `http://${natAddress}:${HUB_EXTERNAL_PORT}/hub`
        return axios.get(baseURL, {
            timeout: 8000 //8초 이내로 응답이 오지 않으면 에러로 간주
        })
        .then(res => {
            console.log(res);
            return res;
        });
    })
}

// 로그 조회
export const getHubLogs = (hubMac) => {
    const baseURL = `${API_BASE_URL}/hubs/${hubMac}/logs`
    return axios
        .get(baseURL)
        .then(res => {
            console.log(res);
            return res;
        });
}

// 유저 검색 및 추가
export const searchUser = (hubIp, userEmail) => {
    const baseURL = `${API_BASE_URL}/${hubIp}/${userEmail}`
    return axios
        .post(baseURL)
        .then(res => {
            console.log(res);
            return res;
        });
}