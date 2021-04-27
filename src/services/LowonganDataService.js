import http from "../http-common";

class LowonganDataService {
    getAll() {
        return http.get("/lowongan");
    }

    findByPosisi(posisi) {
        return http.get("/lowongan?posisi=${posisi}")
    }

    findByJenisLowongan(jenisLowongan) {
        return http.get("/lowongan?jenisLowongan=${jenisLowongan}")
    }

}

export default new LowonganDataService();