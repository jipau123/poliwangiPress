<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Berkas Panduan</div>

                    <div class="card-body">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input type="file" name="file" class="form-input">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <button type="submit" @click.prevent="uploadFile"
                                    class="btn btn-success">Upload</button>
                                </div>
                            </div>
                        </form>
                        <!-- <input type="file">
                        <div class="modal-footer">
                            <button class="btn btn-success ml-auto" type="submit">Upload</button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: new Form({
                    id : '',
                    file : '',
                })
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
