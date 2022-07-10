interface WowheadResponse {
  name: string;
  quality: number;
  icon: string;
}

export type TooltipType = 'spell' | 'item';

export interface TooltipBase {
  id: number;
  name: string;
  icon: string;
  type: TooltipType;
}

export interface ItemTooltip extends TooltipBase {
  type: 'item';
  quality: number;
}

export interface SpellTooltip extends TooltipBase {
  type: 'spell';
}

export type Tooltip = ItemTooltip | SpellTooltip;
export type TooltipFragment = Pick<Tooltip, 'id' | 'type'>;

export function useWowhead() {
  const cache = useState<Map<string, Tooltip>>('wowhead', () => new Map());
  const logger = useLogger('Wowhead');

  /**
   * Attempts to parse out a wowhead item or spell id.
   */
  const parseURL = (url: string): TooltipFragment => {
    const match = url.match(/wowhead\.com\/(spell|item)=(\d+)/);

    if (match) {
      const id = parseInt(match[2]);

      if (!isNaN(id)) {
        return { type: match[1] as TooltipType, id };
      }
    }

    return null;
  };

  const getTooltipCached = async (id: number, type: TooltipType) => {
    const key = `${type}-${id}`;

    if (cache.value.has(key)) {
      return cache.value.get(key);
    }

    const tooltip = await getTooltip(id, type);

    cache.value.set(key, tooltip);

    return tooltip;
  };

  const getTooltip = async (id: number, type: TooltipType) => {
    const resp = await $fetch<WowheadResponse>(
      `https://www.wowhead.com/tooltip/${type}/${id}`
    );

    const tooltip: Tooltip = {
      id,
      type,
      quality: resp.quality,
      name: resp.name,
      icon: resp.icon,
    };

    return tooltip;
  };

  const getTooltipByURL = (url: string) => {
    const fragment = parseURL(url);

    if (!fragment) {
      return null;
    }

    return getTooltipCached(fragment.id, fragment.type);
  };

  return {
    parseURL,
    getTooltipByURL,
  };
}
