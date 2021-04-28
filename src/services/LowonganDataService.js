import http from "../http-common";

class LowonganDataService {
    getAll() {
        return http.get("/lowongan");
    }

    getOne(id) {
        return http.get(`/lowongan/${id}`);
    }
    ditolakLowongan(id) {
        return http.put(`/lowongan/ditolak/${id}`);
    }
    disetujuiLowongan(id) {
        return http.put(`/lowongan/disetujui/${id}`);
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