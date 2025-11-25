
<script setup lang="ts">
const { login, isAuthenticated } = useAuth();

const email = ref('demo@shapes.com');
const password = ref('password123');
const error = ref('');

onMounted(() => {
  if (isAuthenticated.value) {
    navigateTo('/');
  }
});

const handleSubmit = async () => {
  error.value = '';
  const ok = login(email.value, password.value);
  if (!ok) {
    error.value = 'Invalid credentials';
    return;
  }
  await navigateTo('/');
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div
      class="w-full max-w-md bg-white rounded-2xl shadow-md p-8 space-y-6"
    >
      <h1 class="text-xl font-semibold text-gray-800 text-center">
        Shapes Grid – Login
      </h1>

      <form class="space-y-4" @submit.prevent="handleSubmit">
        <div class="space-y-1">
          <label class="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            v-model="email"
            type="email"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
          />
        </div>

        <div class="space-y-1">
          <label class="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            v-model="password"
            type="password"
            class="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
          />
        </div>

        <p v-if="error" class="text-sm text-red-600">
          {{ error }}
        </p>

        <button
          type="submit"
          class="w-full inline-flex justify-center items-center px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Login
        </button>

        <p class="text-xs text-gray-500 text-center">
          Hint: demo@shapes.com / password123
        </p>
      </form>
    </div>
  </div>
</template>
