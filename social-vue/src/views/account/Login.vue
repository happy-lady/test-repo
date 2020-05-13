<template>
    <div class="container">
          <!--form start-->
          <form class="form-container">
            <h1>Login</h1>
              <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" class="form-control">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword">Password:</label>
                <input type="password" class="form-control" id="exampleInputPassword">
              </div>
              <button type="button"><router-link to="/app/newmessage" style="text-decoration: none; color: black;">Sign in</router-link></button>
              <div>
                <a href="#" title="Reset Password" class="label" style="font-size: xx-small; color: black;">
                  Reset Password
                </a>
              </div>
          </form>
          <!--form end-->
        </div>
        
</template>