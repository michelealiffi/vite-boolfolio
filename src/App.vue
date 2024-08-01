<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: []
    };
  },
  async created() {
    try {
      const response = await axios.get('http://localhost:8000/api/projects');
      this.projects = response.data;
      console.log(this.projects);  // Stampiamo in console i risultati
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<template>
  <div id="app">
    <h1>Projects</h1>
    <div v-if="projects.length">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>
