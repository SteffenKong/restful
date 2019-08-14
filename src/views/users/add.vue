<template>
    <div>
        <!--居中-->
        <v-layout justify-center>
            <v-flex xs6>
                <!--使用卡片包住表单-->
                <v-card>
                    <!--elevation-1是阴影效果   title是标题的字体大小-->
                    <v-card-title class="elevation-1 title">添加用户</v-card-title>
                    <v-card-text>
                        <!--渲染一个表单-->
                        <v-form>
                            <!--渲染两个输入框-->
                            <v-text-field label="姓名" v-model="users.username"></v-text-field>
                            <v-text-field label="职业" v-model="users.Job"></v-text-field>
                        </v-form>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="add">添加</v-btn>
                            <v-btn flat color="primary">返回</v-btn>
                        </v-card-actions>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                users:{
                    'username':'',
                    'Job':''
                }
            }
        },
        methods: {
            add() {
                let url = "http://localhost:3000/users";
                axios.post(url,this.users).then(response=>{
                    const {status,data} = response;

                    if(status == 201) {
                        alert('添加成功');
                        this.$router.push('/vuetify/table');
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>