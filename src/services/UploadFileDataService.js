import http from "../http-common";

class UploadFileDataService{
    create(data) {
        return http.post("/file",data);
    }

    get(id) {
        return http.get(`/file/${id}`);
    }

}

export default new UploadFileDataService();