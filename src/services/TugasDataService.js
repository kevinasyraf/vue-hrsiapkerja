import http from "../http-common";

class TugasDataService{
    getAll() {
        return http.get("/tugas");
    }

    get(id) {
        return http.get(`/tugas/${id}`);
    }

}

export default new TugasDataService();