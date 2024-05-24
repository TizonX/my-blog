// lib/fontawesome.js
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faUser, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false; // Prevent Font Awesome from adding its own CSS

library.add(faCoffee, faUser, faEnvelope, faLink);
