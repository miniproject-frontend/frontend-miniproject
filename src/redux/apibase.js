import axios from "axios";

//베이스 URL 설정
const apibase = axios.create({
  baseURL: "https://3.36.106.108/",
});

// 요청 인터셉터(request)
apibase.interceptors.request.use(
  function (config) {
    // 요청이 전송되기전에 실행이 필요한 작업
    console.log("request start", config);
    return config;
  },
  function (error) {
    // 요청에 오류가 있을시 수행할 작업
    console.log("request error", error);
    return Promise.reject(error);
  }
);

// 응답 인터셉터(response)
apibase.interceptors.response.use(
  function (response) {
    // 통신 범위 200대 안에 있을시 실행
    console.log("get response", response);
    return response;
  },
  function (error) {
    // 200범위를 벗어나는 응답 오류 발생시 실행
    console.log("response error", error);
    return Promise.reject(error);
  }
);

export default apibase;
