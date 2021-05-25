import http from "../http-common";

class StatusDataService{
    getAll() {
        return http.get("/status");
    }

    get(id) {
        return http.get(`/status/${id}`);
    }

    update(id, data) {
        return http.put(`/status/${id}`, data);
    }

}

export default new StatusDataService();