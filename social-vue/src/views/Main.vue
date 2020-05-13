<template>
  <div>
    <nav class="navbar bg-light navbar-light navbar-expand">
      <div class="navbar-nav">
        <a class="nav-item nav-link d-inline-block" href="#">Providers</a>
        <a class="nav-item nav-link" href="#">Message Queue</a>
        <router-link class="nav-item nav-link active" to="/app/newmessage">New Message</router-link>
      </div>
      <div class="navbar-nav ml-auto">
         <router-link class="nav-item nav-link navbar-light" to="/app/account/login">Logout</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>