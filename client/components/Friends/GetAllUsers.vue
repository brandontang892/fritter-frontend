<!-- Form for changing username (block style) -->

<script>
import SubmitButton from '@/components/common/SubmitButton.vue';

export default {
  name: 'GetAllUsers',
  mixins: [SubmitButton],
  data() {
    return {
      url: '/api/users/session',
      method: 'GET',
      title: 'Get All Users',
      callback: () => {
        const message = 'Successfully retrieved all users!';
        this.$set(this.alerts, message, 'success');
        setTimeout(() => this.$delete(this.alerts, message), 3000);
      }
    };
  }
};
</script>
