import http from "../http-common";

class KesesuaianDataService{
    getAll() {
        return http.get("/kesesuaian");
    }

    get(id) {
        return http.get(`/kesesuaian/${id}`);
    }

}

export default new KesesuaianDataService();