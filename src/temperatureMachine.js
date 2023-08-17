import { createMachine, assign } from "xstate";

export const temperatureMachine = createMachine({
  initial: "active",
  context: { C: undefined, F: undefined },
  states: {
    active: {
      on: {
        CELSIUS: {
          actions: assign({
            C: (_, event) => event.value,
            F: (_, event) =>
              event.value.length ? +event.value * (9 / 5) + 32 : "",
          }),
        },
        FAHRENHEIT: {
          actions: assign({
            C: (_, event) =>
              event.value.length ? (+event.value - 32) * (9 / 5) : "",
            F: (_, event) => event.value,
          }),
        },
      },
    },
  },
});
