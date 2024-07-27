<template>
  <h1>Component V-Model</h1>
  <div>
    <label for="email">Email: </label>
    <input type="text" v-model="email" placeholder="Type your email . . ." />
    <p>Result: {{ email }}</p>
    <button @click="setEmailDefault">Set email default</button>
  </div>
  <div>
    <label for="userName">User name: </label>
    <input type="text" v-model="userName" placeholder="Type your name . . ." />
    <p>Result: {{ userName }}</p>
    <button @click="setUserNameDefault">Set user name default</button>
  </div>
</template>

<script setup>
const email = defineModel('vEmail')
const [userName, modifierCapitalize] = defineModel('VUserName', {
  set(value) {
    if (modifierCapitalize.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  }
})
console.log(modifierCapitalize)

const setEmailDefault = () => {
  email.value = 'Email Default from V-Component'
}
const setUserNameDefault = () => {
  userName.value = 'user Name Default from V-Component'
}
</script>
