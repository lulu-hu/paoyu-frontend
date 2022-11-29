<template>
  <template v-if="user">
    <van-cell title="当前用户" :value="user?.userName" />
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="我创建的队伍" is-link to="/user/team/create" />
    <van-cell title="我加入的队伍" is-link to="/user/team/join" />
  </template>

</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
// const user = {
//   id:1,
//   username:'lulu',
//   userAccount:'yupi',
//   avatarUrl: 'https://tse2-mm.cn.bing.net/th/id/OIP-C._u--TL_D0EQIhFrxzltDFgHaHa?w=215&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7',
//   gender:'男',
//   phone: '123456',
//   email: '123456@qq.com',
//   createTime: new Date(),
// }

const user = ref();

onMounted(async () =>{
  user.value = await getCurrentUser();
})

import {useRoute, useRouter} from "vue-router";

import {Toast} from "vant";
import {getCurrentUser} from "../services/user";

const router = useRouter()

const toEdit = (editKey: string, editName: string, currenValue: string) =>{
  router.push({
    path: '/user/user/edit',
    query:{
      editKey,
      editName,
      currenValue,
    }
  })
}
</script>

<style scoped>

</style>