<template>
  <form class="m-4">
    <fieldset class="form-group">
      <legend>Schedule a Message</legend>

      <div class="form-group">
        <label class="form-control-label" for="provider">Provider</label>
        <input
          class="form-control"
          type="text"
          id="provider"
          placeholder="Facebook, Twitter, Instagram, etc"
        />
      </div>
      <!-- form-group -->

      <div class="form-group">
        <label class="form-control-label" for="date">Date</label>
        <input class="form-control" type="date" id="date" placeholder="MM/DD/YYYY" />
      </div>
      <!-- form-group -->

      <div class="form-group">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" rows="3"></textarea>
      </div>
      <!-- form-group -->

      <button class="btn btn-primary mt-4" type="submit">Schedule</button>
    </fieldset>
    <!-- fieldset -->
  </form>
</template>