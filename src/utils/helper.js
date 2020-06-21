const isStringPresentInElement = (element, input) => element.toLowerCase().includes(input.toLowerCase());

const debounce = (callback, delay) =>{
    let timer;
    return function(...args){
      clearTimeout(timer);
      timer = setTimeout(()=>{
        callback(...args);
      }, delay);
    }
};

export  {isStringPresentInElement, debounce };
