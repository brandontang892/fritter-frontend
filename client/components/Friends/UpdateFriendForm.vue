<!-- Form for changing username (block style) -->

<script>
import BlockForm from '@/components/common/BlockForm.vue';

export default {
  name: 'UpdateFriendForm',
  mixins: [BlockForm],
  data() {
    return {
      url: '/api/friends',
      method: 'PUT',
      hasBody: true,
      fields: [
        {id: 'friend_id', label: 'friend_id', value: ''},
        {id: 'status', label: 'Status', value: ''}
      ],
      title: 'Update Friend',
      //refreshFriends: true,
      callback: () => {
        const message = 'Successfully updated friend status!';
        this.$set(this.alerts, message, 'success');
        setTimeout(() => this.$delete(this.alerts, message), 3000);
      }
    };
  }
};
</script>
