export const ComponentController = (component: React.JSX.Element[]) => ({
  add: (newComponent: React.ReactElement) => {
    return ComponentController([...component, newComponent]);
  },
  delete: () => {},
  get: () => component,
});
