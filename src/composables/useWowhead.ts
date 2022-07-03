export interface Tooltip {
  id: number;
  name: string;
  icon: string;
  tooltip: string;
  tooltip2: string;
  buff: string;
  quality: null;
  spells: {};
  buffspells: {};
  completion_category: number;
}

export function useWowhead() {
  const cache = useState<Map<number | string, Tooltip>>(
    'wowhead',
    () => new Map()
  );

  const getSpellByName = (name: string) => {
    for (const [id, tooltip] of cache.value) {
      if (tooltip.name === name) {
        return { id, tooltip };
      }
    }

    return null;
  };

  const getSpellById = async (id: number | string) => {
    if (cache.value.has(id)) {
      return cache.value.get(id);
    }

    const tooltip = await $fetch<Tooltip>(
      `https://www.wowhead.com/tooltip/spell/${id}`
    );

    cache.value.set(id, tooltip);

    return tooltip;
  };

  const getCache = async (spells: number[]) => {
    await Promise.all(spells.map((spell) => getSpellById(spell)));
  };

  return { getSpell: getSpellById, getSpellByName, getCache };
}
