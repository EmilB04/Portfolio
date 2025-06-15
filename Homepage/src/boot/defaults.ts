import { QBtn } from 'quasar';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const setDefault = (comp: any, key: string, defaultValue: any) => {
  if (comp.props && comp.props[key]) {
    if (comp.props[key].type) {
      comp.props[key].default = defaultValue;
    } else {
      comp.props[key] = { type: comp.props[key], default: defaultValue };
    }
  } else {
    // Optionally log or handle the case where the prop does not exist
    console.warn(`Prop '${key}' does not exist on component`, comp);
  }
};

/*
const setMulti = (
  comps: Component | Component[],
  keyvals: Record<string, any>
) => {
  (Array.isArray(comps) ? comps : [comps]).forEach((comp) => {
    Object.entries(keyvals).forEach(([key, val]) => {
      setDefault(comp, key, val);
    });
  });
  return keyvals;
};
*/

// BTN
setDefault(QBtn, 'textColor', 'black');
setDefault(QBtn, 'outline', false);
setDefault(QBtn, 'flat', false);
setDefault(QBtn, 'round', false);
setDefault(QBtn, 'color', 'accent');
