<template>
    <section>
        {{this.$store.state.user.data.user_name}}
        <router-link to="/friendcontacts"></router-link>
        <router-view></router-view>
    </section>
</template>