import http from "../http-common";

class LowonganDataService {
    // eslint-disable-next-line no-unused-vars
    
    getAll() {
        return http.get("/lowongan");
    }

    findByPosisi(posisi) {
        return http.get("/lowongan?posisi=${posisi}")
    }

    findByJenisLowongan(jenisLowongan) {
        return http.get("/lowongan?jenisLowongan=${jenisLowongan}")
    }
    get(id) {
        return http.get(`/lowongan/${id}`);
    }

    // // eslint-disable-next-line no-unused-vars
    // findByPosisi(posisi) {
    //     return http.get("/lowongan?posisi=${posisi}")
    // }
    //
    // // eslint-disable-next-line no-unused-vars
    // findByJenisLowongan(jenisLowongan) {
    //     return http.get("/lowongan?jenisLowongan=${jenisLowongan}")
    // }

}

export default new LowonganDataService();