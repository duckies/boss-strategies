<script lang="ts">
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

    return h(
      'div',
      {
        class: {
          'raid-plan': true,
        },
      },
      [
        h(TabsHeader, {
          ref: 'tabs-header',
          activeTabIndex: this.activeTabIndex,
          tabs,
          'onUpdate:activeTabIndex': ($event) => (this.activeTabIndex = $event),
        }),
        h(
          'div',
          {
            class: 'raid-plan--content',
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
      ]
    );
  },
});
</script>

<style scoped lang="scss">
.raid-plan {
  --at-apply: overflow-hidden rounded-lg h-full;

  :deep(.tabs-header) {
    --at-apply: bg-surface-500;

    .tab-slider {
      --at-apply: bg-primary bg-opacity-80;
    }
  }

  &--content {
    --at-apply: overflow-hidden px-2 'md:px-4' rounded-bl-lg rounded-br-lg
      bg-surface-600;

    & > * {
      --at-apply: my-0;
    }
  }
}
</style>
