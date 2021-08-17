import { animation, style, animate, trigger, transition, useAnimation } from '@angular/animations';

export const shrink = animation([
    style({ 
      transform: 'scale(1.3) translateY(calc(-1 * (0.5* var(--cube-height))))',
      left: "{{left}}",
      top: "{{top}}",
      transformOrigin: "{{transformOrigin}}", 
    }),
    animate('{{duration}}ms {{easing}}'),
  ]);
  
  export const expand = animation([
    style({ 
      transform: 'scale(2) translateX(-50%)',
      left: "{{left}}",
      top: "{{top}}",
      transformOrigin: "{{transformOrigin}}", 
    }),
    animate('{{duration}}ms {{easing}}'),
  ]);