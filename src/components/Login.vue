<template>
<div class ="container-fluid" style="margin: 88px,350px,350px">
    <div class="container">
        <div class="row">
            <div class ="col">
                <h1>HRSiapKerja</h1><br>
                <img src="@/assets/18940.jpg" alt="" width="632" height="442" />
            </div>
            <div class ="col">
                <div class="container mt-2 mb-4">
                  <div class="col ml-auto mr-auto login-card">
                    <ul class="nav nav-pills nav-fill mb-1 border border-secondary rounded" id="pills-tab" role="tablist">
                      <li class="nav-item">
                        <a class="nav-link active" id="pills-pelamar-tab" data-toggle="pill" href="#pills-pelamar" role="tab" aria-controls="pills-pelamar" aria-selected="false">Pelamar</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="pills-user-tab" data-toggle="pill" href="#pills-user" role="tab" aria-controls="pills-user" aria-selected="true">User</a>
                      </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                      <!-- User -->
                      <div class="tab-pane fade" id="pills-user" role="tabpanel" aria-labelledby="pills-user-tab">
                        <div class="col-sm-12 border border-secondary shadow rounded pt-2 ml-auto p-2">
                          <form>
                            <div class="form-group">
                              <label>Username<span class="text-danger">*</span></label>
                              <input type="text" name="username" id="username" class="form-control" placeholder="Username" required>
                            </div><br>
                            <div class="form-group">
                              <label class="font-weight-bold">Password <span class="text-danger">*</span></label><br>
                              <input type="password" name="password" id="password" class="form-control" placeholder="Password" required>
                            </div><br>

                            <div class="form-group">
                              <input type="submit" value="Masuk" class="btn btn-block btn-primary">
                            </div>
                          </form>
                        </div>
                      </div>

                      <!-- Pelamar -->
                      <div class="tab-pane fade show active" id="pills-pelamar" role="tabpanel" aria-labelledby="pills-pelamar-tab">
                        <div class="col border border-secondary shadow rounded pt-2 ml-auto p-2">
                          <form>
                            <div class="form-group">
                              <label>Kode Unik <span class="text-danger">*</span></label>
                              <input type="text" name="kodeunik" id="kodeunik" class="form-control" placeholder="Kode Unik" required>
                              <div>* Kode Dikirim pada email</div>
                            </div><br>
                            <div class="form-group">
                                <input type="submit" value="Masuk" class="btn btn-primary btn-block">
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
}

</script>

<style>
html, body {
    font-family: 'Nunito', sans-serif;
}
h1{
    font-size: 60px;
    font-weight: bold;
}
label{
    font-size: 20px;
    font-weight: bold;
}
.btn{
    width: 250px;
}
.btn-block{
    width: 100%;
}
.login-card{
    margin-top: 50%;
}
</style>