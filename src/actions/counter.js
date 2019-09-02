export const addRequest = store => {
  const newCounters = { ...store.state.counters };
  newCounters.requests++;
  store.setState({ counters: newCounters });
};

export const addSuccess = store => {
  const newCounters = { ...store.state.counters };
  newCounters.success++;
  store.setState({ counters: newCounters });
};

export const addFail = store => {
  const newCounters = { ...store.state.counters };
  newCounters.fail++;
  store.setState({ counters: newCounters });
};

export const addToCounter = (store, number) => {
  const newCounter = store.state.counter + number
  store.setState({ counter: newCounter })
}
