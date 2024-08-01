<script>
import axios from 'axios';

export default {
  data() {
    return {
      project: {
        name: '',
        description: ''
      }
    };
  },
  methods: {
    async createProject() {
      try {
        await axios.post('http://localhost:8000/api/projects', this.project);
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<template>
    <div class="create-project">
      <h1>Create New Project</h1>
      <form @submit.prevent="createProject">
        <label for="name">Name</label>
        <input type="text" v-model="project.name" required />
        
        <label for="description">Description</label>
        <textarea v-model="project.description" required></textarea>
        
        <button type="submit">Create</button>
      </form>
    </div>
</template>

<style scoped>
.create-project {
  padding: 20px;
}
</style>