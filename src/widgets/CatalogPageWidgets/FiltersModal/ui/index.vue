<!-- <script setup lang="ts">
interface FilterModalProps {
  title?: string;
}

defineProps<FilterModalProps>();
</script>

<template>
  <h1>modal</h1>
</template> -->

<template>
  <div v-if="showModal" class="modal-overlay">
    <div class="modal-container">
      <div class="modal-header">
        <h2>{{ title }}</h2>
        <button @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, watch } from 'vue';

const props = defineProps({
  title: String,
  visible: Boolean,
});

const showModal = ref(false);

onMounted(() => {
  showModal.value = props.visible || false;
});

const closeModal = () => {
  showModal.value = false;
};

const watchVisible = () => {
  showModal.value = props.visible || false;
};

watch(() => props.visible, watchVisible);
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}

.modal-header h2 {
  margin: 0;
}

.modal-header button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #333;
}
</style>
