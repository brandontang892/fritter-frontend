<!-- Form for creating freets (block style) -->

<script>
import BlockForm from '@/components/common/BlockForm.vue';

export default {
  name: 'CreateAnonFreetForm',
  mixins: [BlockForm],
  data() {
    return {
      url: '/api/freets/anonymous',
      method: 'POST',
      hasBody: true,
      fields: [
        {id: 'content', label: 'Content', value: ''}
      ],
      title: 'Create an anonymous freet',
      refreshFreets: true,
      callback: () => {
        const message = 'Successfully created an anonymous freet!';
        this.$set(this.alerts, message, 'success');
        setTimeout(() => this.$delete(this.alerts, message), 3000);
      }
    };
  }
};
</script>
