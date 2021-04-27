import http from "../http-common";

class PelamarDataService {
    getAll() {
        return http.get("/pelamars");
    }

    getDivisi(divisi) {
        return http.get("/pelamars?divisi=${divisi}");
    }

}

export default new PelamarDataService();