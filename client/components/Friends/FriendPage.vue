<!-- Page for account settings and management -->
<!-- User should be authenticated in order to see this page -->

<template>
  <main>
    <section>
      <header>
        <h2>Friend Management for @{{ $store.state.username }}</h2>
      </header>
      <AddFriendForm />
      <UpdateFriendForm />

    </section>
  </main>
</template>

<script>
import AddFriendForm from '@/components/Friends/AddFriendForm.vue';
import UpdateFriendForm from '@/components/Friends/UpdateFriendForm.vue';

export default {
  name: 'FriendPage',
  components: {
    AddFriendForm,
    UpdateFriendForm,
  }
};
</script>
