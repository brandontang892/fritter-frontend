<!-- Form for getting freets (all, from user) (inline style) -->

<script>
import SubmitButton from '@/components/common/SubmitButton.vue';

export default {
  name: 'GetAnonFreetsForm',
  mixins: [SubmitButton],
  data() {
    return {value: this.$store.state.freets};
  },
  methods: {
    async submit() {
      this.$store.commit('updateFilter', '');
      this.value = ''; // Clear filter to show all users' freets
      this.$store.commit('refreshAnonFreets');

      this.$set(this.alerts, e, 'error');
      setTimeout(() => this.$delete(this.alerts, e), 3000);
    }
  }
};
</script>
