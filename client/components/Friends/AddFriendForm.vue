<!-- Form for changing username (block style) -->

<script>
import BlockForm from '@/components/common/BlockForm.vue';

export default {
  name: 'AddFriendForm',
  mixins: [BlockForm],
  data() {
    return {
      url: '/api/friends',
      method: 'POST',
      hasBody: true,
      fields: [
        {id: 'UserA', label: 'UserA', value: ''},
        {id: 'UserB', label: 'UserB', value: ''},
        {id: 'status', label: 'Status', value: ''}
      ],
      title: 'Add Friend',
      //refreshFriends: true,
      callback: () => {
        const message = 'Successfully added new friend!';
        this.$set(this.alerts, message, 'success');
        setTimeout(() => this.$delete(this.alerts, message), 3000);
      }
    };
  }
};
</script>
