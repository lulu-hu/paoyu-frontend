<template>
  <user-card-list :user-list="userList"/>

  <van-empty v-if="!userList || userList.length < 1" description="搜索结果为空" />

</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {useRoute, useRouter} from "vue-router";
import myAxios from "../plugins/myAxios";
import {Toast} from "vant";
import qs from "qs";
import UserCardList from "../components/UserCardList.vue";


const route = useRoute()
const {tags} = route.query;
const userList = ref([]);

onMounted(async () => {
  const userListData = await myAxios.get('/user/search/tags', {
     params : {
      tagNameList: tags
    },
    paramsSerializer: {
      serialize:(params) => {
        return qs.stringify(params, { indices: false })
      }}
  })
      .then(function (response) {
        console.log('/user/search/tags success', response);
        return response?.data;
      })
      .catch(function (error) {
        console.log('/user/search/tags error', error);
        Toast.fail('请求失败')
      })

        if(userListData){
          userListData.forEach(user =>{
            if(user.tags){
                user.tags = JSON.parse(user.tags);
            }
          })
          userList.value = userListData;
        }
})

// const mockUser = {
//   id: 12345,
//   username: 'lulu',
//   userAccount: '12345',
//   avatarUrl: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.dkGQxNAtuWfktPXQ0BCoFQHaKw?w=134&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
//   profile: 'adadl',
//   gender: 0,
//   phone: '12345678911',
//   email: '123456789@qq.com',
//   userRole: 0,
//   tags: ['java', 'c++', 'php', 'scale', 'php'],
//   createTime: new Date(),
// }




</script>

<style scoped>

</style>