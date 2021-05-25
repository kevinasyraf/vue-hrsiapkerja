import http from "../http-common";

class JenisLowonganDataService{
    getAll() {
        return http.get("/jenisLowongan");
    }

    get(id) {
        return http.get(`/jenisLowongan/${id}`);
    }

}

export default new JenisLowonganDataService();
