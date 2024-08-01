<script>
import axios from 'axios';

export default {
  data() {
    return {
      project: null
    };
  },
  async created() {
    const projectId = this.$route.params.id;
    try {
      const response = await axios.get(`http://localhost:8000/api/projects/${projectId}`);
      this.project = response.data;
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<template>
    <div class="project-detail" v-if="project">
      <h1>{{ project.name }}</h1>
      <p>{{ project.description }}</p>
      <!-- Aggiungi ulteriori informazioni relazionate qui -->
    </div>
</template>

<style scoped>
.project-detail {
  padding: 20px;
}
</style>