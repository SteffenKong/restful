<template>
    <!--居中显示-->
    <v-layout justify-center>
        <!--无论什么设备都只占10个点-->
        <v-flex xs10 sm10 md10>
            <v-data-table
                    :headers="headers"
                    :items="users"
                    hide-actions
                    class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.id }}</td>
                    <td>{{ props.item.username }}</td>
                    <td>{{ props.item.Job }}</td>
                    <td>
                        <v-icon small>edit</v-icon>
                        <v-icon small>delete</v-icon>
                    </td>
                </template>
            </v-data-table>
        </v-flex>
    </v-layout>
</template>

<script>
    //导入axios
    import axios from 'axios'
    export default {
        data(){
            return {
                headers:[           //头部信息
                    {
                        text: 'id',
                        align: 'center',
                        value: 'id'
                    },
                    {
                        text: '用户名',
                        align: 'center',
                        value: 'username'
                    },
                    {
                        text: '职业',
                        align: 'center',
                        value: 'Job'
                    },
                    {
                        text: '操作',
                        align: 'center',
                        sortable: false,
                    }
                ],
                users:[     //用户数据
                    // {
                    //     id:1,
                    //     username:"SteffenKong",
                    //     job:"PHP安全开发工程师"
                    // },
                    // {
                    //     id:2,
                    //     username:"孔浩源",
                    //     job:"信息安全开发工程师"
                    // }
                ]
            }
        },

        created() {
            let url = 'http://localhost:3000/users';
            axios.get(url).then(response=> {
                 const {status,data} = response;

                 if(status == 200) {
                     this.users = data;
                 }
            });

        }
    }
</script>

<style scoped>

</style>