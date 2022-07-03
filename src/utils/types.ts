import type { Ref } from 'vue';

/**
 * Maybe it's a ref, or not.
 */
export type MaybeRef<T> = T | Ref<T>;
