<template>
    <div class="container">
    <div class="row mt-5">
    <div class="col-md-12">
       
    <div class="card">
              <div class="card-header">
                <h3 class="card-title">Daftar Draft Status</h3>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama Berkas</th>
                      <th>Direview</th>
                      <th>Diterima</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>1.</td>
                      <td>Modul 1-3</td>
                      <td><i class="fas fa-check-circle"></i></td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Modul 4-5</td>
                      <td>-</td>
                      <td><i class="fas fa-check-circle"></i></td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Modul 6</td>
                      <td>-</td>
                      <td><i class="fas fa-check-circle"></i></td>
                    </tr>

                  </tbody>
                   </table>
    </div>
    </div>

    </div>
    </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
