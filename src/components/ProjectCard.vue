<script>
  export default {
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  };
</script>

<template>
    <div class="project-card">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
      <router-link :to="`/projects/${project.id}`">View Details</router-link>
    </div>
</template>
  
<style scoped>
  .project-card {
    border: 1px solid #ddd;
    padding: 16px;
    margin: 8px;
    border-radius: 8px;
  }
</style>
  