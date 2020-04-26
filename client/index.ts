const rust = import('../pkg');

rust.then(rust => {
    rust.test();
}).catch(console.error);