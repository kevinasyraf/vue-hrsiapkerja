import http from "../http-common";

class StatusDataService{
    getAll() {
        return http.get("/status");
    }

    get(id) {
        return http.get(`/status/${id}`);
    }

}

export default new StatusDataService();