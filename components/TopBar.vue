
<script setup lang="ts">
const { logout } = useAuth();
const handleLogout = () => {
  logout();
  navigateTo('/login');
};
</script>

<template>
  <header
    class="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white"
  >
    <h1 class="text-xl font-bold tracking-wide text-gray-900">
      SHAPES
    </h1>

    <button
      type="button"
      class="text-sm text-red-600 font-medium hover:text-red-700"
      @click="handleLogout"
    >
      Logout
    </button>
  </header>
</template>
