export function getImgUrl(icon: string, baseUrl?: string) {
    const url = baseUrl || (typeof window !== 'undefined' ? window.location.origin : 'http://localhost');
    return new URL(`/src/assets/${icon}`, url).href;
  }
  