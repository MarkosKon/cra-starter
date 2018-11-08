import { keyframes } from "styled-components";

export default {
  fadeIn: keyframes`
    from {opacity: 0}

    to { opacity: 1}
    `,
  fadeOut: keyframes`
    from {opacity: 1}

    to { opacity: 0}
    `
};
