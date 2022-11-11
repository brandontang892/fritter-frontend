<!-- Form for creating freets (block style) -->

<script>
import BlockForm from '@/components/common/BlockForm.vue';

export default {
  name: 'CreateLocalFreetForm',
  mixins: [BlockForm],
  data() {
    return {
      url: '/api/freets/local',
      method: 'POST',
      hasBody: true,
      fields: [
        {id: 'content', label: 'Content', value: ''}
      ],
      title: 'Create a local freet (viewable by people in the same city as you!)',
      refreshFreets: true,
      callback: () => {
        const message = 'Successfully created a local freet!';
        this.$set(this.alerts, message, 'success');
        setTimeout(() => this.$delete(this.alerts, message), 3000);
      }
    };
  }
};
</script>
