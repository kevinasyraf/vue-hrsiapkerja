import http from "../http-common";

class PelamarDataService{
    getAll() {
        return http.get("/pelamars");
    }

    get(id) {
        return http.get(`/pelamars/${id}`);
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

    // deleteAll() {
    //     return http.delete(`/tutorials`);
    // }
    //
    // findByTitle(title) {
    //     return http.get(`/tutorials?title=${title}`);
    // }
}

export default new PelamarDataService();