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
                          <form name="form" @submit.prevent="handleLogin">
                            <div class="form-group">
                              <label for="username">Username<span class="text-danger">*</span></label>
                              <input v-model="user.username" v-validate="'required'" type="text" name="username" id="username" class="form-control" placeholder="Username">
                              <div
                                  v-if="errors.has('username')"
                                  class="alert alert-danger"
                                  role="alert"
                                >Username is required!</div>
                            </div>
                            <br>
                            <div class="form-group">
                              <label for="password" class="font-weight-bold">Password <span class="text-danger">*</span></label><br>
                              <input v-model="user.password" v-validate="'required'" type="password" name="password" id="password" class="form-control" placeholder="Password">
                              <div
                                  v-if="errors.has('password')"
                                  class="alert alert-danger"
                                  role="alert"
                                >Password is required!</div>
                            </div>
                            <br>
                            <div class="form-group">
                              <button class="btn btn-primary btn-block" :disabled="loading">
                                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                                <span>Masuk</span>
                              </button>
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
import User from '../models/user'

export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/dashboard');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/profile');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    }
  }
};
</script>

<style scoped>
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