export function useLogger(context: string) {
  const info = (...args: any[]) => {
    console.info(`[${context}]`, ...args);
  };

  const error = (...args: any[]) => {
    console.error(`[${context}]`, ...args);
  };

  return { info, error };
}
