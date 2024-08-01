<script>
import axios from 'axios';
import CreateProject from '../components/CreateProject.vue';

export default {
    name: 'Form',
    components: {
        CreateProject
    },
  data() {
    return {
      project: {
        name: '',
        description: '',
        image: null
      }
    };
  },
  methods: {
    handleImageUpload(event) {
      this.project.image = event.target.files[0];
    },
    async createProject() {
      const formData = new FormData();
      formData.append('name', this.project.name);
      formData.append('description', this.project.description);
      if (this.project.image) {
        formData.append('image', this.project.image);
      }

      try {
        await axios.post('http://localhost:8000/api/projects', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
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
        
        <label for="image">Image</label>
        <input type="file" @change="handleImageUpload" />
        
        <button type="submit">Create</button>
      </form>
    </div>
  </template>

  <style scoped>
.create-project {
  padding: 20px;
}
</style>