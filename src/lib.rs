use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

macro_rules! println {
    ($($t:tt)*) => {
        log(&format!($($t)*))
    };
}

#[wasm_bindgen]
pub fn test() {
    println!("Hello, world!");
}
