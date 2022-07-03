import type { Options } from '@popperjs/core';
import { createPopper } from '@popperjs/core';
import type { MaybeRef } from '../utils/types';

export default function usePopper(
  reference: MaybeRef<HTMLElement>,
  popper: MaybeRef<HTMLElement>,
  options?: Partial<Options>
) {
  const instance = ref<ReturnType<typeof createPopper>>();
  const referenceRef = isRef(reference) ? reference : ref(reference);
  const popperRef = isRef(popper) ? popper : ref(popper);
  const visible = ref(false);

  const create = () => {
    instance.value = createPopper(referenceRef.value, popperRef.value, options);
  };

  const destroy = () => {
    instance.value?.destroy();
    instance.value = null;
  };

  watch(
    () => [referenceRef, popperRef],
    () => {
      if (referenceRef.value && popperRef.value) {
        create();
      }
    }
  );

  const setEventListeners = (enabled?: boolean) => {
    instance.value?.setOptions((options) => ({
      ...options,
      modifiers: [...options.modifiers, { name: 'eventListeners', enabled }],
    }));
  };

  const show = () => {
    if (instance.value && referenceRef.value && popperRef.value) {
      visible.value = true;
      setEventListeners(true);
      instance.value.update();
    }
  };

  const hide = () => {
    if (instance.value && referenceRef.value && popperRef.value) {
      setEventListeners(false);
      visible.value = false;
    }
  };

  const toggle = () => (visible.value ? hide() : show());

  onClickOutside(referenceRef, hide);
  onMounted(create);
  onBeforeUnmount(destroy);

  return {
    visible: readonly(visible),
    show,
    hide,
    toggle,
  };
}
