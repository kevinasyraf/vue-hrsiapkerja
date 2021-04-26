import http from "../http-common";

class DivisiDataService{
    getAll() {
        return http.get("/divisi");
    }

    get(id) {
        return http.get(`/divisi/${id}`);
    }

}

export default new DivisiDataService();