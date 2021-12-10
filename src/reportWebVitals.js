const reportWebVitals = onEntry => {
  if (onEntry && onEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onEntry);
      getFID(onEntry);
      getFCP(onEntry);
      getLCP(onEntry);
      getTTFB(onEntry);
    });
  }
};

export default reportWebVitals;
