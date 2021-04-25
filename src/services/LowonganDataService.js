import http from "../http-common";

class LowonganDataService {
    getAll() {
        return http.get("/lowongan");
    }
}

export default new LowonganDataService();