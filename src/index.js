import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import initCloseVideo from "./scripts/close";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Initialize close video functionality
initCloseVideo();
