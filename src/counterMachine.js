import { createMachine, assign } from "xstate";

export const counterMachine = createMachine({
  id: "counter",
  initial: "active",
  // 초기 상태
  context: { count: 0 },
  states: {
    active: {
      on: {
        // 상태 전환을 트리거할 이벤트를 정의
        INCREMENT: {
          actions: assign({
            count: (context) => context.count + 1,
          }),
        },
        DECREMENT: {
          actions: assign({
            count: (context) => context.count - 1,
          }),
        },
      },
    },
  },
});
