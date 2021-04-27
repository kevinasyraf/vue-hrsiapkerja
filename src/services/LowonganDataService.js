import http from "../http-common";

class LowonganDataService {
    getAll() {
        return http.get("/lowongan");
    }

    // findByPosisi(posisi) {
    //     return http.get("/lowongan?posisi=${posisi}")
    // }
    //
    // findByJenisLowongan(jenis_lowongan) {
    //     return http.get("/lowongan?jenis_lowongan=${jenis_lowongan}")
    // }

}

export default new LowonganDataService();