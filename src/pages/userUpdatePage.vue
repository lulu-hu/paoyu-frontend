<template>
  <template v-if="user">
    <van-cell title="昵称" is-link  to="/user/user/edit" :value="user.userName" @click="toEdit('userName','昵称',user.userName)"/>
    <van-cell title="账号"  :value="user.userAccount" />
    <van-cell title="头像" >
      <img style="height: 48px"  :src="user.avatarUrl">
    </van-cell>
    <van-cell title="性别" is-link  :value="user.gender" @click="toEdit('gender','性别',user.gender)" />
    <van-cell title="电话"   :value="user.phone" @click="toEdit('phone','电话',user.phone)"/>
    <van-cell title="邮箱" is-link to="/user/user/edit" :value="user.email" @click="toEdit('email','邮箱',user.email)" />
    <van-cell title="注册时间" :value="user.createTime"  />
  </template>

</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";

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