<script lang="ts">
import { h } from '#imports';
import TabsHeader from './TabsHeader.vue';

function isTab(slot: any) {
  return slot?.type?.tag === 'tab';
}

export default defineComponent({
  data() {
    return {
      activeTabIndex: 0,
    };
  },
  render() {
    const slots = this.$slots.default();
    const tabs = slots
      .filter((slot) => isTab(slot))
      .map((slot, index) => {
        return {
          label: slot?.props?.label || `${index + 1}`,
          active: slots?.props?.active || false,
        };
      });

    return h('div', { class: { 'tab-group': true } }, [
      h(TabsHeader, {
        ref: 'tabs-header',
        activeTabIndex: this.activeTabIndex,
        tabs,
        'onUpdate:activeTabIndex': ($event) => (this.activeTabIndex = $event),
      }),
      h(
        'div',
        {
          class: 'code-group-content',
          text: this.activeTabIndex,
        },
        slots.map((slot, index) =>
          h(
            'div',
            {
              style: {
                display: index === this.activeTabIndex ? 'block' : 'none',
              },
            },
            [
              isTab(slot)
                ? slot
                : h('div', {}, [slot.children?.default?.() || h('div')]),
            ]
          )
        )
      ),
    ]);
  },
});
</script>
