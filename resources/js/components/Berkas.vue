<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Berkas Panduan</div>

                    <div class="card-body">
                        <input type="file">
                        <div class="modal-footer">
                            <button class="btn btn-success ml-auto" type="submit">Upload</button>
                        </div>
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
