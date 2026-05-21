export function qs<T extends HTMLElement>(selector: string, parent?: HTMLElement): T {
  const el = (parent || document).querySelector<T>(selector);
  if (!el) throw new Error(`Element not found: ${selector}`);
  return el;
}

export function qsa<T extends HTMLElement>(selector: string, parent?: HTMLElement): NodeListOf<T> {
  return (parent || document).querySelectorAll<T>(selector);
}

export function createEl<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attrs: Record<string, string> = {},
  ...children: (string | HTMLElement)[]
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value);
  }
  for (const child of children) {
    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  }
  return el;
}

export function renderToApp(...children: HTMLElement[]): void {
  const app = document.getElementById('app');
  if (!app) throw new Error('#app not found');
  for (const child of children) {
    app.appendChild(child);
  }
}
