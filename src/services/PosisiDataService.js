import http from "../http-common";

class PosisiDataService{
    getAll() {
        return http.get("/posisi");
    }

    get(id) {
        return http.get(`/posisi/${id}`);
    }

}

export default new PosisiDataService();