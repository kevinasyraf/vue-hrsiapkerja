import http from "../http-common";

class ApplyDataService{
    getAll() {
        return http.get("/apply");
    }

    get(id) {
        return http.get(`/apply/${id}`);
    }

}

export default new ApplyDataService();