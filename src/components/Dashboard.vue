<template>
  <div>
    <WidgetsDropdown/>
    <CCard>
      <CCardBody>
        <CRow>
          <CCol sm="5">
            <h4 id="traffic" class="card-title mb-0">Total Lowongan dan Pelamar</h4>
          </CCol>
        </CRow>
        <MainChartExample style="height:300px;margin-top:40px;"/>
      </CCardBody>
      <CCardFooter>
        <CRow class="text-center">
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">Total Lowongan</div>
            <strong>{{countLowongan}} Lowongan</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="success"
              :value="countLowongan"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Total Pelamar</div>
            <strong>{{countPelamar}} Pelamar</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="info"
              :value="countPelamar"
            />
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
    <WidgetsBrand/>
  </div>
</template>

<script>
// import MainChartExample from './charts/MainChartExample'
// import WidgetsDropdown from './widgets/WidgetsDropdown'
// import WidgetsBrand from './widgets/WidgetsBrand'
import LowonganDataService from "../services/LowonganDataService";
import PelamarDataService from "../services/PelamarDataService";

export default {
  name: 'Dashboard',
  components: {
    // MainChartExample,
    // WidgetsDropdown,
    // WidgetsBrand
  },
  data () {
    return {
        lowongan: [],
        pelamar: [],
        countLowongan: 0,
        countPelamar: 0,
    };
  },
  methods: {
    retrievePelamar() {
        PelamarDataService.getAll().then(response => {
            this.pelamar = response.data;
            this.countPelamar = this.pelamar.length;
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    },
    retrieveLowongan() {
        LowonganDataService.getAll().then(response => {
            this.lowongan = response.data;
            this.countLowongan = this.lowongan.length;
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
    },
    countTotalLowongan() {
        this.countLowongan = this.lowongan.length;
        console.log(this.lowongan.length);
    },
    countTotalPelamar() {
        this.countPelamar = this.pelamar.length;
    },
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  },
   mounted() {
        this.retrieveLowongan();
        this.retrievePelamar();
        // this.countTotalLowongan();
        // this.countTotalPelamar();
    }
}
</script>
