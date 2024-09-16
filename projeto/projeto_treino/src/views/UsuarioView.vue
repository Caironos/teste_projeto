<script setup lang="ts">

  import { RouterLink, RouterView } from 'vue-router'
  import { ref, watchEffect, onMounted, onUpdated, onActivated, computed } from 'vue';
  import{ useRoute } from 'vue-router'

  import md5 from 'md5';
  const route = useRoute()

  const loadAuthenticated = async () => {
    const myHeaders: Headers = new Headers()

    const myInit: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    }
  
    const _id = route.params.id 
    const myRequest = new Request('/services/user/' + _id, myInit)

    fetch(myRequest)
      .then((r) => r.json())
      .then((obj: { id: number; user: { name: string; email: string } }) =>{
        user.value.name = obj.user.name
        user.value.email = obj.user.email
      })
  }

  onMounted(loadAuthenticated)

  interface User {
      name: string;
      email: string;
  }

  const user = ref<User>({
    name: '',
    email: ''
  })
</script>

<template>

  <div class="container">
      <div class="row">
        <div class="col">
        &nbsp;
        </div>
      </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col">
      </div>
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            User Profile
          </div>
          <div class="card-body">
            <div class="container">
              <div class="row">
                <div class="col">
                  <h4 class="card-title">{{user.name}}</h4>
                  <p class="card-text">
                    <b>E-mail:</b> <a :href="'mailto:' + user.email">{{user.email}}</a>
                  </p>
                </div>
                <div class="col">
                  <img :src="'https://www.gravatar.com/avatar/' + md5(user.email) + '?s=200'" class="rounded float-end" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>