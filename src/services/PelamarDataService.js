import http from "../http-common";

class PelamarDataService{
    getAll() {
        return http.get("/pelamars");
    }

    // getDivisi(divisi) {
    //     return http.get("/pelamars?divisi=${divisi}");
    // }

    get(id) {
        return http.get(`/pelamars/${id}`);
    }

    findByKodeUnik(kodeUnik) {
        // console.log("================================================findkodeunik================================================")
        return http.get(`/pelamars/submisi/${kodeUnik}`);
    }

    create(data) {
        return http.post("/pelamars", data);
    }

    update(id, data) {
        return http.put(`/pelamars/${id}`, data);
    }

    delete(id) {
        return http.delete(`/pelamars/${id}`);
    }

    findByNamaAndKesesuaian(nama, kesesuaian) {
        return http.get(`/pelamars?nama=${nama}&idKesesuaian=${kesesuaian}`);
    }
    // deleteAll() {
    //     return http.delete(`/tutorials`);
    // }
    //
}

export default new PelamarDataService();