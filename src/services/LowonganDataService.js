import http from "../http-common";

class LowonganDataService {
    getAll() {
        return http.get("/lowongan");
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