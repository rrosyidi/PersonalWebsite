const display = (ref, margin) => {
    ref.current.style.transition = "all .5s ease-in"
    ref.current.style.marginTop = margin;
    ref.current.style.opacity = "100%";
  };
  
const hide = (ref, margin) => {
    ref.current.style.transition = "all .2s ease-in"
    ref.current.style.marginTop = margin;
    ref.current.style.opacity = "0%";
};


export default {displayFunc: display, hideFunc: hide};