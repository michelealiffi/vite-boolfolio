<script>
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  components: {
    ProjectCard
  },
  data() {
    return {
      projects: {},
      currentPage: 1
    };
  },
  async created() {
    await this.fetchProjects();
  },
  methods: {
    async fetchProjects(page = 1) {
      try {
        const response = await axios.get(`http://localhost:8000/api/projects?page=${page}`);
        this.projects = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async nextPage() {
      if (this.projects.next_page_url) {
        this.currentPage++;
        await this.fetchProjects(this.currentPage);
      }
    },
    async prevPage() {
      if (this.projects.prev_page_url) {
        this.currentPage--;
        await this.fetchProjects(this.currentPage);
      }
    }
  }
};
</script>

<template>
  <div id="app">
    <h1 class="text-center">Projects</h1>
    <div class="text-center" v-if="projects.data">
      <ProjectCard v-for="project in projects.data" :key="project.id" :project="project" />
      <button class="btn mx-2" @click="prevPage" :disabled="!projects.prev_page_url">Previous</button>
      <button class="btn mx-2" @click="nextPage" :disabled="!projects.next_page_url">Next</button>
    </div>
  </div>
</template>
