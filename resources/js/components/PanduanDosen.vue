<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Panduan</div>

                    <div class="card-body">
                        <form class="form-horizontal">
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input @change="updateFile" type="file" name="file" class="form-input">
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
        },

        methods: {

            // getProfilePhoto() {
            //     let file = (this.form.file.length > 200) ? this.form.file : "img/panduan/"+ this.form.file;
            //     return file;
            // },
            uploadFile() {
                this.$Progress.start();
                // if(this.form.password == ''){
                //     this.form.password = undefined;
                // }
                this.form.put('api/usulan')
                .then(()=>{
                    Fire.$emit('AfterCreate');
                    this.$Progress.finish();
                })
                .catch(()=>{
                    this.$Progress.fail();
                });
            },
            updateFile(e) {
                // console.log('uploading');
                let file = e.target.files[0];
                console.log(file);
                let reader = new FileReader();
                if(file['size'] < 10111775) {
                    reader.onloadend = (file) => {
                    // console.log('RESULT', reader.result)
                    this.form.file = reader.result;
                    }
                    reader.readAsDataURL(file);
                } else {
                    swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'You are uploading a large file',
                    })
                }
                
            }
        },
        created() {
            axios.get("api/usulan")
            .then(({ data }) => (this.form.fill(data)));
        }
    }
</script>
